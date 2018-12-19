const {ccclass, property} = cc._decorator;
@ccclass
export default class test_scene4 extends bb.SceneComponent {
    onLoad () {
        cc.log("test_scene4  onLoad");
    }

    onEnter() {
        cc.log("test_scene4  onEnter");
        cc.log(this.sceneCtrl.data);
    }

    onExit() {
        cc.log("test_scene4  onExit");
    }

    onEnable() {
        cc.log("test_scene4  onEnable");
    }

    onDisable() {
        cc.log("test_scene4  onDisable");
    }
}