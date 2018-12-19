const {ccclass, property} = cc._decorator;
@ccclass
export default class test_scene3 extends bb.SceneComponent {
    @property(cc.Prefab)
    prefab: cc.Prefab = null;
    onLoad () {
        bb.Localization.init();
        cc.log("test_scene3  onLoad");
        bb.ViewManager.showView(this.prefab.name, this.prefab, {"aaa": 11, ddd:"333"});
    }


    start() {
        cc.log("test_scene3  onEnter");

      
        bb.log("hello world !!! ");
        var fun = function() {
            bb.log2("hello world !!! ");
        }
        bb.info("hello world !!! ");
        bb.warn("hello world !!! ");
        fun();
        bb.log(bb._T(1001));
        // 
    }

    onExit() {
        cc.log("test_scene3  onExit");
    }

    onDestroy() {
        cc.log("test_scene3  onDestroy");
    }

    onEnable() {
        cc.log("test_scene3  onEnable");
    }

    onDisable() {
        cc.log("test_scene3  onDisable");
    }
}
