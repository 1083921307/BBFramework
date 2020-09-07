"use strict";
cc._RF.push(module, '44f19MV3JFDjYqxsw2RRrDx', 'test_item_view');
// resources/scene/test_view/test_item_view.ts

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
var test_item_view = /** @class */ (function (_super) {
    __extends(test_item_view, _super);
    function test_item_view() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    test_item_view.prototype.onLoad = function () {
        cc.log("test_item_view  onLoad");
    };
    test_item_view.prototype.onEnter = function () {
        cc.log("test_item_view  onEnter");
    };
    test_item_view.prototype.onExit = function () {
        cc.log("test_item_view  onExit");
    };
    test_item_view.prototype.onDestroy = function () {
        cc.log("test_item_view  onDestroy");
    };
    test_item_view.prototype.onEnable = function () {
        cc.log("test_item_view  onEnable");
    };
    test_item_view.prototype.onDisable = function () {
        cc.log("test_item_view  onDisable");
    };
    test_item_view = __decorate([
        ccclass
    ], test_item_view);
    return test_item_view;
}(bb.SceneComponent));
exports.default = test_item_view;

cc._RF.pop();