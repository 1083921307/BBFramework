"use strict";
cc._RF.push(module, '05f3dSzdGNBOI7RPQkEg14o', 'Test3');
// script/Test3.ts

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
var Test3 = /** @class */ (function (_super) {
    __extends(Test3, _super);
    function Test3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Test3.prototype.start = function () {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits["e_aabbBit"] |
            cc.PhysicsManager.DrawBits["e_pairBit"] |
            cc.PhysicsManager.DrawBits["e_centerOfMassBit"] |
            cc.PhysicsManager.DrawBits["e_jointBit"] |
            cc.PhysicsManager.DrawBits["e_shapeBit"];
        // cc.director.getPhysicsManager().debugDrawFlags = 0;
        // 如果希望修改重力加速度为其他值，比如每秒加速降落 640 像素，那么可以这样设置：
        cc.director.getPhysicsManager().gravity = cc.v2(0, -640);
    };
    Test3 = __decorate([
        ccclass
    ], Test3);
    return Test3;
}(cc.Component));
exports.default = Test3;

cc._RF.pop();