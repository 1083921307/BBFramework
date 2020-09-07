
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/App.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxBcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBRWxCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7QUFFM0IsdUNBQWtDO0FBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQVMsQ0FBQyxHQUFHLEdBQUssZ0JBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztBQUNqRixNQUFNLENBQUMsSUFBSSxDQUFTLENBQUMsSUFBSSxHQUFJLGdCQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDbEYsTUFBTSxDQUFDLElBQUksQ0FBUyxDQUFDLElBQUksR0FBSSxnQkFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0FBQ2xGLE1BQU0sQ0FBQyxJQUFJLENBQVMsQ0FBQyxLQUFLLEdBQUcsZ0JBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGdCQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztBQUNuRixNQUFNLENBQUMsSUFBSSxDQUFTLENBQUMsS0FBSyxHQUFHLGdCQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxnQkFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDbkYsTUFBTSxDQUFDLElBQUksQ0FBUyxDQUFDLElBQUksR0FBSSxnQkFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0FBQ2xGLE1BQU0sQ0FBQyxJQUFJLENBQVMsQ0FBQyxLQUFLLEdBQUcsZ0JBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGdCQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztBQUdwRiw2REFBdUQ7QUFDdEQsTUFBTSxDQUFDLElBQUksQ0FBUyxDQUFDLGNBQWMsR0FBRyx3QkFBYyxDQUFDO0FBRXRELG1EQUE2QztBQUM1QyxNQUFNLENBQUMsSUFBSSxDQUFTLENBQUMsU0FBUyxHQUFHLG1CQUFTLENBQUM7QUFFNUMsMkRBQXFEO0FBQ3BELE1BQU0sQ0FBQyxJQUFJLENBQVMsQ0FBQyxhQUFhLEdBQUcsdUJBQWEsQ0FBQztBQUVwRCxpREFBMkM7QUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBUyxDQUFDLFFBQVEsR0FBRyxrQkFBUSxDQUFDO0FBRTFDLDBDQUFvQztBQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFTLENBQUMsTUFBTSxHQUFHLGdCQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7QUFFcEQsOENBQXlDO0FBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQVMsQ0FBQyxRQUFRLEdBQUcsa0JBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUV4RCwrQ0FBMEM7QUFDekMsTUFBTSxDQUFDLElBQUksQ0FBUyxDQUFDLFlBQVksR0FBRyxzQkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQy9ELE1BQU0sQ0FBQyxJQUFJLENBQVMsQ0FBQyxFQUFFLEdBQUcsc0JBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLHNCQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztBQUUzRixxREFBK0M7QUFDOUMsTUFBTSxDQUFDLElBQUksQ0FBUyxDQUFDLFlBQVksR0FBRyxzQkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBRWhFLHFEQUErQztBQUM5QyxNQUFNLENBQUMsSUFBSSxDQUFTLENBQUMsWUFBWSxHQUFHLHNCQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7QUFFaEUsa0RBQTZDO0FBQzVDLE1BQU0sQ0FBQyxJQUFJLENBQVMsQ0FBQyxXQUFXLEdBQUcscUJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUU5RCxxREFBZ0Q7QUFDL0MsTUFBTSxDQUFDLElBQUksQ0FBUyxDQUFDLFlBQVksR0FBRyxzQkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93W1wiYmJcIl0gPSB7fTtcclxuXHJcbmNvbnNvbGUubG9nKFwiaGVsbG8gd29ybGRcIik7XHJcblxyXG5pbXBvcnQgQXBwTG9nIGZyb20gJy4vbG9nL0FwcExvZyc7XHJcbih3aW5kb3dbXCJiYlwiXSBhcyBhbnkpLmxvZyAgID0gQXBwTG9nLmdldEluc3RhbmNlKCkubG9nLmJpbmQoQXBwTG9nLmdldEluc3RhbmNlKCkpO1xyXG4od2luZG93W1wiYmJcIl0gYXMgYW55KS5sb2cyICA9IEFwcExvZy5nZXRJbnN0YW5jZSgpLmxvZzIuYmluZChBcHBMb2cuZ2V0SW5zdGFuY2UoKSk7XHJcbih3aW5kb3dbXCJiYlwiXSBhcyBhbnkpLmluZm8gID0gQXBwTG9nLmdldEluc3RhbmNlKCkuaW5mby5iaW5kKEFwcExvZy5nZXRJbnN0YW5jZSgpKTtcclxuKHdpbmRvd1tcImJiXCJdIGFzIGFueSkuaW5mbzIgPSBBcHBMb2cuZ2V0SW5zdGFuY2UoKS5pbmZvMi5iaW5kKEFwcExvZy5nZXRJbnN0YW5jZSgpKTtcclxuKHdpbmRvd1tcImJiXCJdIGFzIGFueSkuaW5mbzMgPSBBcHBMb2cuZ2V0SW5zdGFuY2UoKS5pbmZvMy5iaW5kKEFwcExvZy5nZXRJbnN0YW5jZSgpKTtcclxuKHdpbmRvd1tcImJiXCJdIGFzIGFueSkud2FybiAgPSBBcHBMb2cuZ2V0SW5zdGFuY2UoKS53YXJuLmJpbmQoQXBwTG9nLmdldEluc3RhbmNlKCkpO1xyXG4od2luZG93W1wiYmJcIl0gYXMgYW55KS5lcnJvciA9IEFwcExvZy5nZXRJbnN0YW5jZSgpLmVycm9yLmJpbmQoQXBwTG9nLmdldEluc3RhbmNlKCkpO1xyXG5cclxuXHJcbmltcG9ydCBTY2VuZUNvbXBvbmVudCBmcm9tICcuL3ZpZXcvYmFzZS9TY2VuZUNvbXBvbmVudCdcclxuKHdpbmRvd1tcImJiXCJdIGFzIGFueSkuU2NlbmVDb21wb25lbnQgPSBTY2VuZUNvbXBvbmVudDtcclxuXHJcbmltcG9ydCBTY2VuZUN0cmwgZnJvbSAnLi92aWV3L2Jhc2UvU2NlbmVDdHJsJ1xyXG4od2luZG93W1wiYmJcIl0gYXMgYW55KS5TY2VuZUN0cmwgPSBTY2VuZUN0cmw7XHJcblxyXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL3ZpZXcvYmFzZS9CYXNlQ29tcG9uZW50J1xyXG4od2luZG93W1wiYmJcIl0gYXMgYW55KS5CYXNlQ29tcG9uZW50ID0gQmFzZUNvbXBvbmVudDtcclxuXHJcbmltcG9ydCBWaWV3Q3RybCBmcm9tICcuL3ZpZXcvYmFzZS9WaWV3Q3RybCdcclxuKHdpbmRvd1tcImJiXCJdIGFzIGFueSkuVmlld0N0cmwgPSBWaWV3Q3RybDtcclxuXHJcbmltcG9ydCBVSUJpbmQgZnJvbSAnLi9sb2FkZXIvVUlCaW5kJ1xyXG4od2luZG93W1wiYmJcIl0gYXMgYW55KS5VSUJpbmQgPSBVSUJpbmQuZ2V0SW5zdGFuY2UoKTtcclxuXHJcbmltcG9ydCBVSUxvYWRlciBmcm9tICcuL2xvYWRlci9VSUxvYWRlcic7XHJcbih3aW5kb3dbXCJiYlwiXSBhcyBhbnkpLlVJTG9hZGVyID0gVUlMb2FkZXIuZ2V0SW5zdGFuY2UoKTtcclxuXHJcbmltcG9ydCBMb2NhbGl6YXRpb24gZnJvbSAnLi9Mb2NhbGl6YXRpb24nO1xyXG4od2luZG93W1wiYmJcIl0gYXMgYW55KS5Mb2NhbGl6YXRpb24gPSBMb2NhbGl6YXRpb24uZ2V0SW5zdGFuY2UoKTtcclxuKHdpbmRvd1tcImJiXCJdIGFzIGFueSkuX1QgPSBMb2NhbGl6YXRpb24uZ2V0SW5zdGFuY2UoKS5nZXQuYmluZChMb2NhbGl6YXRpb24uZ2V0SW5zdGFuY2UoKSk7XHJcblxyXG5pbXBvcnQgRXZlbnRNYW5hZ2VyIGZyb20gJy4vZXZlbnQvRXZlbnRNYW5hZ2VyJ1xyXG4od2luZG93W1wiYmJcIl0gYXMgYW55KS5FdmVudE1hbmFnZXIgPSBFdmVudE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcclxuXHJcbmltcG9ydCBTY2VuZU1hbmFnZXIgZnJvbSAnLi9zY2VuZS9TY2VuZU1hbmFnZXInXHJcbih3aW5kb3dbXCJiYlwiXSBhcyBhbnkpLlNjZW5lTWFuYWdlciA9IFNjZW5lTWFuYWdlci5nZXRJbnN0YW5jZSgpO1xyXG5cclxuaW1wb3J0IFZpZXdNYW5hZ2VyIGZyb20gJy4vdmlldy9WaWV3TWFuYWdlcic7XHJcbih3aW5kb3dbXCJiYlwiXSBhcyBhbnkpLlZpZXdNYW5hZ2VyID0gVmlld01hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcclxuXHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSAnLi9hdWRpby9BdWRpb01hbmFnZXInO1xyXG4od2luZG93W1wiYmJcIl0gYXMgYW55KS5BdWRpb01hbmFnZXIgPSBBdWRpb01hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcclxuIl19