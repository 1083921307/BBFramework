
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/view/pligin/UIPlugin.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '64b721ZPZRGoKJqJrdLSGCR', 'UIPlugin');
// framework/view/pligin/UIPlugin.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
* @author 虣虣
*/
var UIPlugin = /** @class */ (function () {
    function UIPlugin() {
        this.name = ""; // 插件的名字
    }
    UIPlugin.prototype.register = function () {
        // TODO 插件注册事件 -> 由子类实现
    };
    UIPlugin.prototype.load = function (node, component) {
        // TODO 插件开始执行 -> 由子类实现
    };
    UIPlugin.prototype.start = function (node, component) {
    };
    UIPlugin.prototype.enter = function (node, component) {
    };
    UIPlugin.prototype.destroy = function (node, component) {
        // TODO 界面销毁时调用 -> 由子类实现
    };
    return UIPlugin;
}());
exports.default = UIPlugin;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx2aWV3XFxwbGlnaW5cXFVJUGx1Z2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0VBRUU7QUFDRjtJQUFBO1FBQ0ksU0FBSSxHQUFXLEVBQUUsQ0FBQyxDQUFDLFFBQVE7SUFzQi9CLENBQUM7SUFwQkcsMkJBQVEsR0FBUjtRQUNJLHVCQUF1QjtJQUMzQixDQUFDO0lBRUQsdUJBQUksR0FBSixVQUFLLElBQWEsRUFBRSxTQUF3QjtRQUN4Qyx1QkFBdUI7SUFDM0IsQ0FBQztJQUVELHdCQUFLLEdBQUwsVUFBTSxJQUFhLEVBQUUsU0FBdUI7SUFFNUMsQ0FBQztJQUVELHdCQUFLLEdBQUwsVUFBTSxJQUFhLEVBQUUsU0FBdUI7SUFFNUMsQ0FBQztJQUVELDBCQUFPLEdBQVAsVUFBUSxJQUFhLEVBQUUsU0FBdUI7UUFDMUMsd0JBQXdCO0lBQzVCLENBQUM7SUFFTCxlQUFDO0FBQUQsQ0F2QkEsQUF1QkMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4qIEBhdXRob3Ig6Jmj6JmjXHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJUGx1Z2luIHtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwiXCI7IC8vIOaPkuS7tueahOWQjeWtl1xyXG5cclxuICAgIHJlZ2lzdGVyKCkge1xyXG4gICAgICAgIC8vIFRPRE8g5o+S5Lu25rOo5YaM5LqL5Lu2IC0+IOeUseWtkOexu+WunueOsFxyXG4gICAgfVxyXG5cclxuICAgIGxvYWQobm9kZTogY2MuTm9kZSwgY29tcG9uZW50OiAgY2MuQ29tcG9uZW50KSB7XHJcbiAgICAgICAgLy8gVE9ETyDmj5Lku7blvIDlp4vmiafooYwgLT4g55Sx5a2Q57G75a6e546wXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQobm9kZTogY2MuTm9kZSwgY29tcG9uZW50OiBjYy5Db21wb25lbnQpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXIobm9kZTogY2MuTm9kZSwgY29tcG9uZW50OiBjYy5Db21wb25lbnQpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveShub2RlOiBjYy5Ob2RlLCBjb21wb25lbnQ6IGNjLkNvbXBvbmVudCkge1xyXG4gICAgICAgIC8vIFRPRE8g55WM6Z2i6ZSA5q+B5pe26LCD55SoIC0+IOeUseWtkOexu+WunueOsFxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=