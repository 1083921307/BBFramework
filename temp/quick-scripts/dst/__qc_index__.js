
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/framework/App');
require('./assets/framework/Localization');
require('./assets/framework/audio/AudioManager');
require('./assets/framework/event/EventManager');
require('./assets/framework/log/AppLog');
require('./assets/framework/model/BaseModel');
require('./assets/framework/model/BaseVO');
require('./assets/framework/model/ObjectManaget');
require('./assets/framework/pool/PoolManager');
require('./assets/framework/pool/UserPool');
require('./assets/framework/scene/SceneManager');
require('./assets/framework/view/ViewManager');
require('./assets/framework/view/base/BaseComponent');
require('./assets/framework/view/base/BaseViewCtrl');
require('./assets/framework/view/base/SceneComponent');
require('./assets/framework/view/base/SceneCtrl');
require('./assets/framework/view/pligin/UIPlugin');
require('./assets/migration/use_v2.0.x_cc.Toggle_event');
require('./assets/resources/scene/test_uiloader/Item');
require('./assets/resources/scene/test_uiloader/ResViewLogic');
require('./assets/resources/scene/test_uiloader/test_scene1');
require('./assets/resources/scene/test_uiloader/test_scene2');
require('./assets/resources/scene/test_view/test_item_view');
require('./assets/resources/scene/test_view/test_scene3');
require('./assets/resources/scene/test_view/test_scene4');
require('./assets/resources/scene/test_view/test_view_1');
require('./assets/resources/scene/test_view/test_view_2');
require('./assets/resources/scene/test_view/test_view_3');
require('./assets/script/Test');
require('./assets/script/Test2');
require('./assets/script/Test3');
require('./assets/script/test_3d/test_3d_scene1');

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