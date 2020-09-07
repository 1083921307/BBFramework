
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/view/base/BaseViewCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx2aWV3XFxiYXNlXFxCYXNlVmlld0N0cmwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBa0M7QUFFbEM7SUFBQTtJQXlDQSxDQUFDO0lBakNHLGlDQUFVLEdBQVYsVUFBVyxPQUFnQixFQUFFLE9BQXVCO1FBQXZCLHdCQUFBLEVBQUEsY0FBdUI7UUFDaEQsSUFBSSxPQUFPLEVBQUU7U0FFWjtJQUNMLENBQUM7SUFFRCxtQ0FBWSxHQUFaLFVBQWEsSUFBZSxFQUFFLE9BQXdCO1FBQXhCLHdCQUFBLEVBQUEsZUFBd0I7UUFDbEQsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFO2dCQUM3QixJQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ3ZDO2dCQUNELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNoQztTQUNKO0lBQ0wsQ0FBQztJQUVELDhCQUFPLEdBQVAsVUFBUSxPQUF3QixFQUFFLE1BQXlCO1FBQW5ELHdCQUFBLEVBQUEsZUFBd0I7UUFDNUIsSUFBSSxVQUFVLEdBQUc7WUFDYixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbEQ7WUFDRCxPQUFPLElBQUksRUFBRSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNiLElBQUksTUFBTSxFQUFFO1lBQ1Isa0JBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDM0QsVUFBVSxFQUFFLENBQUM7WUFDakIsQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFPO1NBQ1Y7UUFDRCxVQUFVLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQXpDQSxBQXlDQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJQWN0aW9uIGZyb20gXCIuL1VJQWN0aW9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlVmlld0N0cmwge1xyXG4gICAgcm9vdFByZWZhYjogY2MuUHJlZmFiO1xyXG4gICAgcm9vdFZpZXc6IGNjLk5vZGU7XHJcbiAgICBkYXRhOiBhbnk7XHJcbiAgICBzdWJVSVN0YWNrOiBiYi5VSUN0cmxbXTtcclxuICAgIHBhcmVudFVJQ3RybDogYmIuVUlDdHJsO1xyXG5cclxuXHJcbiAgICBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4sIGNsZWFudXA6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICAgICAgaWYgKHZpc2libGUpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVVJQ3RybChjdHJsOiBiYi5VSUN0cmwsIGNsZWFudXA6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnN1YlVJU3RhY2subGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3ViVUlTdGFja1tpXSA9PT0gY3RybCkge1xyXG4gICAgICAgICAgICAgICAgaWYoY2MuaXNWYWxpZCggdGhpcy5zdWJVSVN0YWNrW2ldLnJvb3RWaWV3KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ViVUlTdGFja1tpXS5jbG9zZVVJKGNsZWFudXApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJVSVN0YWNrLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVVJKGNsZWFudXA6IGJvb2xlYW4gPSBmYWxzZSwgYWN0aW9uPzogYmIuVUlfQUNUSU9OX09VVCkge1xyXG4gICAgICAgIGxldCBkZXN0cm95RnVuID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudFVJQ3RybCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnRVSUN0cmwucmVtb3ZlVUlDdHJsRnJvbVBhcmVudCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjbGVhbnVwICYmIGNjLmFzc2V0TWFuYWdlci5yZWxlYXNlQXNzZXQodGhpcy5yb290UHJlZmFiKTtcclxuICAgICAgICAgICAgdGhpcy5yb290Vmlldy5kZXN0cm95KCk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIGlmIChhY3Rpb24pIHtcclxuICAgICAgICAgICAgVUlBY3Rpb24uZ2V0SW5zdGFuY2UoKS5ydW5WaWV3T3V0QWN0aW9uKGFjdGlvbiwgdGhpcy5yb290VmlldywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGVzdHJveUZ1bigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZXN0cm95RnVuKCk7XHJcbiAgICB9XHJcbn0iXX0=