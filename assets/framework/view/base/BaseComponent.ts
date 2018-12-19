const { ccclass, property } = cc._decorator;
@ccclass
export default class BaseComponent extends cc.Component{
    viewCtrl: bb.ViewCtrl = null;

    initBind() {
        bb.UIBind.bindComponent(this);
    }

    onEnter() : void {

    }

    onExit() : void {

    }
}