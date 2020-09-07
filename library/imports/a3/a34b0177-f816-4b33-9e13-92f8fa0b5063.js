"use strict";
cc._RF.push(module, 'a34b0F3+BZLM54Tkvj6C1Bj', 'BaseModel');
// framework/model/BaseModel.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseModel = /** @class */ (function () {
    function BaseModel() {
    }
    BaseModel.prototype.initModel = function () {
        // TODO 由子类实现
    };
    BaseModel.prototype.saveItem = function (key, item) {
        if (key !== null && item !== null) {
            cc.sys.localStorage.setItem(key, item);
        }
    };
    BaseModel.prototype.getItem = function (key) {
        if (key !== null) {
            return cc.sys.localStorage.getItem(key);
        }
        return undefined;
    };
    BaseModel.prototype.removeItem = function (key) {
        if (key !== null) {
            cc.sys.localStorage.removeItem(key);
        }
    };
    return BaseModel;
}());
exports.default = BaseModel;

cc._RF.pop();