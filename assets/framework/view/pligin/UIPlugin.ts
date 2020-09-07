/**
* @author 虣虣
*/
export default class UIPlugin {
    name: string = ""; // 插件的名字

    register() {
        // TODO 插件注册事件 -> 由子类实现
    }

    load(node: cc.Node, component:  cc.Component) {
        // TODO 插件开始执行 -> 由子类实现
    }

    start(node: cc.Node, component: cc.Component) {

    }

    enter(node: cc.Node, component: cc.Component) {

    }

    destroy(node: cc.Node, component: cc.Component) {
        // TODO 界面销毁时调用 -> 由子类实现
    }

}
