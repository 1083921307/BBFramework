"use strict";
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