"use strict";
cc._RF.push(module, 'd83cfHFN6JMxbgbcS03l9jK', 'test_scene3');
// resources/scene/test_view/test_scene3.ts

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
var test_scene3 = /** @class */ (function (_super) {
    __extends(test_scene3, _super);
    function test_scene3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prefab = null;
        return _this;
    }
    test_scene3.prototype.onLoad = function () {
        bb.Localization.init();
        cc.log("test_scene3  onLoad");
        bb.ViewManager.showView(this.prefab.name, this.prefab, { "aaa": 11, ddd: "333" });
    };
    test_scene3.prototype.start = function () {
        cc.log("test_scene3  onEnter");
        bb.log("hello world !!! ");
        var fun = function () {
            bb.log2("hello world !!! ");
        };
        bb.info("hello world !!! ");
        bb.warn("hello world !!! ");
        fun();
        bb.log(bb._T(1001));
        // 
    };
    test_scene3.prototype.onExit = function () {
        cc.log("test_scene3  onExit");
    };
    test_scene3.prototype.onDestroy = function () {
        cc.log("test_scene3  onDestroy");
    };
    test_scene3.prototype.onEnable = function () {
        cc.log("test_scene3  onEnable");
    };
    test_scene3.prototype.onDisable = function () {
        cc.log("test_scene3  onDisable");
    };
    __decorate([
        property(cc.Prefab)
    ], test_scene3.prototype, "prefab", void 0);
    test_scene3 = __decorate([
        ccclass
    ], test_scene3);
    return test_scene3;
}(bb.SceneComponent));
exports.default = test_scene3;

cc._RF.pop();