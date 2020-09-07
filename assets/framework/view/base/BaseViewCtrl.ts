import UIAction from "./UIAction";

export default class BaseViewCtrl {
    rootPrefab: cc.Prefab;
    rootView: cc.Node;
    data: any;
    subUIStack: bb.UICtrl[];
    parentUICtrl: bb.UICtrl;


    setVisible(visible: boolean, cleanup: boolean = true) {
        if (visible) {
            
        }
    }

    removeUICtrl(ctrl: bb.UICtrl, cleanup: boolean = false) {
        for (let i = this.subUIStack.length - 1; i >= 0; i--) {
            if (this.subUIStack[i] === ctrl) {
                if(cc.isValid( this.subUIStack[i].rootView)) {
                    this.subUIStack[i].closeUI(cleanup);
                }
                this.subUIStack.splice(i, 1);
            }
        }
    }

    closeUI(cleanup: boolean = false, action?: bb.UI_ACTION_OUT) {
        let destroyFun = function() {
            if (this.parentUICtrl) {
                this.parentUICtrl.removeUICtrlFromParent(this);
            }
            cleanup && cc.assetManager.releaseAsset(this.rootPrefab);
            this.rootView.destroy();
        }.bind(this);
        if (action) {
            UIAction.getInstance().runViewOutAction(action, this.rootView, () => {
                destroyFun();
            });
            return;
        }
        destroyFun();
    }
}