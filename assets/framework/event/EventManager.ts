
interface IEvent {
    type: number,
    priority: number, 
    class_id: string,
    callback: (data) => void
} 

export default class EventManager {
    static singleInstance: EventManager = null;
    static getInstance(): EventManager {
        if (EventManager.singleInstance == null) {
            EventManager.singleInstance = new EventManager();
        }
        return EventManager.singleInstance;
    }
    event_cache: {[key: number]: Array<IEvent>} = null;

    constructor() {
        this.event_cache = {};
    }

    /**
     * 
     * @param {number} type 事件类型
     * @param {Function} callback 触发函数
     * @param {string} tag 标识这个回调函数属于哪一个类(每个类都有一个唯一标识符)
     * @param {number} priority 事件优先级
     */
    addEventListener(type: number, callback: any, class_id: string = "", priority: number = 0) {
        if (!type || !callback) { 
            return;
        }
        let sub_cache: Array<IEvent> = this.event_cache[type] || [];
        let hasSame = false;
        for (let i = 0; i < sub_cache.length; i++) {
            if (sub_cache[i].callback === callback) {
                hasSame = true;
                break;
            }
        }
        if (hasSame) {
            return;
        } 
        let ievent: IEvent = {
            type: type,
            class_id: class_id,
            priority: priority, 
            callback: callback
        };
        if (priority > 0) {
            let isPush = true;
            for(let i = sub_cache.length - 1; i >=0; i--) {
                if ( sub_cache[i].priority > priority) {
                    sub_cache.splice(i + 1, 0, ievent);
                    isPush = false;
                    break;
                }
            }
            if (isPush) {
                sub_cache.splice(0, 0, ievent);
            }
        } else {
            sub_cache.push(ievent);
        }
        this.event_cache[type] = sub_cache;
    } 

    dispatchEvent(type: number, params?: any) {
        if (!type) {
            return;
        }
        let sub_cache: Array<IEvent> = this.event_cache[type];
        if (!sub_cache) {
           return;
        }
        for (let i = 0; i < sub_cache.length; i++) {
            let ievent = sub_cache[i];
            ievent.callback(params)
        }
    }

    removeEventListener(type: number, callback: any) {
        if (!type || !callback) {
            return;
         }
         let sub_cache: Array<IEvent>  = this.event_cache[type];
         if (!sub_cache) {
             return;
         }
         for (let i = 0; i < sub_cache.length; i++) {
             if (sub_cache[i].callback === callback) {
                 sub_cache.splice(i, 1);
                 break;
             }
         }
         if (sub_cache.length == 0) {
             delete this.event_cache[type];
         }
    }

    removeEventListenerByTag(type: number, class_id: string) {
        if (!type) {
            return;
        }

        for(let key in this.event_cache) {
            let sub_cache: Array<IEvent> = this.event_cache[key];
            if (!sub_cache) {
                continue;
            }
            for (let i = 0; i < sub_cache.length; i++) {
                if (sub_cache[i].class_id === class_id) {
                    sub_cache.splice(i, 1);
                    break;
                }
            }
            if (sub_cache.length == 0) {
                delete this.event_cache[type];
            }
        }
    }
}
