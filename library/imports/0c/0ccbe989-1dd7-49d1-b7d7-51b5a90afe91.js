"use strict";
cc._RF.push(module, '0ccbemJHddJ0bfXUbWpCv6R', 'App');
// framework/App.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
window["bb"] = {};
console.log("hello world");
var AppLog_1 = require("./log/AppLog");
window["bb"].log = AppLog_1.default.getInstance().log.bind(AppLog_1.default.getInstance());
window["bb"].log2 = AppLog_1.default.getInstance().log2.bind(AppLog_1.default.getInstance());
window["bb"].info = AppLog_1.default.getInstance().info.bind(AppLog_1.default.getInstance());
window["bb"].info2 = AppLog_1.default.getInstance().info2.bind(AppLog_1.default.getInstance());
window["bb"].info3 = AppLog_1.default.getInstance().info3.bind(AppLog_1.default.getInstance());
window["bb"].warn = AppLog_1.default.getInstance().warn.bind(AppLog_1.default.getInstance());
window["bb"].error = AppLog_1.default.getInstance().error.bind(AppLog_1.default.getInstance());
var SceneComponent_1 = require("./view/base/SceneComponent");
window["bb"].SceneComponent = SceneComponent_1.default;
var SceneCtrl_1 = require("./view/base/SceneCtrl");
window["bb"].SceneCtrl = SceneCtrl_1.default;
var BaseComponent_1 = require("./view/base/BaseComponent");
window["bb"].BaseComponent = BaseComponent_1.default;
var ViewCtrl_1 = require("./view/base/ViewCtrl");
window["bb"].ViewCtrl = ViewCtrl_1.default;
var UIBind_1 = require("./loader/UIBind");
window["bb"].UIBind = UIBind_1.default.getInstance();
var UILoader_1 = require("./loader/UILoader");
window["bb"].UILoader = UILoader_1.default.getInstance();
var Localization_1 = require("./Localization");
window["bb"].Localization = Localization_1.default.getInstance();
window["bb"]._T = Localization_1.default.getInstance().get.bind(Localization_1.default.getInstance());
var EventManager_1 = require("./event/EventManager");
window["bb"].EventManager = EventManager_1.default.getInstance();
var SceneManager_1 = require("./scene/SceneManager");
window["bb"].SceneManager = SceneManager_1.default.getInstance();
var ViewManager_1 = require("./view/ViewManager");
window["bb"].ViewManager = ViewManager_1.default.getInstance();
var AudioManager_1 = require("./audio/AudioManager");
window["bb"].AudioManager = AudioManager_1.default.getInstance();

cc._RF.pop();