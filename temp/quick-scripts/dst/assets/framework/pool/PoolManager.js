
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/pool/PoolManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0af55nLPbhJ2LozX5Ss3/Jw', 'PoolManager');
// framework/pool/PoolManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserPool_1 = require("./UserPool");
// 缓存管理池
var PoolManager = /** @class */ (function () {
    function PoolManager() {
        this._pool_map = {};
    }
    PoolManager.getInstance = function () {
        if (PoolManager._instance == null) {
            PoolManager._instance = new PoolManager();
        }
        return PoolManager._instance;
    };
    PoolManager.prototype.addPool = function (name, pool) {
        if (this._pool_map[name]) {
            return;
        }
        this._pool_map[name] = pool;
    };
    PoolManager.prototype.getPool = function (name) {
        return this._pool_map[name];
    };
    PoolManager.prototype.getPoolByName = function (name, prefab) {
        if (!this._pool_map[name]) {
            this._pool_map[name] = new UserPool_1.default(prefab, 3);
        }
        return this._pool_map[name];
    };
    PoolManager.prototype.getPoolNode = function (name) {
        if (!this._pool_map[name]) {
            return null;
        }
        return this._pool_map[name].get();
    };
    PoolManager.prototype.putPoolNode = function (name, target) {
        if (!this._pool_map[name]) {
            return;
        }
        this._pool_map[name].put(target);
    };
    PoolManager.prototype.removePool = function (name) {
        if (!this._pool_map[name]) {
            return;
        }
        this._pool_map[name] = null;
        delete this._pool_map[name];
    };
    PoolManager._instance = null;
    return PoolManager;
}());
exports.default = PoolManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxwb29sXFxQb29sTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFrQztBQUVsQyxRQUFRO0FBSVI7SUFBQTtRQUNJLGNBQVMsR0FBOEIsRUFBRSxDQUFDO0lBaUQ5QyxDQUFDO0lBOUNVLHVCQUFXLEdBQWxCO1FBQ0ksSUFBSSxXQUFXLENBQUMsU0FBUyxJQUFJLElBQUksRUFBRTtZQUMvQixXQUFXLENBQUMsU0FBUyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7U0FDN0M7UUFDRCxPQUFPLFdBQVcsQ0FBQyxTQUFTLENBQUM7SUFDakMsQ0FBQztJQUVELDZCQUFPLEdBQVAsVUFBUSxJQUFZLEVBQUUsSUFBYztRQUNoQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdEIsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQUVELDZCQUFPLEdBQVAsVUFBUSxJQUFZO1FBQ2hCLE9BQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsbUNBQWEsR0FBYixVQUFjLElBQVksRUFBRSxNQUFpQjtRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksa0JBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDbEQ7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELGlDQUFXLEdBQVgsVUFBWSxJQUFZO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3ZCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxPQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVELGlDQUFXLEdBQVgsVUFBWSxJQUFZLEVBQUUsTUFBZTtRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN2QixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsZ0NBQVUsR0FBVixVQUFXLElBQVk7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdkIsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDNUIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUE5Q00scUJBQVMsR0FBZ0IsSUFBSSxDQUFDO0lBK0N6QyxrQkFBQztDQWxERCxBQWtEQyxJQUFBO2tCQWxEb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyUG9vbCBmcm9tIFwiLi9Vc2VyUG9vbFwiO1xyXG5cclxuLy8g57yT5a2Y566h55CG5rGgXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvb2xNYW5hZ2VyICB7XHJcbiAgICBfcG9vbF9tYXA6IHtba2V5OiBzdHJpbmddOiBVc2VyUG9vbH0gPSB7fTtcclxuXHJcbiAgICBzdGF0aWMgX2luc3RhbmNlOiBQb29sTWFuYWdlciA9IG51bGw7XHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogUG9vbE1hbmFnZXIge1xyXG4gICAgICAgIGlmIChQb29sTWFuYWdlci5faW5zdGFuY2UgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBQb29sTWFuYWdlci5faW5zdGFuY2UgPSBuZXcgUG9vbE1hbmFnZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFBvb2xNYW5hZ2VyLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRQb29sKG5hbWU6IHN0cmluZywgcG9vbDogVXNlclBvb2wpIHtcclxuICAgICAgICBpZiAodGhpcy5fcG9vbF9tYXBbbmFtZV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9wb29sX21hcFtuYW1lXSA9IHBvb2w7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UG9vbChuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gIHRoaXMuX3Bvb2xfbWFwW25hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBvb2xCeU5hbWUobmFtZTogc3RyaW5nLCBwcmVmYWI6IGNjLlByZWZhYikge1xyXG4gICAgICAgIGlmICghdGhpcy5fcG9vbF9tYXBbbmFtZV0pIHtcclxuICAgICAgICAgICAgdGhpcy5fcG9vbF9tYXBbbmFtZV0gPSBuZXcgVXNlclBvb2wocHJlZmFiLCAzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bvb2xfbWFwW25hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBvb2xOb2RlKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICghdGhpcy5fcG9vbF9tYXBbbmFtZV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAgdGhpcy5fcG9vbF9tYXBbbmFtZV0uZ2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHV0UG9vbE5vZGUobmFtZTogc3RyaW5nLCB0YXJnZXQ6IGNjLk5vZGUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3Bvb2xfbWFwW25hbWVdKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcG9vbF9tYXBbbmFtZV0ucHV0KHRhcmdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlUG9vbChuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3Bvb2xfbWFwW25hbWVdKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcG9vbF9tYXBbbmFtZV0gPSBudWxsO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLl9wb29sX21hcFtuYW1lXTtcclxuICAgIH1cclxufSJdfQ==