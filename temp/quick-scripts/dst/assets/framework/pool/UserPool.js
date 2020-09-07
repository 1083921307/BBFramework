
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/pool/UserPool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxwb29sXFxVc2VyUG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBS0ksa0JBQVksTUFBaUIsRUFBRSxHQUFXO1FBRmxDLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFHeEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEtBQUssRUFBVyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekIsSUFBSSxJQUFJLFNBQUEsQ0FBQztZQUNULElBQUksRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFO2dCQUNsQixFQUFFLENBQUMsWUFBWSxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDOUIsRUFBRSxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQzthQUMzQjtpQkFDSTtnQkFDRCx3REFBd0Q7Z0JBQ3hELElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2pDO1lBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QjtJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSCxzQkFBRyxHQUFIO1FBQ0ksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM3QixPQUFPLElBQUksQ0FBQztTQUNmO2FBQU07WUFDSCxJQUFJLElBQUksU0FBQSxDQUFDO1lBQ1QsSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQ2xCLEVBQUUsQ0FBQyxZQUFZLENBQUMsR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbkMsRUFBRSxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQzthQUMzQjtpQkFDSTtnQkFDRCx3REFBd0Q7Z0JBQ3hELElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN0QztZQUNELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDaEMsT0FBTyxJQUFJLENBQUM7U0FDZjtJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSCxzQkFBRyxHQUFILFVBQUksTUFBZTtRQUNmLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixNQUFNLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUMxQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNoQyxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsd0JBQUssR0FBTDtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7T0FHRztJQUNILHVCQUFJLEdBQUo7UUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBZSxFQUFFLEtBQWE7WUFDN0MsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQXRGQSxBQXNGQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlclBvb2wge1xyXG4gICAgcHJpdmF0ZSBwb29sIDogQXJyYXk8Y2MuTm9kZT47XHJcbiAgICBwcml2YXRlIHByZWZhYjogY2MuUHJlZmFiO1xyXG4gICAgcHJpdmF0ZSBjb3VudElkOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByZWZhYjogY2MuUHJlZmFiLCBudW06IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucG9vbCA9IG5ldyBBcnJheTxjYy5Ob2RlPigpO1xyXG4gICAgICAgIHRoaXMucHJlZmFiID0gcHJlZmFiO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBudW07IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbm9kZTtcclxuICAgICAgICAgICAgaWYgKGNjW1wic3VwcG9ydEppdFwiXSkge1xyXG4gICAgICAgICAgICAgICAgY2NbXCJzdXBwb3J0Sml0XCJdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIGNjW1wic3VwcG9ydEppdFwiXSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzmmK/nibnmrornmoTkuI3mlK/mjIEgSklUIOeahOW5s+WPsO+8jOWImeS4jemcgOimgeS8mOWMlu+8jOS5n+S4jeiDveW8uuWItuiuvue9riBjYy5zdXBwb3J0Sml0IOS4uiB0cnVlXHJcbiAgICAgICAgICAgICAgICBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBub2RlW1wicG9vbElkXCJdID0gKyt0aGlzLmNvdW50SWQ7XHJcbiAgICAgICAgICAgIHRoaXMucG9vbC5wdXNoKG5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiDku47nvJPlrZjmsaDkuK0g5Y+W5Ye6IOS4gOS4qiBub2RlIOWvueixoVxyXG4gICAgICogQHJldHVybnMge2NjLk5vZGV9ICDov5Tlm57kuIDkuKogbm9kZSDlr7nosaFcclxuICAgICAqL1xyXG4gICAgZ2V0KCk6IGNjLk5vZGUge1xyXG4gICAgICAgIGlmICh0aGlzLnBvb2wubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMucG9vbC5zaGlmdCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgbm9kZTtcclxuICAgICAgICAgICAgaWYgKGNjW1wic3VwcG9ydEppdFwiXSkge1xyXG4gICAgICAgICAgICAgICAgY2NbXCJzdXBwb3J0Sml0XCJdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgY2NbXCJzdXBwb3J0Sml0XCJdID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIOWmguaenOaYr+eJueauiueahOS4jeaUr+aMgSBKSVQg55qE5bmz5Y+w77yM5YiZ5LiN6ZyA6KaB5LyY5YyW77yM5Lmf5LiN6IO95by65Yi26K6+572uIGNjLnN1cHBvcnRKaXQg5Li6IHRydWVcclxuICAgICAgICAgICAgICAgIG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbm9kZVtcInBvb2xJZFwiXSA9ICsrdGhpcy5jb3VudElkO1xyXG4gICAgICAgICAgICByZXR1cm4gbm9kZTsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIOWbnuaUtuS4gOS4qm5vZGXoioLngrnliLDnvJPlrZjmsaDkuK1cclxuICAgICAqIEBwYXJhbSB0YXJnZXQg5Zue5pS255qE55uu5qCH6IqC54K5XHJcbiAgICAgKi9cclxuICAgIHB1dCh0YXJnZXQ6IGNjLk5vZGUpOiB2b2lkIHtcclxuICAgICAgICB0YXJnZXQuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0YXJnZXQucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgIGlmICh0aGlzLnBvb2wuaW5kZXhPZih0YXJnZXQpID49IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgdGhpcy5wb29sLnB1c2godGFyZ2V0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiDov5Tlm57nvJPlrZjmsaDov5jmnInlpJrlsJHkuKrlr7nosaHlj6/ku6XnlKhcclxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IOe8k+WtmOaxoOi/mOacieWkmuWwkeS4quWvueixoVxyXG4gICAgICovXHJcbiAgICBjb3VudCgpOiBudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9vbC5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24g6L+U5Zue57yT5a2Y5rGg5LiA5YWx5Lqn55Sf5LqG5aSa5bCR5Liq5a+56LGhXHJcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSDnvJPlrZjmsaDkuIDlhbHkuqfnlJ/kuoblpJrlsJHkuKrlr7nosaFcclxuICAgICAqL1xyXG4gICAgc2l6ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvdW50SWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24g5riF5qWa57yT5a2Y5rGg5a+56LGhXHJcbiAgICAgKi9cclxuICAgIGNsZWFyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucG9vbC5mb3JFYWNoKCh0YXJnZXQ6IGNjLk5vZGUsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgdGFyZ2V0LmRlc3Ryb3koKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBvb2wgPSBbXTtcclxuICAgIH1cclxufVxyXG4iXX0=