
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/model/BaseModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxtb2RlbFxcQmFzZU1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQXVCQSxDQUFDO0lBdEJHLDZCQUFTLEdBQVQ7UUFDSSxhQUFhO0lBQ2pCLENBQUM7SUFFRCw0QkFBUSxHQUFSLFVBQVMsR0FBVyxFQUFFLElBQVM7UUFDM0IsSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDL0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUMxQztJQUNMLENBQUM7SUFFRCwyQkFBTyxHQUFQLFVBQVEsR0FBVztRQUNmLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtZQUNkLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzNDO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUVELDhCQUFVLEdBQVYsVUFBVyxHQUFXO1FBQ2xCLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtZQUNkLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN2QztJQUNMLENBQUM7SUFDTCxnQkFBQztBQUFELENBdkJBLEFBdUJDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlTW9kZWwge1xyXG4gICAgaW5pdE1vZGVsKCkge1xyXG4gICAgICAgIC8vIFRPRE8g55Sx5a2Q57G75a6e546wXHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZUl0ZW0oa2V5OiBzdHJpbmcsIGl0ZW06IGFueSkge1xyXG4gICAgICAgIGlmIChrZXkgIT09IG51bGwgJiYgaXRlbSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbShrZXk6IHN0cmluZykge1xyXG4gICAgICAgIGlmIChrZXkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoa2V5ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==