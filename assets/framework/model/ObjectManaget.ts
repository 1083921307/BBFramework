
/**
 * @module ObjectManager
 * @deprecated 数据模型管理器
 * @exports
 */
export default class ObjectManager {
    static singleInstance: ObjectManager = null;
    static getInstance(): ObjectManager {
        if (ObjectManager.singleInstance == null) {
            ObjectManager.singleInstance = new ObjectManager();
        }
        return ObjectManager.singleInstance;
    }

    /**
     * @function
     * @param {number} name 数据模型的名字
     * @param {typeof bb.BaseModel} model 数据模型
     */
    addModel(name: string, model: typeof bb.BaseModel) {
        if (this[name]) {
            return;
        }
        this[name] = new model();
        this[name].initModel();
        return this[name];
    }

    removeModel(name: string) {
        if (!this[name]) {
            return;
        }
        this[name] = null;
        delete this[name];
    }

    getModelByName(name: string, model: typeof bb.BaseModel): bb.BaseModel {
        let ret = this[name];
        if (ret !== null && ret instanceof bb.BaseModel) {
            return ret;
        }
        this[name] = new model();
        this[name].initModel();
        return this[name];
    }


}