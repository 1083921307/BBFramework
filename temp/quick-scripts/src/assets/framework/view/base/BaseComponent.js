"use strict";
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