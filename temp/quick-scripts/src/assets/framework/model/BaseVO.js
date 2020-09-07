"use strict";
cc._RF.push(module, '52531OOp2BK+51Byu8LDLDC', 'BaseVO');
// framework/model/BaseVO.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseVO = /** @class */ (function () {
    function BaseVO() {
    }
    BaseVO.prototype.parseData = function (data) {
        if (!data) {
            return;
        }
        for (var key in data) {
            if (this[key] === undefined) {
                continue;
            }
            this[key] = data[key];
        }
    };
    BaseVO.prototype.getFormatStr = function () {
        return JSON.stringify(this);
    };
    return BaseVO;
}());
exports.default = BaseVO;

cc._RF.pop();