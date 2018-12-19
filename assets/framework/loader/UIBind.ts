const DEFAULT_EVENT_NAMES = [
    '_onTouchStart',
    '_onTouchMove',
    '_onTouchEnd',
    '_onTouchCancel',
];


export default class UIBind {

    static singleInstance: UIBind = null;
    static getInstance(): UIBind {
        if (UIBind.singleInstance == null) {
            UIBind.singleInstance = new UIBind();
        }
        return UIBind.singleInstance;
    }


    private _prefix: string = '_';
    private _plugins: Array<any> = [];
   

    // 绑定组件
    public bindComponent(component: cc.Component, options: object = null) : void {
        component["$options"] = options || {};
    
        let root = component.node;
        root["_components"].forEach((nodeComponent) => {
            let name = this.getComponentName(nodeComponent);
            name = `$${name}`;
            root[name] = nodeComponent;
        });
        
        //绑定根节点触摸事件
        this.bindTouchEvent(root, component, DEFAULT_EVENT_NAMES);
        //绑定所有组件子节点
        this.bindNode(component.node, component);
    }

    // 编写子节点到 target 对象
    public bindNode(node : cc.Node, target: cc.Component, options: object = null) : void {
        //初始选项
        target["$options"] = options || {};
        //检查属性收集器
        if (target["$collector"]) {
            //重复绑定，退出
            if (target["$collector"].node === node) {
                return;
            }
            //更换绑定，删除之前绑定的节点
            delete target["$collector"].node;
            //遍历收集器上的属性名，删除绑定属性
            Object.keys(target["$collector"]).forEach((key) => {
                delete target[key];
            });
        }
        
        //初始化收集器
        target["$collector"] = { node };
        //遍历根节点上的组件并绑定到target
        node["_components"].forEach((component) => {
            let name = this.getComponentName(component);
            name = `$${name}`;
            target[name] = component;
            target["$collector"][name] = component;
        });
        
        //开始绑定节点
        this.bindStartByPlugins(node, target);
        this.bindSubNode(node, target);
        this.bindEndByPlugins(node, target);
    }

    /**
     * 递归绑定节点
     * @param {cc.Node} nodeObject 
     * @param {Object} target 
     */
    private bindSubNode(nodeObject:  cc.Node, target: cc.Component ) {
        const node = nodeObject;
        let isBindNode = false;
        //绑定组件到自身node节点上
        if (node.name[0] === this._prefix) {
            node["_components"].forEach((component) => {
                let name = this.getComponentName(component);
                
                name = `$${name}`;
                if (node[name] && target["$options"].debug) {
                    cc.warn(`${name} property is already exists`);
                    return;
                }

                node[name] = component;
                //检查组件 onBind 函数,通知组件,target 对象在绑定自己
                if (this.isFunction(component.onBind)) {
                    component.onBind(target);
                }
                
                // if (component instanceof Thor) {
                //     //判定是否将要自行绑定的节点
                //     if (!isBindNode && component !== target) {
                //         isBindNode = true;
                //     }

                //     if (!node.active) {
                //         component.bindHammer();
                //     }
                // }
            });
        }

        //执行插件
        let bool = this.checkNodeByPlugins(node, target);
        if (!bool || isBindNode) {
            return;
        }
        
        node.children.forEach((child) => {
            let name = child.name;
            if (name[0] === this._prefix) {
                let index = name.indexOf('$');

                //检查控件别名
                if (index !== -1) {
                    child["$eventName"] = name.substr(0, index);
                    child["$"]= name.substr(index + 1);
                    name = child["$eventName"] + child["$"][0].toUpperCase() + child["$"].substr(1);
                    if (!CC_EDITOR) {
                        child.name = name;
                    }
                }

                if (target[name] && target["$options"].debug) {
                    cc.warn(`${target.name}.${name} property is already exists`);
                    return;
                }
                this.bindTouchEvent(child, target);

                target[name] = child;

                //保存绑定的指针
                if (target["$collector"]) {
                    target["$collector"][name] = child;
                }
            } else if (!node[name]) {
                //绑定非前缀子节点
                node[name] = child;
            }

            this.bindSubNode(child, target);
        });
    }

    private registerPlugin(plugins) : void {
        if (!Array.isArray(plugins)) {
            plugins = [plugins];
        }

        plugins.forEach((plugin) => {
            //插件能不重复
            let findPlugin = this._plugins.some(item => item.name === plugin.name || item === plugin);
            if (findPlugin) {
                return;
            }

            //执行插件注册事件
            this._plugins.push(plugin);
            if (plugin.onRegister) {
                plugin.onRegister();
            }
        });
    }

    /**
     * 获取组件名字
     * @param {cc.Component} component 
     */
    public getComponentName(component : cc.Component) {
        return component.name.match(/<.*>$/)[0].slice(1, -1);
    }

    // 执行插件onBindStart事件s
    private bindStartByPlugins(node: cc.Node, target: cc.Component) {
        this._plugins.forEach((plugin) => {
            if (plugin.onBindStart) {
                plugin.onBindStart(node, target);
            }
        });
    }

