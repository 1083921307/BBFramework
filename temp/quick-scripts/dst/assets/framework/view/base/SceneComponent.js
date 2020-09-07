
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/view/base/SceneComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0cf6flw9wNM+amXjXvMUJxo', 'SceneComponent');
// framework/view/base/SceneComponent.ts

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
var SceneComponent = /** @class */ (function (_super) {
    __extends(SceneComponent, _super);
    function SceneComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sceneCtrl = null;
        return _this;
    }
    SceneComponent.prototype.initBind = function () {
        bb.UIBind.bindComponent(this);
    };
    SceneComponent.prototype.onEnter = function () {
    };
    SceneComponent.prototype.onExit = function () {
    };
    SceneComponent = __decorate([
        ccclass
    ], SceneComponent);
    return SceneComponent;
}(cc.Component));
exports.default = SceneComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx2aWV3XFxiYXNlXFxTY2VuZUNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQWNDO1FBYkcsZUFBUyxHQUFpQixJQUFJLENBQUM7O0lBYW5DLENBQUM7SUFYRyxpQ0FBUSxHQUFSO1FBQ0ksRUFBRSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELGdDQUFPLEdBQVA7SUFFQSxDQUFDO0lBRUQsK0JBQU0sR0FBTjtJQUVBLENBQUM7SUFiZ0IsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQWNsQztJQUFELHFCQUFDO0NBZEQsQUFjQyxDQWQyQyxFQUFFLENBQUMsU0FBUyxHQWN2RDtrQkFkb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lQ29tcG9uZW50IGV4dGVuZHMgY2MuQ29tcG9uZW50e1xyXG4gICAgc2NlbmVDdHJsOiBiYi5TY2VuZUN0cmwgPSBudWxsO1xyXG5cclxuICAgIGluaXRCaW5kKCkge1xyXG4gICAgICAgIGJiLlVJQmluZC5iaW5kQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW50ZXIoKSA6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkV4aXQoKSA6IHZvaWQge1xyXG5cclxuICAgIH1cclxufSJdfQ==