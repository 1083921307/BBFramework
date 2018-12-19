/** 本地化模块 */
export default class Localization {
    static singleInstance: Localization = null;
    static getInstance(): Localization {
        if (Localization.singleInstance == null) {
            Localization.singleInstance = new Localization();
        }
        return Localization.singleInstance;
    }

    jsonData: Object = null;

    constructor() {
       cc.log("本地化: " +  cc.sys.language);
       if (CC_EDITOR) {
            return;
       }

       this.jsonData = {};     
    //    cc.loader.loadRes(`localization/localization_${cc.sys.language}`, cc.JsonAsset, (err, json) => {
    //         cc.log(err)
    //     });
    //    bb.UILoader.loadRes(`localization/localization_${cc.sys.language}.json`, cc.JsonAsset, (json) => {
    //         debugger;
    //    });
       // 加载本地化资源
    }

    init() {
        bb.UILoader.loadRes(`localization/localization_${cc.sys.language}`, cc.JsonAsset, (data) => {
            this.jsonData = data.json;
        });
    }

    get(key: number) {
        return this.jsonData[key];
    }
}