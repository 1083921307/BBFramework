
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/scene/test_view/test_scene4.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxzY2VuZVxcdGVzdF92aWV3XFx0ZXN0X3NjZW5lNC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUF5QywrQkFBaUI7SUFBMUQ7O0lBcUJBLENBQUM7SUFwQkcsNEJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsNkJBQU8sR0FBUDtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUMvQixFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELDRCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELDhCQUFRLEdBQVI7UUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELCtCQUFTLEdBQVQ7UUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDckMsQ0FBQztJQXBCZ0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQXFCL0I7SUFBRCxrQkFBQztDQXJCRCxBQXFCQyxDQXJCd0MsRUFBRSxDQUFDLGNBQWMsR0FxQnpEO2tCQXJCb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB0ZXN0X3NjZW5lNCBleHRlbmRzIGJiLlNjZW5lQ29tcG9uZW50IHtcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgY2MubG9nKFwidGVzdF9zY2VuZTQgIG9uTG9hZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVudGVyKCkge1xyXG4gICAgICAgIGNjLmxvZyhcInRlc3Rfc2NlbmU0ICBvbkVudGVyXCIpO1xyXG4gICAgICAgIGNjLmxvZyh0aGlzLnNjZW5lQ3RybC5kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkV4aXQoKSB7XHJcbiAgICAgICAgY2MubG9nKFwidGVzdF9zY2VuZTQgIG9uRXhpdFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICBjYy5sb2coXCJ0ZXN0X3NjZW5lNCAgb25FbmFibGVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIGNjLmxvZyhcInRlc3Rfc2NlbmU0ICBvbkRpc2FibGVcIik7XHJcbiAgICB9XHJcbn0iXX0=