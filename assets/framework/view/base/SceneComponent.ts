const { ccclass, property } = cc._decorator;
@ccclass
export default class SceneComponent extends cc.Component{
    sceneCtrl: bb.SceneCtrl = null;

    initBind() {
        bb.UIBind.bindComponent(this);
    }

    onEnter() : void {

    }

    onExit() : void {

    }
}