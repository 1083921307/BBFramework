"use strict";
cc._RF.push(module, '16f08EBJs1C5oeqemcCOgRk', 'test_scene4');
// resources/scene/test_view/test_scene4.ts

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
var test_scene4 = /** @class */ (function (_super) {
    __extends(test_scene4, _super);
    function test_scene4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    test_scene4.prototype.onLoad = function () {
        cc.log("test_scene4  onLoad");
    };
    test_scene4.prototype.onEnter = function () {
        cc.log("test_scene4  onEnter");
        cc.log(this.sceneCtrl.data);
    };
    test_scene4.prototype.onExit = function () {
        cc.log("test_scene4  onExit");
    };
    test_scene4.prototype.onEnable = function () {
        cc.log("test_scene4  onEnable");
    };
    test_scene4.prototype.onDisable = function () {
        cc.log("test_scene4  onDisable");
    };
    test_scene4 = __decorate([
        ccclass
    ], test_scene4);
    return test_scene4;
}(bb.SceneComponent));
exports.default = test_scene4;

cc._RF.pop();