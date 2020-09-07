
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/view/base/BaseComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e3ff1NW6qNM0LvJ1nw2QeKI', 'BaseComponent');
// framework/view/base/BaseComponent.ts

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
var BaseComponent = /** @class */ (function (_super) {
    __extends(BaseComponent, _super);
    function BaseComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionInId = bb.UI_ACTION_IN.NONE;
        _this.actionOutId = bb.UI_ACTION_OUT.NONE;
        _this.uiCtrl = null;
        return _this;
    }
    BaseComponent.prototype.onLoad = function () {
        bb.UIManager.loadAllPlugin(this.node, this);
    };
    BaseComponent.prototype.start = function () {
        bb.UIManager.startAllPlugin(this.node, this);
        this.onEnter();
    };
    BaseComponent.prototype.onEnter = function () {
        bb.UIManager.enterAllPlugin(this.node, this);
    };
    BaseComponent.prototype.onExit = function () {
    };
    __decorate([
        property({ type: bb.UI_ACTION_IN, tooltip: "进入动画" })
    ], BaseComponent.prototype, "actionInId", void 0);
    __decorate([
        property({ type: bb.UI_ACTION_OUT, tooltip: "退出动画" })
    ], BaseComponent.prototype, "actionOutId", void 0);
    BaseComponent = __decorate([
        ccclass
    ], BaseComponent);
    return BaseComponent;
}(cc.Component));
exports.default = BaseComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx2aWV3XFxiYXNlXFxCYXNlQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBeUJDO1FBdkJHLGdCQUFVLEdBQW9CLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1FBRW5ELGlCQUFXLEdBQXFCLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1FBRXRELFlBQU0sR0FBYyxJQUFJLENBQUM7O0lBbUI3QixDQUFDO0lBakJHLDhCQUFNLEdBQU47UUFDRyxFQUFFLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCw2QkFBSyxHQUFMO1FBQ0ksRUFBRSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUdELCtCQUFPLEdBQVA7UUFDSSxFQUFFLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCw4QkFBTSxHQUFOO0lBRUEsQ0FBQztJQXRCRDtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsWUFBWSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUMsQ0FBQztxREFDQTtJQUVuRDtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUMsQ0FBQztzREFDRTtJQUpyQyxhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBeUJqQztJQUFELG9CQUFDO0NBekJELEFBeUJDLENBekIwQyxFQUFFLENBQUMsU0FBUyxHQXlCdEQ7a0JBekJvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUNvbXBvbmVudCBleHRlbmRzIGNjLkNvbXBvbmVudHtcclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogYmIuVUlfQUNUSU9OX0lOLCB0b29sdGlwOiBcIui/m+WFpeWKqOeUu1wifSlcclxuICAgIGFjdGlvbkluSWQ6IGJiLlVJX0FDVElPTl9JTiA9IGJiLlVJX0FDVElPTl9JTi5OT05FO1xyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBiYi5VSV9BQ1RJT05fT1VULCB0b29sdGlwOiBcIumAgOWHuuWKqOeUu1wifSlcclxuICAgIGFjdGlvbk91dElkOiBiYi5VSV9BQ1RJT05fT1VUID0gYmIuVUlfQUNUSU9OX09VVC5OT05FO1xyXG5cclxuICAgIHVpQ3RybDogYmIuVUlDdHJsID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICBiYi5VSU1hbmFnZXIubG9hZEFsbFBsdWdpbih0aGlzLm5vZGUsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGJiLlVJTWFuYWdlci5zdGFydEFsbFBsdWdpbih0aGlzLm5vZGUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25FbnRlcigpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvbkVudGVyKCkgOiB2b2lkIHtcclxuICAgICAgICBiYi5VSU1hbmFnZXIuZW50ZXJBbGxQbHVnaW4odGhpcy5ub2RlLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkV4aXQoKSA6IHZvaWQge1xyXG5cclxuICAgIH1cclxufSJdfQ==