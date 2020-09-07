"use strict";
cc._RF.push(module, '88199ZYA9lKAa38v+XasKnC', 'test_view_3');
// resources/scene/test_view/test_view_3.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var test_view_3 = /** @class */ (function (_super) {
    __extends(test_view_3, _super);
    function test_view_3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    test_view_3.prototype.onLoad = function () {
        //    this.scheduleOnce(() => {
        //        bb.SceneManager.loadScene("test_scene4", {a: "100", b: "2000"});
        //        //  bb.ViewManager.popView(3);
        //    }, 5);
    };
    test_view_3.prototype._onBtnTouchEnd = function (sender) {
        // this.viewCtrl
        //   bb.ViewManager.showViewSync("test_scene/VIEW_3", {}, function(viewCtrl) {
        //        this.viewCtrl.destroyNode();
        //   }.bind(this));
        // bb.ViewManager.popView(2);
        this.viewCtrl.destroyNode();
        // this.viewCtrl.popView(2);
    };
    test_view_3 = __decorate([
        ccclass
    ], test_view_3);
    return test_view_3;
}(bb.BaseComponent));
exports.default = test_view_3;

cc._RF.pop();