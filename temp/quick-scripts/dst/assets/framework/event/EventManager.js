
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/event/EventManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7a426ftB1VIVIaVc4ngdIyl', 'EventManager');
// framework/event/EventManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventManager = /** @class */ (function () {
    function EventManager() {
        this.event_cache = null;
        this.event_cache = {};
    }
    EventManager.getInstance = function () {
        if (EventManager.singleInstance == null) {
            EventManager.singleInstance = new EventManager();
        }
        return EventManager.singleInstance;
    };
    /**
     *
     * @param {number} type 事件类型
     * @param {Function} callback 触发函数
     * @param {string} tag 标识这个回调函数属于哪一个类(每个类都有一个唯一标识符)
     * @param {number} priority 事件优先级
     */
    EventManager.prototype.addEventListener = function (type, callback, class_id, priority) {
        if (class_id === void 0) { class_id = ""; }
        if (priority === void 0) { priority = 0; }
        if (!type || !callback) {
            return;
        }
        var sub_cache = this.event_cache[type] || [];
        var hasSame = false;
        for (var i = 0; i < sub_cache.length; i++) {
            if (sub_cache[i].callback === callback) {
                hasSame = true;
                break;
            }
        }
        if (hasSame) {
            return;
        }
        var ievent = {
            type: type,
            class_id: class_id,
            priority: priority,
            callback: callback
        };
        if (priority > 0) {
            var isPush = true;
            for (var i = sub_cache.length - 1; i >= 0; i--) {
                if (sub_cache[i].priority > priority) {
                    sub_cache.splice(i + 1, 0, ievent);
                    isPush = false;
                    break;
                }
            }
            if (isPush) {
                sub_cache.splice(0, 0, ievent);
            }
        }
        else {
            sub_cache.push(ievent);
        }
        this.event_cache[type] = sub_cache;
    };
    EventManager.prototype.dispatchEvent = function (type, params) {
        if (!type) {
            return;
        }
        var sub_cache = this.event_cache[type];
        if (!sub_cache) {
            return;
        }
        for (var i = 0; i < sub_cache.length; i++) {
            var ievent = sub_cache[i];
            ievent.callback(params);
        }
    };
    EventManager.prototype.removeEventListener = function (type, callback) {
        if (!type || !callback) {
            return;
        }
        var sub_cache = this.event_cache[type];
        if (!sub_cache) {
            return;
        }
        for (var i = 0; i < sub_cache.length; i++) {
            if (sub_cache[i].callback === callback) {
                sub_cache.splice(i, 1);
                break;
            }
        }
        if (sub_cache.length == 0) {
            delete this.event_cache[type];
        }
    };
    EventManager.prototype.removeEventListenerByTag = function (type, class_id) {
        if (!type) {
            return;
        }
        for (var key in this.event_cache) {
            var sub_cache = this.event_cache[key];
            if (!sub_cache) {
                continue;
            }
            for (var i = 0; i < sub_cache.length; i++) {
                if (sub_cache[i].class_id === class_id) {
                    sub_cache.splice(i, 1);
                    break;
                }
            }
            if (sub_cache.length == 0) {
                delete this.event_cache[type];
            }
        }
    };
    EventManager.singleInstance = null;
    return EventManager;
}());
exports.default = EventManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxldmVudFxcRXZlbnRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUUE7SUFVSTtRQUZBLGdCQUFXLEdBQW1DLElBQUksQ0FBQztRQUcvQyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBVk0sd0JBQVcsR0FBbEI7UUFDSSxJQUFJLFlBQVksQ0FBQyxjQUFjLElBQUksSUFBSSxFQUFFO1lBQ3JDLFlBQVksQ0FBQyxjQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztTQUNwRDtRQUNELE9BQU8sWUFBWSxDQUFDLGNBQWMsQ0FBQztJQUN2QyxDQUFDO0lBT0Q7Ozs7OztPQU1HO0lBQ0gsdUNBQWdCLEdBQWhCLFVBQWlCLElBQVksRUFBRSxRQUFhLEVBQUUsUUFBcUIsRUFBRSxRQUFvQjtRQUEzQyx5QkFBQSxFQUFBLGFBQXFCO1FBQUUseUJBQUEsRUFBQSxZQUFvQjtRQUNyRixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3BCLE9BQU87U0FDVjtRQUNELElBQUksU0FBUyxHQUFrQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM1RCxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDcEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRTtnQkFDcEMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDZixNQUFNO2FBQ1Q7U0FDSjtRQUNELElBQUksT0FBTyxFQUFFO1lBQ1QsT0FBTztTQUNWO1FBQ0QsSUFBSSxNQUFNLEdBQVc7WUFDakIsSUFBSSxFQUFFLElBQUk7WUFDVixRQUFRLEVBQUUsUUFBUTtZ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QUFRLEVBQUU7b0JBQ3BDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN2QixNQUFNO2lCQUNUO2FBQ0o7WUFDRCxJQUFJLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUN2QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDakM7U0FDSjtJQUNMLENBQUM7SUFoSE0sMkJBQWMsR0FBaUIsSUFBSSxDQUFDO0lBaUgvQyxtQkFBQztDQWxIRCxBQWtIQyxJQUFBO2tCQWxIb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbnRlcmZhY2UgSUV2ZW50IHtcclxuICAgIHR5cGU6IG51bWJlcixcclxuICAgIHByaW9yaXR5OiBudW1iZXIsIFxyXG4gICAgY2xhc3NfaWQ6IHN0cmluZyxcclxuICAgIGNhbGxiYWNrOiAoZGF0YTogYW55KSA9PiB2b2lkXHJcbn0gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudE1hbmFnZXIge1xyXG4gICAgc3RhdGljIHNpbmdsZUluc3RhbmNlOiBFdmVudE1hbmFnZXIgPSBudWxsO1xyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCk6IEV2ZW50TWFuYWdlciB7XHJcbiAgICAgICAgaWYgKEV2ZW50TWFuYWdlci5zaW5nbGVJbnN0YW5jZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIEV2ZW50TWFuYWdlci5zaW5nbGVJbnN0YW5jZSA9IG5ldyBFdmVudE1hbmFnZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIEV2ZW50TWFuYWdlci5zaW5nbGVJbnN0YW5jZTtcclxuICAgIH1cclxuICAgIGV2ZW50X2NhY2hlOiB7W2tleTogbnVtYmVyXTogQXJyYXk8SUV2ZW50Pn0gPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZXZlbnRfY2FjaGUgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHR5cGUg5LqL5Lu257G75Z6LXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayDop6blj5Hlh73mlbBcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0YWcg5qCH6K+G6L+Z5Liq5Zue6LCD5Ye95pWw5bGe5LqO5ZOq5LiA5Liq57G7KOavj+S4quexu+mDveacieS4gOS4quWUr+S4gOagh+ivhuespilcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwcmlvcml0eSDkuovku7bkvJjlhYjnuqdcclxuICAgICAqL1xyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcih0eXBlOiBudW1iZXIsIGNhbGxiYWNrOiBhbnksIGNsYXNzX2lkOiBzdHJpbmcgPSBcIlwiLCBwcmlvcml0eTogbnVtYmVyID0gMCkge1xyXG4gICAgICAgIGlmICghdHlwZSB8fCAhY2FsbGJhY2spIHsgXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHN1Yl9jYWNoZTogQXJyYXk8SUV2ZW50PiA9IHRoaXMuZXZlbnRfY2FjaGVbdHlwZV0gfHwgW107XHJcbiAgICAgICAgbGV0IGhhc1NhbWUgPSBmYWxzZTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1Yl9jYWNoZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoc3ViX2NhY2hlW2ldLmNhbGxiYWNrID09PSBjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgaGFzU2FtZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaGFzU2FtZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBcclxuICAgICAgICBsZXQgaWV2ZW50OiBJRXZlbnQgPSB7XHJcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgICAgIGNsYXNzX2lkOiBjbGFzc19pZCxcclxuICAgICAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LCBcclxuICAgICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAocHJpb3JpdHkgPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBpc1B1c2ggPSB0cnVlO1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSBzdWJfY2FjaGUubGVuZ3RoIC0gMTsgaSA+PTA7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBzdWJfY2FjaGVbaV0ucHJpb3JpdHkgPiBwcmlvcml0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Yl9jYWNoZS5zcGxpY2UoaSArIDEsIDAsIGlldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNQdXNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzUHVzaCkge1xyXG4gICAgICAgICAgICAgICAgc3ViX2NhY2hlLnNwbGljZSgwLCAwLCBpZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3ViX2NhY2hlLnB1c2goaWV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ldmVudF9jYWNoZVt0eXBlXSA9IHN1Yl9jYWNoZTtcclxuICAgIH0gXHJcblxyXG4gICAgZGlzcGF0Y2hFdmVudCh0eXBlOiBudW1iZXIsIHBhcmFtcz86IGFueSkge1xyXG4gICAgICAgIGlmICghdHlwZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzdWJfY2FjaGU6IEFycmF5PElFdmVudD4gPSB0aGlzLmV2ZW50X2NhY2hlW3R5cGVdO1xyXG4gICAgICAgIGlmICghc3ViX2NhY2hlKSB7XHJcbiAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1Yl9jYWNoZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgaWV2ZW50ID0gc3ViX2NhY2hlW2ldO1xyXG4gICAgICAgICAgICBpZXZlbnQuY2FsbGJhY2socGFyYW1zKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVFdmVudExpc3RlbmVyKHR5cGU6IG51bWJlciwgY2FsbGJhY2s6IGFueSkge1xyXG4gICAgICAgIGlmICghdHlwZSB8fCAhY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGxldCBzdWJfY2FjaGU6IEFycmF5PElFdmVudD4gID0gdGhpcy5ldmVudF9jYWNoZVt0eXBlXTtcclxuICAgICAgICAgaWYgKCFzdWJfY2FjaGUpIHtcclxuICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1Yl9jYWNoZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgaWYgKHN1Yl9jYWNoZVtpXS5jYWxsYmFjayA9PT0gY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICBzdWJfY2FjaGUuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGlmIChzdWJfY2FjaGUubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50X2NhY2hlW3R5cGVdO1xyXG4gICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lckJ5VGFnKHR5cGU6IG51bWJlciwgY2xhc3NfaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmICghdHlwZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IobGV0IGtleSBpbiB0aGlzLmV2ZW50X2NhY2hlKSB7XHJcbiAgICAgICAgICAgIGxldCBzdWJfY2FjaGU6IEFycmF5PElFdmVudD4gPSB0aGlzLmV2ZW50X2NhY2hlW2tleV07XHJcbiAgICAgICAgICAgIGlmICghc3ViX2NhY2hlKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1Yl9jYWNoZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN1Yl9jYWNoZVtpXS5jbGFzc19pZCA9PT0gY2xhc3NfaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWJfY2FjaGUuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzdWJfY2FjaGUubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50X2NhY2hlW3R5cGVdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==