    // 执行插件onBindEnd事件
    private bindEndByPlugins(node : cc.Node, target: cc.Component) {
        this._plugins.forEach((plugin) => {
            if (plugin.onBindEnd) {
                plugin.onBindEnd(node, target);
            }
        });
    }

    // 绑定触摸事件
    private getTouchEventName(node : cc.Node, event : string = null){
        let name = node["$eventName"] || node.name;
        if (name) {
            name = name[this._prefix.length].toUpperCase() + name.slice(this._prefix.length + 1);
        }

        if (event) {
            return `_on${name}${event}`;
        }

        return [
            `_on${name}TouchStart`,
            `_on${name}TouchMove`,
            `_on${name}TouchEnd`,
            `_on${name}TouchCancel`,
        ];
    }

  

    // 绑定事件
    private bindTouchEvent(node: cc.Node, target: cc.Component, defaultNames = null): void {
        //todo: EditBox 组件不能注册触摸事件,在原生上会导致不能被输入
        if (node.getComponent(cc.EditBox)) {
            return;
        }

        const eventNames = defaultNames || this.getTouchEventName(node);
        const eventTypes = [
            cc.Node.EventType.TOUCH_START,
            cc.Node.EventType.TOUCH_MOVE,
            cc.Node.EventType.TOUCH_END,
            cc.Node.EventType.TOUCH_CANCEL,
        ];

        eventNames.forEach((eventName, index) => {
            const tempEvent = target[eventName];
            if (!tempEvent && !node.getComponent(cc.Button)) {
                return;
            }

            node.on(eventTypes[index], (event) => {
                //被禁用的node 节点不响应事件
                let eventNode = event.currentTarget;
                if (eventNode.interactable === false || eventNode.active === false) {
                    return;
                }
                
                //检查button组件是否有事件处理函数，有则执行插件事件处理
                const button = eventNode.getComponent(cc.Button);
                if (button && button.interactable === false) {
                    return;
                }
                const eventFunc = target[eventName];
                //是否有效事件
                const isValidEvent = eventFunc || (button && button.clickEvents.length);
                if (isValidEvent) {
                    this.beforeHandleEventByPlugins(eventNode, event, !!eventFunc);
                }
                
                //执行事件函数，获取返回值
                let eventResult;
                if (eventFunc) {
                    eventResult = eventFunc.call(target, eventNode, event);
                    //如果是触摸开始事件，返回fasle，使用节点可穿透
                    if (event.type === cc.Node.EventType.TOUCH_START && eventResult === false) {
                        eventNode._touchListener.setSwallowTouches(false);
                    } else {
                        node["_touchListener"].setSwallowTouches(true);
                        event.stopPropagation();
                    }
                }

                //检查button组件是否有事件处理函数，有则执行插件事件处理
                if (isValidEvent) {
                    this.afterHandleEventByPlugins(eventNode, event, !!eventFunc, eventResult);
                }
            });
        });

        //绑定长按事件
        this.bindTouchLongEvent(node, target);
    }


    /**
     * 插件响应节点触摸前事件
     * @param node
     * @param event
     * @private
     */
    private beforeHandleEventByPlugins(node, event, hasEventFunc) : void {
        this._plugins.forEach((item) => {
            if (item.onBeforeHandleEvent) {
                item.onBeforeHandleEvent(node, event, hasEventFunc);
            }
        });
    }

    /**
     * 绑定长按事件
     * @param {cc.Node} node
     */
    private bindTouchLongEvent(nodeObject, target): void {
        const node = nodeObject;
        const eventName  = this.getTouchEventName(node, 'TouchLong');

        const touchLong  = target[`${eventName}`];
        if (!this.isFunction(touchLong)) {
            return;
        }

        node._touchLongTimer = null;
        node.on(cc.Node.EventType.TOUCH_END, () => {
            if (node._touchLongTimer) {
                clearTimeout(node._touchLongTimer);
                node._touchLongTimer = 0;
                delete node.interactable;
            }
        });

        node.on(cc.Node.EventType.TOUCH_START, (event) => {
            node._touchLongTimer = setTimeout(() => {
                //准备触发touchLong事件
                node.interactable = !!touchLong.call(target, node, event);
                node._touchLongTimer = 0;
            }, node.touchLongTime || 1000);
        });
    }

    /**
     * 拿所有插件去检查node 节点, onCheckNode返回为 false 的,此节点将不被绑定
     * @param node
     * @param target
     * @returns {boolean}
     * @private
     */
    private checkNodeByPlugins(node, target): any {
        // find
        const plugin = this._plugins.some((item) => {
            if (item.onCheckNode) {
                return item.onCheckNode(node, target) === false;
            }
            return null;
        });

        return !plugin;
    }

     /**
     * 插件响应节点触摸后事件
     * @param node
     * @param event
     * @private
     */
    private  afterHandleEventByPlugins(node, event, hasEventFunc, eventResult) : void {
        this._plugins.forEach((item) => {
            if (item.onAfterHandleEvent) {
                item.onAfterHandleEvent(node, event, hasEventFunc, eventResult);
            }
        });
    }

    public isFunction(value) : boolean{
        return typeof value === 'function';
    }
}
