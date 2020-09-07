
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Test3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxUZXN0My50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUFtQyx5QkFBWTtJQUEvQzs7SUFlQSxDQUFDO0lBZEcscUJBQUssR0FBTDtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBRS9DLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxjQUFjLEdBQUksRUFBRSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO1lBQ3pGLEVBQUUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQztZQUN2QyxFQUFFLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQztZQUMvQyxFQUFFLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUM7WUFDeEMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFekMsc0RBQXNEO1FBRXRELDRDQUE0QztRQUM1QyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQWRnQixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBZXpCO0lBQUQsWUFBQztDQWZELEFBZUMsQ0Fma0MsRUFBRSxDQUFDLFNBQVMsR0FlOUM7a0JBZm9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdDMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5kZWJ1Z0RyYXdGbGFncyA9ICBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0c1tcImVfYWFiYkJpdFwiXSB8XHJcbiAgICAgICAgY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHNbXCJlX3BhaXJCaXRcIl0gfFxyXG4gICAgICAgIGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzW1wiZV9jZW50ZXJPZk1hc3NCaXRcIl0gfFxyXG4gICAgICAgIGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzW1wiZV9qb2ludEJpdFwiXSB8XHJcbiAgICAgICAgY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHNbXCJlX3NoYXBlQml0XCJdO1xyXG5cclxuICAgICAgICAvLyBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmRlYnVnRHJhd0ZsYWdzID0gMDtcclxuXHJcbiAgICAgICAgLy8g5aaC5p6c5biM5pyb5L+u5pS56YeN5Yqb5Yqg6YCf5bqm5Li65YW25LuW5YC877yM5q+U5aaC5q+P56eS5Yqg6YCf6ZmN6JC9IDY0MCDlg4/ntKDvvIzpgqPkuYjlj6/ku6Xov5nmoLforr7nva7vvJpcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmdyYXZpdHkgPSBjYy52MigwLCAtNjQwKTtcclxuICAgIH1cclxufVxyXG4iXX0=