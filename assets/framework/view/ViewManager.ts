/**
 * 基于一个场景上的视图管理:
 * 1. (同步或者异步)显示一个 View
 * 2. (同步或者异步)显示一个 Item
 * 3. 回收一个视图节点
 */
export default class ViewManager {
    static singleInstance: ViewManager = null;
    static getInstance(): ViewManager {
        if (ViewManager.singleInstance == null) {
            ViewManager.singleInstance = new ViewManager();
        }
        return ViewManager.singleInstance;
    }

    viewStack: bb.ViewCtrl[] =  null;
    constructor() {
        this.viewStack = [];
    }

    
    showView(name: string,  prefab: cc.Prefab, data: any): bb.ViewCtrl {
        let viewCtrl = new bb.ViewCtrl();
        
        viewCtrl.node = cc.instantiate(prefab);
        viewCtrl.data = data;
        viewCtrl["_tag"] = "view";
        if (name) {
            viewCtrl.node.name = name;
        }
      
        cc.director.getScene().addChild(viewCtrl.node);

        let components = viewCtrl.node["_components"];
        if (components.length > 0) {
            viewCtrl.logicComponet = components[components.length - 1];
            viewCtrl.logicComponet["viewCtrl"] = viewCtrl;
            viewCtrl.logicComponet["initBind"]();
            viewCtrl.logicComponet["onEnter"]();
        }

        if (this.viewStack.length) {
            this.viewStack[this.viewStack.length - 1].hideView();
        }
       
        let key = cc.loader["_getReferenceKey"](prefab);
        viewCtrl["_referenceKey"] = key;
        this.viewStack.push(viewCtrl);
        bb.UILoader.retatinRes(key);
        bb.UILoader.retainNodeRes(viewCtrl.node);
       return viewCtrl;
    }

   
    showViewSync(pathStr: string, data: any,  callback?: (viewCtrl: bb.ViewCtrl)=>{}) {
        bb.UILoader.loadRes(pathStr, cc.Prefab, (prefab) => {
            let viewCtrl  = this.showView(prefab.name, prefab, data);
            if (callback) {
                callback(viewCtrl);
            }
        });
    }


    showSubView(name: string,  prefab: cc.Prefab, data: any):  bb.ViewCtrl {
        let viewCtrl = new bb.ViewCtrl();
        viewCtrl.node = cc.instantiate(prefab);
        viewCtrl.data = data;
        viewCtrl["_tag"] = "subView";
        if (name) {
            viewCtrl.node.name = name;
        }
      
        viewCtrl["parentViewCtrl"] =   this.viewStack[this.viewStack.length - 1];
        this.viewStack[this.viewStack.length - 1].node.addChild(viewCtrl.node);
        let components = viewCtrl.node["_components"];
        if (components.length > 0) {
            viewCtrl.logicComponet = components[components.length - 1];
            viewCtrl.logicComponet["viewCtrl"] = viewCtrl;
            viewCtrl.logicComponet["initBind"]();
            viewCtrl.logicComponet["onEnter"]();
        }
        this.viewStack[this.viewStack.length - 1].addSubViewCtrl(viewCtrl);
        let key = cc.loader["_getReferenceKey"](prefab);
        viewCtrl["_referenceKey"] = key;
        bb.UILoader.retatinRes(key);
        bb.UILoader.retainNodeRes(viewCtrl.node);
       return viewCtrl;
    }

    showSubViewSync(pathStr: string, data: any,  callback?: (viewCtrl: bb.ViewCtrl)=>{}) {
        bb.UILoader.loadRes(pathStr, cc.Prefab, (prefab) => {
            let viewCtrl  = this.showSubView(prefab.name, prefab, data);
            if (callback) {
                callback(viewCtrl);
            }
        });
    }


    showItem(name: string,  prefab: cc.Prefab, data: any, parent: cc.Node, parentViewCtrl: bb.ViewCtrl) {
        let viewCtrl = new bb.ViewCtrl();
        viewCtrl.node = cc.instantiate(prefab);
        viewCtrl.data = data;
        viewCtrl["_tag"] = "item";
        if (name) {
            viewCtrl.node.name = name;
        }
        parent.addChild(viewCtrl.node);
        viewCtrl["parentViewCtrl"] = parentViewCtrl;
        let components = viewCtrl.node["_components"];
        if (components.length > 0) {
            viewCtrl.logicComponet = components[components.length - 1];
            viewCtrl.logicComponet["viewCtrl"] = viewCtrl;
            viewCtrl.logicComponet["initBind"]();
            viewCtrl.logicComponet["onEnter"]();
        }
        parentViewCtrl.addSubViewCtrl(viewCtrl);

        let key = cc.loader["_getReferenceKey"](prefab);
        viewCtrl["_referenceKey"] = key;
        bb.UILoader.retatinRes(key);
        bb.UILoader.retainNodeRes(viewCtrl.node);

       return viewCtrl;
    }

    showItemSync(pathStr: string, data: any,  parent: cc.Node, parentViewCtrl: bb.ViewCtrl, callback?: (viewCtrl: bb.ViewCtrl)=>{}) {
        bb.UILoader.loadRes(pathStr, cc.Prefab, (prefab) => {
            let viewCtrl  = this.showItem(prefab.name, prefab, data, parent, parentViewCtrl);
            if (callback) {
                callback(viewCtrl);
            }
        });
    }

    popView(depth?: number) {
        if (depth !== null) {
            if (this.viewStack.length <= depth) {
                cc.log(`pop view depth error viewStack = ${this.viewStack.length}, depth = ${depth}`);
                return;
            }

            let viewCtrls = this.viewStack.splice(this.viewStack.length - depth, depth);
            viewCtrls.forEach((viewCtrl) => {
                viewCtrl.destroyNode();
            })
            this.viewStack[this.viewStack.length - 1].showView();
            return;
        }

        if (this.viewStack.length < 2) {
            return;
        }
        let viewCtrl = this.viewStack.pop();
        viewCtrl.destroyNode();
        this.viewStack[this.viewStack.length - 1].showView();
    }

    removeView(viewCtrl: bb.ViewCtrl) {
       let deleteIdx = this.viewStack.indexOf(viewCtrl);
       if (deleteIdx >= 0) {
           this.viewStack.splice(deleteIdx, 1)[0];
       }
    }
}