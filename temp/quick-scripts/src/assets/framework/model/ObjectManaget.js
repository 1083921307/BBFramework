"use strict";
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