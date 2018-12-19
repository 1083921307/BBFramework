const {ccclass, property} = cc._decorator;
@ccclass
export default class test_item_view extends bb.SceneComponent {
    onLoad () {
        
        cc.log("test_item_view  onLoad");
    }


    onEnter() {
        cc.log("test_item_view  onEnter");
    }

    onExit() {
        cc.log("test_item_view  onExit");
    }

    onDestroy() {
        cc.log("test_item_view  onDestroy");
    }

    onEnable() {
        cc.log("test_item_view  onEnable");
    }

    onDisable() {
        cc.log("test_item_view  onDisable");
    }
}