const {ccclass, property} = cc._decorator;
@ccclass
export default class test_view_2 extends bb.BaseComponent {
    onLoad () {
       
    }

    onEnter() {
      //   for(let i = 0; i < 5; i++) {
      //       bb.ViewManager.showItemSync("test_scene/Item_View_1", {}, this.node, this.viewCtrl, () => {});
      //   }
    }

    _onBtnTouchEnd(sender) {
        // this.viewCtrl.destroyNode();
      // bb.ViewManager.showSubViewSync("test_scene/VIEW_3", {}, function(viewCtrl) {
      //    // this.viewCtrl.destroyNode();
      // }.bind(this));
   }
}