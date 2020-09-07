"use strict";
cc._RF.push(module, '5fcd9UdqDFP9q7NvpQDD0My', 'Item');
// resources/scene/test_uiloader/Item.ts

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
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.pefab = null;
        return _this;
    }
    Item.prototype.onLoad = function () {
    };
    Item.prototype.onEnter = function () {
        cc.log("onEnter" + this.viewCtrl.data);
    };
    Item.prototype.onEnable = function () {
    };
    Item.prototype.start = function () {
        var _this = this;
        cc.log("start" + this.viewCtrl.data);
        // onLoad -> onEnable -> onEnter -> start
        cc.log("\u5F53\u524D\u7F13\u5B58\u8D44\u6E90\uFF1A" + bb.UILoader.getCacheCount());
        this.node.on(cc.Node.EventType.TOUCH_END, function () {
            _this.viewCtrl.destroyNode();
        });
    };
    __decorate([
        property(cc.Label)
    ], Item.prototype, "label", void 0);
    __decorate([
        property()
    ], Item.prototype, "text", void 0);
    __decorate([
        property(cc.Prefab)
    ], Item.prototype, "pefab", void 0);
    Item = __decorate([
        ccclass
    ], Item);
    return Item;
}(bb.BaseComponent));
exports.default = Item;

cc._RF.pop();