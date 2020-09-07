"use strict";
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