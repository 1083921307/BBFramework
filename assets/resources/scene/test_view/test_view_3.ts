const {ccclass, property} = cc._decorator;
@ccclass
export default class test_view_3 extends bb.BaseComponent {
    onLoad () {
    //    this.scheduleOnce(() => {
    //        bb.SceneManager.loadScene("test_scene4", {a: "100", b: "2000"});
    //        //  bb.ViewManager.popView(3);
    //    }, 5);
    }

    _onBtnTouchEnd(sender) {
       // this.viewCtrl
    //   bb.ViewManager.showViewSync("test_scene/VIEW_3", {}, function(viewCtrl) {
    //        this.viewCtrl.destroyNode();
    //   }.bind(this));
        // bb.ViewManager.popView(2);
        this.viewCtrl.destroyNode();
       // this.viewCtrl.popView(2);
   }
}