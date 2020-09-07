
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/Localization.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxMb2NhbGl6YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxZQUFZO0FBQ1o7SUFXSTtRQUZBLGFBQVEsR0FBVyxJQUFJLENBQUM7UUFHckIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuQyxJQUFJLFNBQVMsRUFBRTtZQUNWLE9BQU87U0FDWDtRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLHNHQUFzRztRQUN0RyxzQkFBc0I7UUFDdEIsVUFBVTtRQUNWLHdHQUF3RztRQUN4RyxvQkFBb0I7UUFDcEIsU0FBUztRQUNOLFVBQVU7SUFDYixDQUFDO0lBdkJNLHdCQUFXLEdBQWxCO1FBQ0ksSUFBSSxZQUFZLENBQUMsY0FBYyxJQUFJLElBQUksRUFBRTtZQUNyQyxZQUFZLENBQUMsY0FBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7U0FDcEQ7UUFDRCxPQUFPLFlBQVksQ0FBQyxjQUFjLENBQUM7SUFDdkMsQ0FBQztJQW9CRCwyQkFBSSxHQUFKO1FBQUEsaUJBSUM7UUFIRyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQywrQkFBNkIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFVLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLElBQUk7WUFDbkYsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDBCQUFHLEdBQUgsVUFBSSxHQUFXO1FBQ1gsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFsQ00sMkJBQWMsR0FBaUIsSUFBSSxDQUFDO0lBbUMvQyxtQkFBQztDQXBDRCxBQW9DQyxJQUFBO2tCQXBDb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiDmnKzlnLDljJbmqKHlnZcgKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYWxpemF0aW9uIHtcclxuICAgIHN0YXRpYyBzaW5nbGVJbnN0YW5jZTogTG9jYWxpemF0aW9uID0gbnVsbDtcclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBMb2NhbGl6YXRpb24ge1xyXG4gICAgICAgIGlmIChMb2NhbGl6YXRpb24uc2luZ2xlSW5zdGFuY2UgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBMb2NhbGl6YXRpb24uc2luZ2xlSW5zdGFuY2UgPSBuZXcgTG9jYWxpemF0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBMb2NhbGl6YXRpb24uc2luZ2xlSW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAganNvbkRhdGE6IE9iamVjdCA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICBjYy5sb2coXCLmnKzlnLDljJY6IFwiICsgIGNjLnN5cy5sYW5ndWFnZSk7XHJcbiAgICAgICBpZiAoQ0NfRURJVE9SKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgIH1cclxuXHJcbiAgICAgICB0aGlzLmpzb25EYXRhID0ge307ICAgICBcclxuICAgIC8vICAgIGNjLmxvYWRlci5sb2FkUmVzKGBsb2NhbGl6YXRpb24vbG9jYWxpemF0aW9uXyR7Y2Muc3lzLmxhbmd1YWdlfWAsIGNjLkpzb25Bc3NldCwgKGVyciwganNvbikgPT4ge1xyXG4gICAgLy8gICAgICAgICBjYy5sb2coZXJyKVxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gICAgYmIuVUlMb2FkZXIubG9hZFJlcyhgbG9jYWxpemF0aW9uL2xvY2FsaXphdGlvbl8ke2NjLnN5cy5sYW5ndWFnZX0uanNvbmAsIGNjLkpzb25Bc3NldCwgKGpzb24pID0+IHtcclxuICAgIC8vICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAvLyAgICB9KTtcclxuICAgICAgIC8vIOWKoOi9veacrOWcsOWMlui1hOa6kFxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgYmIuVUlMb2FkZXIubG9hZFJlcyhgbG9jYWxpemF0aW9uL2xvY2FsaXphdGlvbl8ke2NjLnN5cy5sYW5ndWFnZX1gLCBjYy5Kc29uQXNzZXQsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuanNvbkRhdGEgPSBkYXRhLmpzb247XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KGtleTogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuanNvbkRhdGFba2V5XTtcclxuICAgIH1cclxufSJdfQ==