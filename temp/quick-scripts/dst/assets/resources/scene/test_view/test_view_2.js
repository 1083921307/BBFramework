
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/scene/test_view/test_view_2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3ff6dTSubdBVZfl+NrXUwms', 'test_view_2');
// resources/scene/test_view/test_view_2.ts

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
var test_view_2 = /** @class */ (function (_super) {
    __extends(test_view_2, _super);
    function test_view_2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    test_view_2.prototype.onLoad = function () {
    };
    test_view_2.prototype.onEnter = function () {
        //   for(let i = 0; i < 5; i++) {
        //       bb.ViewManager.showItemSync("test_scene/Item_View_1", {}, this.node, this.viewCtrl, () => {});
        //   }
    };
    test_view_2.prototype._onBtnTouchEnd = function (sender) {
        // this.viewCtrl.destroyNode();
        // bb.ViewManager.showSubViewSync("test_scene/VIEW_3", {}, function(viewCtrl) {
        //    // this.viewCtrl.destroyNode();
        // }.bind(this));
    };
    test_view_2 = __decorate([
        ccclass
    ], test_view_2);
    return test_view_2;
}(bb.BaseComponent));
exports.default = test_view_2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxzY2VuZVxcdGVzdF92aWV3XFx0ZXN0X3ZpZXdfMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUF5QywrQkFBZ0I7SUFBekQ7O0lBaUJBLENBQUM7SUFoQkcsNEJBQU0sR0FBTjtJQUVBLENBQUM7SUFFRCw2QkFBTyxHQUFQO1FBQ0UsaUNBQWlDO1FBQ2pDLHVHQUF1RztRQUN2RyxNQUFNO0lBQ1IsQ0FBQztJQUVELG9DQUFjLEdBQWQsVUFBZSxNQUFNO1FBQ2pCLCtCQUErQjtRQUNqQywrRUFBK0U7UUFDL0UscUNBQXFDO1FBQ3JDLGlCQUFpQjtJQUNwQixDQUFDO0lBaEJpQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBaUIvQjtJQUFELGtCQUFDO0NBakJELEFBaUJDLENBakJ3QyxFQUFFLENBQUMsYUFBYSxHQWlCeEQ7a0JBakJvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRlc3Rfdmlld18yIGV4dGVuZHMgYmIuQmFzZUNvbXBvbmVudCB7XHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25FbnRlcigpIHtcclxuICAgICAgLy8gICBmb3IobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgIC8vICAgICAgIGJiLlZpZXdNYW5hZ2VyLnNob3dJdGVtU3luYyhcInRlc3Rfc2NlbmUvSXRlbV9WaWV3XzFcIiwge30sIHRoaXMubm9kZSwgdGhpcy52aWV3Q3RybCwgKCkgPT4ge30pO1xyXG4gICAgICAvLyAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfb25CdG5Ub3VjaEVuZChzZW5kZXIpIHtcclxuICAgICAgICAvLyB0aGlzLnZpZXdDdHJsLmRlc3Ryb3lOb2RlKCk7XHJcbiAgICAgIC8vIGJiLlZpZXdNYW5hZ2VyLnNob3dTdWJWaWV3U3luYyhcInRlc3Rfc2NlbmUvVklFV18zXCIsIHt9LCBmdW5jdGlvbih2aWV3Q3RybCkge1xyXG4gICAgICAvLyAgICAvLyB0aGlzLnZpZXdDdHJsLmRlc3Ryb3lOb2RlKCk7XHJcbiAgICAgIC8vIH0uYmluZCh0aGlzKSk7XHJcbiAgIH1cclxufSJdfQ==