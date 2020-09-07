"use strict";
cc._RF.push(module, '34c73lIfNNDMI/0ab4FL38K', 'UserPool');
// framework/pool/UserPool.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserPool = /** @class */ (function () {
    function UserPool(prefab, num) {
        this.countId = 0;
        this.pool = new Array();
        this.prefab = prefab;
        for (var i = 0; i < num; i++) {
            var node = void 0;
            if (cc["supportJit"]) {
                cc["supportJit"] = false;
                node = cc.instantiate(prefab);
                cc["supportJit"] = true;
            }
            else {
                // 如果是特殊的不支持 JIT 的平台，则不需要优化，也不能强制设置 cc.supportJit 为 true
                node = cc.instantiate(prefab);
            }
            node["poolId"] = ++this.countId;
            this.pool.push(node);
        }
    }
    /**
     * @description 从缓存池中 取出 一个 node 对象
     * @returns {cc.Node}  返回一个 node 对象
     */
    UserPool.prototype.get = function () {
        if (this.pool.length > 0) {
            var node = this.pool.shift();
            return node;
        }
        else {
            var node = void 0;
            if (cc["supportJit"]) {
                cc["supportJit"] = false;
                node = cc.instantiate(this.prefab);
                cc["supportJit"] = true;
            }
            else {
                // 如果是特殊的不支持 JIT 的平台，则不需要优化，也不能强制设置 cc.supportJit 为 true
                node = cc.instantiate(this.prefab);
            }
            node["poolId"] = ++this.countId;
            return node;
        }
    };
    /**
     * @description 回收一个node节点到缓存池中
     * @param target 回收的目标节点
     */
    UserPool.prototype.put = function (target) {
        target.stopAllActions();
        target.removeFromParent();
        if (this.pool.indexOf(target) >= 0) {
            return;
        }
        this.pool.push(target);
    };
    /**
     * @description 返回缓存池还有多少个对象可以用
     * @returns {Number} 缓存池还有多少个对象
     */
    UserPool.prototype.count = function () {
        return this.pool.length;
    };
    /**
     * @description 返回缓存池一共产生了多少个对象
     * @returns {Number} 缓存池一共产生了多少个对象
     */
    UserPool.prototype.size = function () {
        return this.countId;
    };
    /**
     * @description 清楚缓存池对象
     */
    UserPool.prototype.clear = function () {
        this.pool.forEach(function (target, index) {
            target.destroy();
        });
        this.pool = [];
    };
    return UserPool;
}());
exports.default = UserPool;

cc._RF.pop();