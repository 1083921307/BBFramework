
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/scene/test_view/test_view_3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '88199ZYA9lKAa38v+XasKnC', 'test_view_3');
// resources/scene/test_view/test_view_3.ts

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
var test_view_3 = /** @class */ (function (_super) {
    __extends(test_view_3, _super);
    function test_view_3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    test_view_3.prototype.onLoad = function () {
        //    this.scheduleOnce(() => {
        //        bb.SceneManager.loadScene("test_scene4", {a: "100", b: "2000"});
        //        //  bb.ViewManager.popView(3);
        //    }, 5);
    };
    test_view_3.prototype._onBtnTouchEnd = function (sender) {
        // this.viewCtrl
        //   bb.ViewManager.showViewSync("test_scene/VIEW_3", {}, function(viewCtrl) {
        //        this.viewCtrl.destroyNode();
        //   }.bind(this));
        // bb.ViewManager.popView(2);
        this.viewCtrl.destroyNode();
        // this.viewCtrl.popView(2);
    };
    test_view_3 = __decorate([
        ccclass
    ], test_view_3);
    return test_view_3;
}(bb.BaseComponent));
exports.default = test_view_3;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxzY2VuZVxcdGVzdF92aWV3XFx0ZXN0X3ZpZXdfMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUF5QywrQkFBZ0I7SUFBekQ7O0lBaUJBLENBQUM7SUFoQkcsNEJBQU0sR0FBTjtRQUNBLCtCQUErQjtRQUMvQiwwRUFBMEU7UUFDMUUsd0NBQXdDO1FBQ3hDLFlBQVk7SUFDWixDQUFDO0lBRUQsb0NBQWMsR0FBZCxVQUFlLE1BQU07UUFDbEIsZ0JBQWdCO1FBQ25CLDhFQUE4RTtRQUM5RSxzQ0FBc0M7UUFDdEMsbUJBQW1CO1FBQ2YsNkJBQTZCO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0IsNEJBQTRCO0lBQ2hDLENBQUM7SUFoQmlCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FpQi9CO0lBQUQsa0JBQUM7Q0FqQkQsQUFpQkMsQ0FqQndDLEVBQUUsQ0FBQyxhQUFhLEdBaUJ4RDtrQkFqQm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdGVzdF92aWV3XzMgZXh0ZW5kcyBiYi5CYXNlQ29tcG9uZW50IHtcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAvLyAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgYmIuU2NlbmVNYW5hZ2VyLmxvYWRTY2VuZShcInRlc3Rfc2NlbmU0XCIsIHthOiBcIjEwMFwiLCBiOiBcIjIwMDBcIn0pO1xyXG4gICAgLy8gICAgICAgIC8vICBiYi5WaWV3TWFuYWdlci5wb3BWaWV3KDMpO1xyXG4gICAgLy8gICAgfSwgNSk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uQnRuVG91Y2hFbmQoc2VuZGVyKSB7XHJcbiAgICAgICAvLyB0aGlzLnZpZXdDdHJsXHJcbiAgICAvLyAgIGJiLlZpZXdNYW5hZ2VyLnNob3dWaWV3U3luYyhcInRlc3Rfc2NlbmUvVklFV18zXCIsIHt9LCBmdW5jdGlvbih2aWV3Q3RybCkge1xyXG4gICAgLy8gICAgICAgIHRoaXMudmlld0N0cmwuZGVzdHJveU5vZGUoKTtcclxuICAgIC8vICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICAvLyBiYi5WaWV3TWFuYWdlci5wb3BWaWV3KDIpO1xyXG4gICAgICAgIHRoaXMudmlld0N0cmwuZGVzdHJveU5vZGUoKTtcclxuICAgICAgIC8vIHRoaXMudmlld0N0cmwucG9wVmlldygyKTtcclxuICAgfVxyXG59Il19