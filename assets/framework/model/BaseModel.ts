export default class BaseModel {
    initModel() {
        // TODO 由子类实现
    }

    saveItem(key: string, item: any) {
        if (key !== null && item !== null) {
            cc.sys.localStorage.setItem(key, item);
        }
    }

    getItem(key: string) {
        if (key !== null) {
            return cc.sys.localStorage.getItem(key);
        }
        return undefined;
    }

    removeItem(key: string) {
        if (key !== null) {
            cc.sys.localStorage.removeItem(key);
        }
    }
}