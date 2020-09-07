"use strict";
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