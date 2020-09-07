"use strict";
cc._RF.push(module, 'f0349vR6JlJAow86GoOQtmi', 'BaseViewCtrl');
// framework/view/base/BaseViewCtrl.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UIAction_1 = require("./UIAction");
var BaseViewCtrl = /** @class */ (function () {
    function BaseViewCtrl() {
    }
    BaseViewCtrl.prototype.setVisible = function (visible, cleanup) {
        if (cleanup === void 0) { cleanup = true; }
        if (visible) {
        }
    };
    BaseViewCtrl.prototype.removeUICtrl = function (ctrl, cleanup) {
        if (cleanup === void 0) { cleanup = false; }
        for (var i = this.subUIStack.length - 1; i >= 0; i--) {
            if (this.subUIStack[i] === ctrl) {
                if (cc.isValid(this.subUIStack[i].rootView)) {
                    this.subUIStack[i].closeUI(cleanup);
                }
                this.subUIStack.splice(i, 1);
            }
        }
    };
    BaseViewCtrl.prototype.closeUI = function (cleanup, action) {
        if (cleanup === void 0) { cleanup = false; }
        var destroyFun = function () {
            if (this.parentUICtrl) {
                this.parentUICtrl.removeUICtrlFromParent(this);
            }
            cleanup && cc.assetManager.releaseAsset(this.rootPrefab);
            this.rootView.destroy();
        }.bind(this);
        if (action) {
            UIAction_1.default.getInstance().runViewOutAction(action, this.rootView, function () {
                destroyFun();
            });
            return;
        }
        destroyFun();
    };
    return BaseViewCtrl;
}());
exports.default = BaseViewCtrl;

cc._RF.pop();