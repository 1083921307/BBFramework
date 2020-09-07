"use strict";
cc._RF.push(module, '5109aw9xsZOvJK270goRGzt', 'test_scene1');
// resources/scene/test_uiloader/test_scene1.ts

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
var test_scene1 = /** @class */ (function (_super) {
    __extends(test_scene1, _super);
    function test_scene1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prefab = null;
        return _this;
    }
    test_scene1.prototype.onLoad = function () {
        bb.ViewManager.showView(this.prefab.name, this.prefab, { "aaa": 11, ddd: "333" });
    };
    __decorate([
        property(cc.Prefab)
    ], test_scene1.prototype, "prefab", void 0);
    test_scene1 = __decorate([
        ccclass
    ], test_scene1);
    return test_scene1;
}(bb.BaseComponent));
exports.default = test_scene1;

cc._RF.pop();