
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/scene/test_view/test_view_1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e9010pMtStKGYeZZN6n/3D6', 'test_view_1');
// resources/scene/test_view/test_view_1.ts

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
var test_view_1 = /** @class */ (function (_super) {
    __extends(test_view_1, _super);
    function test_view_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    test_view_1.prototype.onLoad = function () {
    };
    test_view_1.prototype.onEnter = function () {
        // for(let i = 0; i < 5; i++) {
        //     bb.ViewManager.showItemSync("test_scene/Item_View_1", {}, this.node, this.viewCtrl, () => {});
        // }
    };
    test_view_1.prototype._onBtnTouchEnd = function (sender) {
        bb.ViewManager.showSubViewSync("scene/test_view/VIEW_2", {}, function (viewCtrl) {
            // this.viewCtrl.destroyNode();
        }.bind(this));
        bb.ViewManager.showSubViewSync("scene/test_view/VIEW_3", {}, function (viewCtrl) {
            // this.viewCtrl.destroyNode();
        }.bind(this));
    };
    test_view_1 = __decorate([
        ccclass
    ], test_view_1);
    return test_view_1;
}(bb.BaseComponent));
exports.default = test_view_1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxzY2VuZVxcdGVzdF92aWV3XFx0ZXN0X3ZpZXdfMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUF5QywrQkFBZ0I7SUFBekQ7O0lBdUJBLENBQUM7SUF0QkcsNEJBQU0sR0FBTjtJQUVBLENBQUM7SUFHRCw2QkFBTyxHQUFQO1FBQ0ksK0JBQStCO1FBQy9CLHFHQUFxRztRQUNyRyxJQUFJO0lBRVIsQ0FBQztJQUVELG9DQUFjLEdBQWQsVUFBZSxNQUFNO1FBRWxCLEVBQUUsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLHdCQUF3QixFQUFFLEVBQUUsRUFBRSxVQUFTLFFBQVE7WUFDMUUsK0JBQStCO1FBQ25DLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUVkLEVBQUUsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLHdCQUF3QixFQUFFLEVBQUUsRUFBRSxVQUFTLFFBQVE7WUFDN0UsK0JBQStCO1FBQy9CLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBdEJnQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBdUIvQjtJQUFELGtCQUFDO0NBdkJELEFBdUJDLENBdkJ3QyxFQUFFLENBQUMsYUFBYSxHQXVCeEQ7a0JBdkJvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRlc3Rfdmlld18xIGV4dGVuZHMgYmIuQmFzZUNvbXBvbmVudCB7XHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uRW50ZXIoKSB7XHJcbiAgICAgICAgLy8gZm9yKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgICAgIC8vICAgICBiYi5WaWV3TWFuYWdlci5zaG93SXRlbVN5bmMoXCJ0ZXN0X3NjZW5lL0l0ZW1fVmlld18xXCIsIHt9LCB0aGlzLm5vZGUsIHRoaXMudmlld0N0cmwsICgpID0+IHt9KTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgX29uQnRuVG91Y2hFbmQoc2VuZGVyKSB7XHJcbiAgICAgICBcclxuICAgICAgIGJiLlZpZXdNYW5hZ2VyLnNob3dTdWJWaWV3U3luYyhcInNjZW5lL3Rlc3Rfdmlldy9WSUVXXzJcIiwge30sIGZ1bmN0aW9uKHZpZXdDdHJsKSB7XHJcbiAgICAgICAgICAgLy8gdGhpcy52aWV3Q3RybC5kZXN0cm95Tm9kZSgpO1xyXG4gICAgICAgfS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICBiYi5WaWV3TWFuYWdlci5zaG93U3ViVmlld1N5bmMoXCJzY2VuZS90ZXN0X3ZpZXcvVklFV18zXCIsIHt9LCBmdW5jdGlvbih2aWV3Q3RybCkge1xyXG4gICAgICAgIC8vIHRoaXMudmlld0N0cmwuZGVzdHJveU5vZGUoKTtcclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG59Il19