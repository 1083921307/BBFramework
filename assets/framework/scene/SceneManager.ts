export default class SceneManager {
    static singleInstance: SceneManager = null;
    static getInstance(): SceneManager {
        if (SceneManager.singleInstance == null) {
            SceneManager.singleInstance = new SceneManager();
        }
        return SceneManager.singleInstance;
    }

    dependAssets: string[] = null;
    constructor() {
        cc.director.on(cc.Director.EVENT_BEFORE_SCENE_LOADING, (event, dat)=> {
            if (!this.dependAssets) {
                return;
            }
            
            bb.UILoader.releaseArrayRes(this.dependAssets);
            this.dependAssets = null;
        });

        cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, (scene: cc.SceneAsset) => {
            if (!scene["dependAssets"]) {
                this.dependAssets = null;
                return;
            }
            this.dependAssets = scene["dependAssets"];
            bb.UILoader.retainArrayRes(scene["dependAssets"]);
            bb.UILoader.gc();
        });
    }

    loadScene(scene: string, data: any) {
        cc.director.preloadScene(scene, (err, sceneAsset) => {
            if (err) {
                cc.log(`[场景加载] 失败 ${err} `);
                return;
            }
            cc.director.loadScene(scene, (err, newScene) => {
                let components = newScene.children[0]._components;
                let component = components[components.length - 1];
                let sceneCtrl = new bb.SceneCtrl();
                sceneCtrl.data = data;
                sceneCtrl.name = scene;
                sceneCtrl.logicComponet = component;
                sceneCtrl.logicComponet["sceneCtrl"] = sceneCtrl;
                sceneCtrl.logicComponet["initBind"]();
                sceneCtrl.logicComponet["onEnter"]();
            }); 
        });
    }
}