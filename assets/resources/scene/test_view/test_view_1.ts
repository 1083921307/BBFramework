const {ccclass, property} = cc._decorator;
@ccclass
export default class test_view_1 extends bb.BaseComponent {
    onLoad () {
       
    }


    onEnter() {
        // for(let i = 0; i < 5; i++) {
        //     bb.ViewManager.showItemSync("test_scene/Item_View_1", {}, this.node, this.viewCtrl, () => {});
        // }
     
    }

    _onBtnTouchEnd(sender) {
       
       bb.ViewManager.showSubViewSync("scene/test_view/VIEW_2", {}, function(viewCtrl) {
           // this.viewCtrl.destroyNode();
       }.bind(this));

       bb.ViewManager.showSubViewSync("scene/test_view/VIEW_3", {}, function(viewCtrl) {
        // this.viewCtrl.destroyNode();
        }.bind(this));
    }
}