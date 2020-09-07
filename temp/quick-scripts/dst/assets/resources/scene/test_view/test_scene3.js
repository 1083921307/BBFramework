
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/scene/test_view/test_scene3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd83cfHFN6JMxbgbcS03l9jK', 'test_scene3');
// resources/scene/test_view/test_scene3.ts

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
var test_scene3 = /** @class */ (function (_super) {
    __extends(test_scene3, _super);
    function test_scene3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prefab = null;
        return _this;
    }
    test_scene3.prototype.onLoad = function () {
        bb.Localization.init();
        cc.log("test_scene3  onLoad");
        bb.ViewManager.showView(this.prefab.name, this.prefab, { "aaa": 11, ddd: "333" });
    };
    test_scene3.prototype.start = function () {
        cc.log("test_scene3  onEnter");
        bb.log("hello world !!! ");
        var fun = function () {
            bb.log2("hello world !!! ");
        };
        bb.info("hello world !!! ");
        bb.warn("hello world !!! ");
        fun();
        bb.log(bb._T(1001));
        // 
    };
    test_scene3.prototype.onExit = function () {
        cc.log("test_scene3  onExit");
    };
    test_scene3.prototype.onDestroy = function () {
        cc.log("test_scene3  onDestroy");
    };
    test_scene3.prototype.onEnable = function () {
        cc.log("test_scene3  onEnable");
    };
    test_scene3.prototype.onDisable = function () {
        cc.log("test_scene3  onDisable");
    };
    __decorate([
        property(cc.Prefab)
    ], test_scene3.prototype, "prefab", void 0);
    test_scene3 = __decorate([
        ccclass
    ], test_scene3);
    return test_scene3;
}(bb.SceneComponent));
exports.default = test_scene3;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxzY2VuZVxcdGVzdF92aWV3XFx0ZXN0X3NjZW5lMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUF5QywrQkFBaUI7SUFBMUQ7UUFBQSxxRUF3Q0M7UUF0Q0csWUFBTSxHQUFjLElBQUksQ0FBQzs7SUFzQzdCLENBQUM7SUFyQ0csNEJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzlCLEVBQUUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFHRCwyQkFBSyxHQUFMO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRy9CLEVBQUUsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUMzQixJQUFJLEdBQUcsR0FBRztZQUNOLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUE7UUFDRCxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDNUIsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzVCLEdBQUcsRUFBRSxDQUFDO1FBQ04sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDcEIsR0FBRztJQUNQLENBQUM7SUFFRCw0QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCwrQkFBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCw4QkFBUSxHQUFSO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCwrQkFBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFyQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FDSztJQUZSLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0F3Qy9CO0lBQUQsa0JBQUM7Q0F4Q0QsQUF3Q0MsQ0F4Q3dDLEVBQUUsQ0FBQyxjQUFjLEdBd0N6RDtrQkF4Q29CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdGVzdF9zY2VuZTMgZXh0ZW5kcyBiYi5TY2VuZUNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBiYi5Mb2NhbGl6YXRpb24uaW5pdCgpO1xyXG4gICAgICAgIGNjLmxvZyhcInRlc3Rfc2NlbmUzICBvbkxvYWRcIik7XHJcbiAgICAgICAgYmIuVmlld01hbmFnZXIuc2hvd1ZpZXcodGhpcy5wcmVmYWIubmFtZSwgdGhpcy5wcmVmYWIsIHtcImFhYVwiOiAxMSwgZGRkOlwiMzMzXCJ9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY2MubG9nKFwidGVzdF9zY2VuZTMgIG9uRW50ZXJcIik7XHJcblxyXG4gICAgICBcclxuICAgICAgICBiYi5sb2coXCJoZWxsbyB3b3JsZCAhISEgXCIpO1xyXG4gICAgICAgIHZhciBmdW4gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgYmIubG9nMihcImhlbGxvIHdvcmxkICEhISBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJiLmluZm8oXCJoZWxsbyB3b3JsZCAhISEgXCIpO1xyXG4gICAgICAgIGJiLndhcm4oXCJoZWxsbyB3b3JsZCAhISEgXCIpO1xyXG4gICAgICAgIGZ1bigpO1xyXG4gICAgICAgIGJiLmxvZyhiYi5fVCgxMDAxKSk7XHJcbiAgICAgICAgLy8gXHJcbiAgICB9XHJcblxyXG4gICAgb25FeGl0KCkge1xyXG4gICAgICAgIGNjLmxvZyhcInRlc3Rfc2NlbmUzICBvbkV4aXRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGNjLmxvZyhcInRlc3Rfc2NlbmUzICBvbkRlc3Ryb3lcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgY2MubG9nKFwidGVzdF9zY2VuZTMgIG9uRW5hYmxlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICBjYy5sb2coXCJ0ZXN0X3NjZW5lMyAgb25EaXNhYmxlXCIpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==