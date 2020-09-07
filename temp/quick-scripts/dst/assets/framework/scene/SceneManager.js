
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/scene/SceneManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxzY2VuZVxcU2NlbmVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFVSTtRQUFBLGlCQW1CQztRQXBCRCxpQkFBWSxHQUFhLElBQUksQ0FBQztRQUUxQixFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLDBCQUEwQixFQUFFLFVBQUMsS0FBSyxFQUFFLEdBQUc7WUFDOUQsSUFBSSxDQUFDLEtBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3BCLE9BQU87YUFDVjtZQUVELEVBQUUsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMvQyxLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsd0JBQXdCLEVBQUUsVUFBQyxLQUFvQjtZQUN0RSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFFO2dCQUN4QixLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDekIsT0FBTzthQUNWO1lBQ0QsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDMUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDbEQsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUEzQk0sd0JBQVcsR0FBbEI7UUFDSSxJQUFJLFlBQVksQ0FBQyxjQUFjLElBQUksSUFBSSxFQUFFO1lBQ3JDLFlBQVksQ0FBQyxjQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztTQUNwRDtRQUNELE9BQU8sWUFBWSxDQUFDLGNBQWMsQ0FBQztJQUN2QyxDQUFDO0lBd0JELGdDQUFTLEdBQVQsVUFBVSxLQUFhLEVBQUUsSUFBUztRQUM5QixFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsVUFBQyxHQUFHLEVBQUUsVUFBVTtZQUM1QyxJQUFJLEdBQUcsRUFBRTtnQkFDTCxFQUFFLENBQUMsR0FBRyxDQUFDLDZDQUFhLEdBQUcsTUFBRyxDQUFDLENBQUM7Z0JBQzVCLE9BQU87YUFDVjtZQUNELEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxVQUFDLEdBQUcsRUFBRSxRQUFRO2dCQUN2QyxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztnQkFDbEQsSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xELElBQUksU0FBUyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNuQyxTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDdEIsU0FBUyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7Z0JBQ3ZCLFNBQVMsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO2dCQUNwQyxTQUFTLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxHQUFHLFNBQVMsQ0FBQztnQkFDakQsU0FBUyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO2dCQUN0QyxTQUFTLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7WUFDekMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFoRE0sMkJBQWMsR0FBaUIsSUFBSSxDQUFDO0lBaUQvQyxtQkFBQztDQWxERCxBQWtEQyxJQUFBO2tCQWxEb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lTWFuYWdlciB7XHJcbiAgICBzdGF0aWMgc2luZ2xlSW5zdGFuY2U6IFNjZW5lTWFuYWdlciA9IG51bGw7XHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogU2NlbmVNYW5hZ2VyIHtcclxuICAgICAgICBpZiAoU2NlbmVNYW5hZ2VyLnNpbmdsZUluc3RhbmNlID09IG51bGwpIHtcclxuICAgICAgICAgICAgU2NlbmVNYW5hZ2VyLnNpbmdsZUluc3RhbmNlID0gbmV3IFNjZW5lTWFuYWdlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gU2NlbmVNYW5hZ2VyLnNpbmdsZUluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGRlcGVuZEFzc2V0czogc3RyaW5nW10gPSBudWxsO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3Iub24oY2MuRGlyZWN0b3IuRVZFTlRfQkVGT1JFX1NDRU5FX0xPQURJTkcsIChldmVudCwgZGF0KT0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmRlcGVuZEFzc2V0cykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBiYi5VSUxvYWRlci5yZWxlYXNlQXJyYXlSZXModGhpcy5kZXBlbmRBc3NldHMpO1xyXG4gICAgICAgICAgICB0aGlzLmRlcGVuZEFzc2V0cyA9IG51bGw7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNjLmRpcmVjdG9yLm9uKGNjLkRpcmVjdG9yLkVWRU5UX0FGVEVSX1NDRU5FX0xBVU5DSCwgKHNjZW5lOiBjYy5TY2VuZUFzc2V0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc2NlbmVbXCJkZXBlbmRBc3NldHNcIl0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVwZW5kQXNzZXRzID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmRlcGVuZEFzc2V0cyA9IHNjZW5lW1wiZGVwZW5kQXNzZXRzXCJdO1xyXG4gICAgICAgICAgICBiYi5VSUxvYWRlci5yZXRhaW5BcnJheVJlcyhzY2VuZVtcImRlcGVuZEFzc2V0c1wiXSk7XHJcbiAgICAgICAgICAgIGJiLlVJTG9hZGVyLmdjKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFNjZW5lKHNjZW5lOiBzdHJpbmcsIGRhdGE6IGFueSkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShzY2VuZSwgKGVyciwgc2NlbmVBc3NldCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coYFvlnLrmma/liqDovb1dIOWksei0pSAke2Vycn0gYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHNjZW5lLCAoZXJyLCBuZXdTY2VuZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudHMgPSBuZXdTY2VuZS5jaGlsZHJlblswXS5fY29tcG9uZW50cztcclxuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnQgPSBjb21wb25lbnRzW2NvbXBvbmVudHMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgICAgICBsZXQgc2NlbmVDdHJsID0gbmV3IGJiLlNjZW5lQ3RybCgpO1xyXG4gICAgICAgICAgICAgICAgc2NlbmVDdHJsLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgc2NlbmVDdHJsLm5hbWUgPSBzY2VuZTtcclxuICAgICAgICAgICAgICAgIHNjZW5lQ3RybC5sb2dpY0NvbXBvbmV0ID0gY29tcG9uZW50O1xyXG4gICAgICAgICAgICAgICAgc2NlbmVDdHJsLmxvZ2ljQ29tcG9uZXRbXCJzY2VuZUN0cmxcIl0gPSBzY2VuZUN0cmw7XHJcbiAgICAgICAgICAgICAgICBzY2VuZUN0cmwubG9naWNDb21wb25ldFtcImluaXRCaW5kXCJdKCk7XHJcbiAgICAgICAgICAgICAgICBzY2VuZUN0cmwubG9naWNDb21wb25ldFtcIm9uRW50ZXJcIl0oKTtcclxuICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19