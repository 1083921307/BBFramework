
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/model/ObjectManaget.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dbc0d5QN11HtayLEu45yAwI', 'ObjectManaget');
// framework/model/ObjectManaget.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @module ObjectManager
 * @deprecated 数据模型管理器
 * @exports
 */
var ObjectManager = /** @class */ (function () {
    function ObjectManager() {
    }
    ObjectManager.getInstance = function () {
        if (ObjectManager.singleInstance == null) {
            ObjectManager.singleInstance = new ObjectManager();
        }
        return ObjectManager.singleInstance;
    };
    /**
     * @function
     * @param {number} name 数据模型的名字
     * @param {typeof bb.BaseModel} model 数据模型
     */
    ObjectManager.prototype.addModel = function (name, model) {
        if (this[name]) {
            return;
        }
        this[name] = new model();
        this[name].initModel();
        return this[name];
    };
    ObjectManager.prototype.removeModel = function (name) {
        if (!this[name]) {
            return;
        }
        this[name] = null;
        delete this[name];
    };
    ObjectManager.prototype.getModelByName = function (name, model) {
        var ret = this[name];
        if (ret !== null && ret instanceof bb.BaseModel) {
            return ret;
        }
        this[name] = new model();
        this[name].initModel();
        return this[name];
    };
    ObjectManager.singleInstance = null;
    return ObjectManager;
}());
exports.default = ObjectManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxtb2RlbFxcT2JqZWN0TWFuYWdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0dBSUc7QUFDSDtJQUFBO0lBMENBLENBQUM7SUF4Q1UseUJBQVcsR0FBbEI7UUFDSSxJQUFJLGFBQWEsQ0FBQyxjQUFjLElBQUksSUFBSSxFQUFFO1lBQ3RDLGFBQWEsQ0FBQyxjQUFjLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztTQUN0RDtRQUNELE9BQU8sYUFBYSxDQUFDLGNBQWMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGdDQUFRLEdBQVIsVUFBUyxJQUFZLEVBQUUsS0FBMEI7UUFDN0MsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDWixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDdkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxJQUFZO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDYixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxzQ0FBYyxHQUFkLFVBQWUsSUFBWSxFQUFFLEtBQTBCO1FBQ25ELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQixJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksR0FBRyxZQUFZLEVBQUUsQ0FBQyxTQUFTLEVBQUU7WUFDN0MsT0FBTyxHQUFHLENBQUM7U0FDZDtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN2QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBdENNLDRCQUFjLEdBQWtCLElBQUksQ0FBQztJQXlDaEQsb0JBQUM7Q0ExQ0QsQUEwQ0MsSUFBQTtrQkExQ29CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyoqXHJcbiAqIEBtb2R1bGUgT2JqZWN0TWFuYWdlclxyXG4gKiBAZGVwcmVjYXRlZCDmlbDmja7mqKHlnovnrqHnkIblmahcclxuICogQGV4cG9ydHNcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdE1hbmFnZXIge1xyXG4gICAgc3RhdGljIHNpbmdsZUluc3RhbmNlOiBPYmplY3RNYW5hZ2VyID0gbnVsbDtcclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBPYmplY3RNYW5hZ2VyIHtcclxuICAgICAgICBpZiAoT2JqZWN0TWFuYWdlci5zaW5nbGVJbnN0YW5jZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIE9iamVjdE1hbmFnZXIuc2luZ2xlSW5zdGFuY2UgPSBuZXcgT2JqZWN0TWFuYWdlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gT2JqZWN0TWFuYWdlci5zaW5nbGVJbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBmdW5jdGlvblxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5hbWUg5pWw5o2u5qih5Z6L55qE5ZCN5a2XXHJcbiAgICAgKiBAcGFyYW0ge3R5cGVvZiBiYi5CYXNlTW9kZWx9IG1vZGVsIOaVsOaNruaooeWei1xyXG4gICAgICovXHJcbiAgICBhZGRNb2RlbChuYW1lOiBzdHJpbmcsIG1vZGVsOiB0eXBlb2YgYmIuQmFzZU1vZGVsKSB7XHJcbiAgICAgICAgaWYgKHRoaXNbbmFtZV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzW25hbWVdID0gbmV3IG1vZGVsKCk7XHJcbiAgICAgICAgdGhpc1tuYW1lXS5pbml0TW9kZWwoKTtcclxuICAgICAgICByZXR1cm4gdGhpc1tuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVNb2RlbChuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIXRoaXNbbmFtZV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzW25hbWVdID0gbnVsbDtcclxuICAgICAgICBkZWxldGUgdGhpc1tuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRNb2RlbEJ5TmFtZShuYW1lOiBzdHJpbmcsIG1vZGVsOiB0eXBlb2YgYmIuQmFzZU1vZGVsKTogYmIuQmFzZU1vZGVsIHtcclxuICAgICAgICBsZXQgcmV0ID0gdGhpc1tuYW1lXTtcclxuICAgICAgICBpZiAocmV0ICE9PSBudWxsICYmIHJldCBpbnN0YW5jZW9mIGJiLkJhc2VNb2RlbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzW25hbWVdID0gbmV3IG1vZGVsKCk7XHJcbiAgICAgICAgdGhpc1tuYW1lXS5pbml0TW9kZWwoKTtcclxuICAgICAgICByZXR1cm4gdGhpc1tuYW1lXTtcclxuICAgIH1cclxuXHJcblxyXG59Il19