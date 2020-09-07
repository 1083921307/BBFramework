import UserPool from "./UserPool";

// 缓存管理池



export default class PoolManager  {
    _pool_map: {[key: string]: UserPool} = {};

    static _instance: PoolManager = null;
    static getInstance(): PoolManager {
        if (PoolManager._instance == null) {
            PoolManager._instance = new PoolManager();
        }
        return PoolManager._instance;
    }

    addPool(name: string, pool: UserPool) {
        if (this._pool_map[name]) {
            return;
        }
        this._pool_map[name] = pool;
    }

    getPool(name: string) {
        return  this._pool_map[name];
    }

    getPoolByName(name: string, prefab: cc.Prefab) {
        if (!this._pool_map[name]) {
            this._pool_map[name] = new UserPool(prefab, 3);
        }
        return this._pool_map[name];
    }

    getPoolNode(name: string) {
        if (!this._pool_map[name]) {
            return null;
        }
        return  this._pool_map[name].get();
    }

    putPoolNode(name: string, target: cc.Node) {
        if (!this._pool_map[name]) {
            return;
        }
        this._pool_map[name].put(target);
    }

    removePool(name: string) {
        if (!this._pool_map[name]) {
            return;
        }
        this._pool_map[name] = null;
        delete this._pool_map[name];
    }
}