
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/scene/test_uiloader/test_scene1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5109aw9xsZOvJK270goRGzt', 'test_scene1');
// resources/scene/test_uiloader/test_scene1.ts

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
var test_scene1 = /** @class */ (function (_super) {
    __extends(test_scene1, _super);
    function test_scene1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prefab = null;
        return _this;
    }
    test_scene1.prototype.onLoad = function () {
        bb.ViewManager.showView(this.prefab.name, this.prefab, { "aaa": 11, ddd: "333" });
    };
    __decorate([
        property(cc.Prefab)
    ], test_scene1.prototype, "prefab", void 0);
    test_scene1 = __decorate([
        ccclass
    ], test_scene1);
    return test_scene1;
}(bb.BaseComponent));
exports.default = test_scene1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxzY2VuZVxcdGVzdF91aWxvYWRlclxcdGVzdF9zY2VuZTEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUM7SUFBeUMsK0JBQWdCO0lBQXpEO1FBQUEscUVBTUM7UUFKRyxZQUFNLEdBQWMsSUFBSSxDQUFDOztJQUk3QixDQUFDO0lBSEcsNEJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFIRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUNLO0lBRlIsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQU0vQjtJQUFELGtCQUFDO0NBTkQsQUFNQyxDQU53QyxFQUFFLENBQUMsYUFBYSxHQU14RDtrQkFOb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRlc3Rfc2NlbmUxIGV4dGVuZHMgYmIuQmFzZUNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBiYi5WaWV3TWFuYWdlci5zaG93Vmlldyh0aGlzLnByZWZhYi5uYW1lLCB0aGlzLnByZWZhYiwge1wiYWFhXCI6IDExLCBkZGQ6XCIzMzNcIn0pO1xyXG4gICAgfVxyXG59Il19