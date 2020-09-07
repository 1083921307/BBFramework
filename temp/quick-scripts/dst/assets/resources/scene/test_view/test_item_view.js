
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/scene/test_view/test_item_view.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '44f19MV3JFDjYqxsw2RRrDx', 'test_item_view');
// resources/scene/test_view/test_item_view.ts

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
var test_item_view = /** @class */ (function (_super) {
    __extends(test_item_view, _super);
    function test_item_view() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    test_item_view.prototype.onLoad = function () {
        cc.log("test_item_view  onLoad");
    };
    test_item_view.prototype.onEnter = function () {
        cc.log("test_item_view  onEnter");
    };
    test_item_view.prototype.onExit = function () {
        cc.log("test_item_view  onExit");
    };
    test_item_view.prototype.onDestroy = function () {
        cc.log("test_item_view  onDestroy");
    };
    test_item_view.prototype.onEnable = function () {
        cc.log("test_item_view  onEnable");
    };
    test_item_view.prototype.onDisable = function () {
        cc.log("test_item_view  onDisable");
    };
    test_item_view = __decorate([
        ccclass
    ], test_item_view);
    return test_item_view;
}(bb.SceneComponent));
exports.default = test_item_view;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxzY2VuZVxcdGVzdF92aWV3XFx0ZXN0X2l0ZW1fdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUE0QyxrQ0FBaUI7SUFBN0Q7O0lBMEJBLENBQUM7SUF6QkcsK0JBQU0sR0FBTjtRQUVJLEVBQUUsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBR0QsZ0NBQU8sR0FBUDtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsa0NBQVMsR0FBVDtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsa0NBQVMsR0FBVDtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBekJnQixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBMEJsQztJQUFELHFCQUFDO0NBMUJELEFBMEJDLENBMUIyQyxFQUFFLENBQUMsY0FBYyxHQTBCNUQ7a0JBMUJvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRlc3RfaXRlbV92aWV3IGV4dGVuZHMgYmIuU2NlbmVDb21wb25lbnQge1xyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBcclxuICAgICAgICBjYy5sb2coXCJ0ZXN0X2l0ZW1fdmlldyAgb25Mb2FkXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvbkVudGVyKCkge1xyXG4gICAgICAgIGNjLmxvZyhcInRlc3RfaXRlbV92aWV3ICBvbkVudGVyXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRXhpdCgpIHtcclxuICAgICAgICBjYy5sb2coXCJ0ZXN0X2l0ZW1fdmlldyAgb25FeGl0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBjYy5sb2coXCJ0ZXN0X2l0ZW1fdmlldyAgb25EZXN0cm95XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIGNjLmxvZyhcInRlc3RfaXRlbV92aWV3ICBvbkVuYWJsZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgY2MubG9nKFwidGVzdF9pdGVtX3ZpZXcgIG9uRGlzYWJsZVwiKTtcclxuICAgIH1cclxufSJdfQ==