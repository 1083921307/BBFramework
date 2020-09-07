"use strict";
cc._RF.push(module, '50e56Rd5M9I9LtdIKuw5Vlj', 'SceneManager');
// framework/scene/SceneManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SceneManager = /** @class */ (function () {
    function SceneManager() {
        var _this = this;
        this.dependAssets = null;
        cc.director.on(cc.Director.EVENT_BEFORE_SCENE_LOADING, function (event, dat) {
            if (!_this.dependAssets) {
                return;
            }
            bb.UILoader.releaseArrayRes(_this.dependAssets);
            _this.dependAssets = null;
        });
        cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function (scene) {
            if (!scene["dependAssets"]) {
                _this.dependAssets = null;
                return;
            }
            _this.dependAssets = scene["dependAssets"];
            bb.UILoader.retainArrayRes(scene["dependAssets"]);
            bb.UILoader.gc();
        });
    }
    SceneManager.getInstance = function () {
        if (SceneManager.singleInstance == null) {
            SceneManager.singleInstance = new SceneManager();
        }
        return SceneManager.singleInstance;
    };
    SceneManager.prototype.loadScene = function (scene, data) {
        cc.director.preloadScene(scene, function (err, sceneAsset) {
            if (err) {
                cc.log("[\u573A\u666F\u52A0\u8F7D] \u5931\u8D25 " + err + " ");
                return;
            }
            cc.director.loadScene(scene, function (err, newScene) {
                var components = newScene.children[0]._components;
                var component = components[components.length - 1];
                var sceneCtrl = new bb.SceneCtrl();
                sceneCtrl.data = data;
                sceneCtrl.name = scene;
                sceneCtrl.logicComponet = component;
                sceneCtrl.logicComponet["sceneCtrl"] = sceneCtrl;
                sceneCtrl.logicComponet["initBind"]();
                sceneCtrl.logicComponet["onEnter"]();
            });
        });
    };
    SceneManager.singleInstance = null;
    return SceneManager;
}());
exports.default = SceneManager;

cc._RF.pop();