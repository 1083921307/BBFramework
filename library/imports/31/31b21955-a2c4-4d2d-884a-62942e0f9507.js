"use strict";
cc._RF.push(module, '31b21lVosRNLYhKYpQuD5UH', 'Localization');
// framework/Localization.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** 本地化模块 */
var Localization = /** @class */ (function () {
    function Localization() {
        this.jsonData = null;
        cc.log("本地化: " + cc.sys.language);
        if (CC_EDITOR) {
            return;
        }
        this.jsonData = {};
        //    cc.loader.loadRes(`localization/localization_${cc.sys.language}`, cc.JsonAsset, (err, json) => {
        //         cc.log(err)
        //     });
        //    bb.UILoader.loadRes(`localization/localization_${cc.sys.language}.json`, cc.JsonAsset, (json) => {
        //         debugger;
        //    });
        // 加载本地化资源
    }
    Localization.getInstance = function () {
        if (Localization.singleInstance == null) {
            Localization.singleInstance = new Localization();
        }
        return Localization.singleInstance;
    };
    Localization.prototype.init = function () {
        var _this = this;
        bb.UILoader.loadRes("localization/localization_" + cc.sys.language, cc.JsonAsset, function (data) {
            _this.jsonData = data.json;
        });
    };
    Localization.prototype.get = function (key) {
        return this.jsonData[key];
    };
    Localization.singleInstance = null;
    return Localization;
}());
exports.default = Localization;

cc._RF.pop();