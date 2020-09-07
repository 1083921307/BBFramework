
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/scene/test_uiloader/Item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxzY2VuZVxcdGVzdF91aWxvYWRlclxcSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUFrQyx3QkFBZ0I7SUFBbEQ7UUFBQSxxRUE4QkM7UUEzQkcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDO1FBR3ZCLFdBQUssR0FBYyxJQUFJLENBQUM7O0lBcUI1QixDQUFDO0lBbkJHLHFCQUFNLEdBQU47SUFFQSxDQUFDO0lBRUQsc0JBQU8sR0FBUDtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDM0MsQ0FBQztJQUVELHVCQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsb0JBQUssR0FBTDtRQUFBLGlCQU9DO1FBTkcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNyQyx5Q0FBeUM7UUFDekMsRUFBRSxDQUFDLEdBQUcsQ0FBQywrQ0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBSSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQ3RDLEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBMUJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7dUNBQ0k7SUFHdkI7UUFEQyxRQUFRLEVBQUU7c0NBQ1k7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt1Q0FDSTtJQVRQLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0E4QnhCO0lBQUQsV0FBQztDQTlCRCxBQThCQyxDQTlCaUMsRUFBRSxDQUFDLGFBQWEsR0E4QmpEO2tCQTlCb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW0gZXh0ZW5kcyBiYi5CYXNlQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25FbnRlcigpIHtcclxuICAgICAgICBjYy5sb2coXCJvbkVudGVyXCIgKyAgdGhpcy52aWV3Q3RybC5kYXRhKVxyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBjYy5sb2coXCJzdGFydFwiICsgIHRoaXMudmlld0N0cmwuZGF0YSlcclxuICAgICAgICAvLyBvbkxvYWQgLT4gb25FbmFibGUgLT4gb25FbnRlciAtPiBzdGFydFxyXG4gICAgICAgIGNjLmxvZyhg5b2T5YmN57yT5a2Y6LWE5rqQ77yaJHsgYmIuVUlMb2FkZXIuZ2V0Q2FjaGVDb3VudCgpfWApO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy52aWV3Q3RybC5kZXN0cm95Tm9kZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19