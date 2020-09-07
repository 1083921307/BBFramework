const { ccclass, property } = cc._decorator;
@ccclass
export default class BaseComponent extends cc.Component{
    @property({type: bb.UI_ACTION_IN, tooltip: "进入动画"})
    actionInId: bb.UI_ACTION_IN = bb.UI_ACTION_IN.NONE;
    @property({type: bb.UI_ACTION_OUT, tooltip: "退出动画"})
    actionOutId: bb.UI_ACTION_OUT = bb.UI_ACTION_OUT.NONE;

    uiCtrl: bb.UICtrl = null;

    onLoad() {
       bb.UIManager.loadAllPlugin(this.node, this);
    }

    start() {
        bb.UIManager.startAllPlugin(this.node, this);
        this.onEnter();
    }


    onEnter() : void {
        bb.UIManager.enterAllPlugin(this.node, this);
    }

    onExit() : void {

    }
}