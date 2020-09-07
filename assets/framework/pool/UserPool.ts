export default class UserPool {
    private pool : Array<cc.Node>;
    private prefab: cc.Prefab;
    private countId: number = 0;

    constructor(prefab: cc.Prefab, num: number) {
        this.pool = new Array<cc.Node>();
        this.prefab = prefab;
        for(var i = 0; i < num; i++) {
            let node;
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
    get(): cc.Node {
        if (this.pool.length > 0) {
            let node = this.pool.shift();
            return node;
        } else {
            let node;
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
    }

    /**
     * @description 回收一个node节点到缓存池中
     * @param target 回收的目标节点
     */
    put(target: cc.Node): void {
        target.stopAllActions();
        target.removeFromParent();
        if (this.pool.indexOf(target) >= 0) {
            return;
        } 
        this.pool.push(target);
    }

    /**
     * @description 返回缓存池还有多少个对象可以用
     * @returns {Number} 缓存池还有多少个对象
     */
    count(): number{
        return this.pool.length;
    }

    /**
     * @description 返回缓存池一共产生了多少个对象
     * @returns {Number} 缓存池一共产生了多少个对象
     */
    size(): number {
        return this.countId;
    }

    /**
     * @description 清楚缓存池对象
     */
    clear(): void {
        this.pool.forEach((target: cc.Node, index: number) => {
            target.destroy();
        });
        this.pool = [];
    }
}
