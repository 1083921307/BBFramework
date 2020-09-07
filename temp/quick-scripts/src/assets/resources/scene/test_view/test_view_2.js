"use strict";
cc._RF.push(module, '3ff6dTSubdBVZfl+NrXUwms', 'test_view_2');
// resources/scene/test_view/test_view_2.ts

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
var test_view_2 = /** @class */ (function (_super) {
    __extends(test_view_2, _super);
    function test_view_2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    test_view_2.prototype.onLoad = function () {
    };
    test_view_2.prototype.onEnter = function () {
        //   for(let i = 0; i < 5; i++) {
        //       bb.ViewManager.showItemSync("test_scene/Item_View_1", {}, this.node, this.viewCtrl, () => {});
        //   }
    };
    test_view_2.prototype._onBtnTouchEnd = function (sender) {
        // this.viewCtrl.destroyNode();
        // bb.ViewManager.showSubViewSync("test_scene/VIEW_3", {}, function(viewCtrl) {
        //    // this.viewCtrl.destroyNode();
        // }.bind(this));
    };
    test_view_2 = __decorate([
        ccclass
    ], test_view_2);
    return test_view_2;
}(bb.BaseComponent));
exports.default = test_view_2;

cc._RF.pop();