
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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/log/AppLog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4aae5tWGBZGFb9JrNs91XCf', 'AppLog');
// framework/log/AppLog.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogHelper = /** @class */ (function () {
    function LogHelper() {
    }
    // 普通输出
    LogHelper.log = function (msg) {
        if (bb.logEnable === false) {
            return;
        }
        if (bb.logLevel >= bb.LOG.NOMAL) {
            LogHelper.pushCache("#FFFFFF" + LogHelper.getDateString() + " " + cc.js.formatStr.apply(cc, arguments) + " " + LogHelper.stack(2));
        }
        cc.log(LogHelper.getDateString(), LogHelper.stack(2), cc.js.formatStr.apply(cc, arguments));
    };
    LogHelper.info = function (msg) {
        if (bb.logEnable === false) {
            return;
        }
        if (bb.logLevel >= bb.LOG.INFO) {
            LogHelper.pushCache("#00CD00" + LogHelper.getDateString() + " " + cc.js.formatStr.apply(cc, arguments) + " " + LogHelper.stack(2));
        }
        cc.log("%c%s%s:" + cc.js.formatStr.apply(cc, arguments), "color:#00CD00;", LogHelper.getDateString(), LogHelper.stack(2));
    };
    // 输出 警告
    LogHelper.logW = function (msg) {
        if (bb.logEnable === false) {
            return;
        }
        if (bb.logLevel >= bb.LOG.WARIN) {
            LogHelper.pushCache("#ee7700" + LogHelper.getDateString() + " " + cc.js.formatStr.apply(cc, arguments) + " " + LogHelper.stack(2));
        }
        cc.log("%c%s%s:" + cc.js.formatStr.apply(cc, arguments), "color:#ee7700;", LogHelper.getDateString(), LogHelper.stack(2));
    };
    // 输出 错误
    LogHelper.logE = function (msg) {
        if (bb.logEnable === false) {
            return;
        }
        if (bb.logLevel >= bb.LOG.ERROR) {
            LogHelper.pushCache("#FF0000" + LogHelper.getDateString() + " " + cc.js.formatStr.apply(cc, arguments) + " " + LogHelper.stack(2));
        }
        cc.log("%c%s%s:" + cc.js.formatStr.apply(cc, arguments), "color:red", LogHelper.getDateString(), LogHelper.stack(2));
    };
    LogHelper.pushCache = function (msg) {
        bb.logCache.splice(0, 0, msg);
        if (bb.logCache.length === 400) {
            bb.logCache.splice(399, 1);
        }
    };
    LogHelper.getDateString = function () {
        var d = new Date();
        var str = d.getHours() + "";
        var timeStr = "";
        timeStr += (str.length === 1 ? ("0" + str) : str) + ":";
        str = d.getMinutes() + "";
        timeStr += (str.length === 1 ? ("0" + str) : str) + ":";
        str = d.getSeconds() + "";
        timeStr += (str.length === 1 ? ("0" + str) : str) + ".";
        str = d.getMilliseconds() + "";
        if (str.length === 1)
            str = "00" + str;
        if (str.length === 2)
            str = "0" + str;
        timeStr += str;
        timeStr = '[' + timeStr + ']';
        return timeStr;
    };
    LogHelper.printStack = function () {
        var e = new Error();
        var lines = e.stack.split('\n');
        lines.shift();
        lines.forEach(function (line) {
            cc.log('line:', line);
        });
    };
    LogHelper.stack = function (index) {
        var e = new Error();
        var lines = e.stack.split("\n");
        lines.shift();
        var result = [];
        lines.forEach(function (line) {
            var _a;
            line = line.substring(7);
            var lineBreak = line.split(" ");
            if (lineBreak.length < 2) {
                result.push(lineBreak[0]);
            }
            else {
                result.push((_a = {}, _a[lineBreak[0]] = lineBreak[1], _a));
            }
        });
        var list = [];
        if (index <= result.length - 1) {
            for (var a in result[index]) {
                list.push(a);
            }
        }
        if (list.length > 0) {
            var splitList = list[0].split(".");
            if (splitList.length >= 2) {
                return ("[" + splitList[0] + ".js->" + splitList[1] + "]");
            }
        }
        return "";
    };
    return LogHelper;
}());
exports.default = LogHelper;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxsb2dcXEFwcExvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0lBQUE7SUErR0EsQ0FBQztJQTlHRyxPQUFPO0lBQ0EsYUFBRyxHQUFWLFVBQVcsR0FBVztRQUNsQixJQUFJLEVBQUUsQ0FBQyxTQUFTLEtBQUssS0FBSyxFQUFFO1lBQ3hCLE9BQU87U0FDVjtRQUNELElBQUksRUFBRSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRTtZQUM3QixTQUFTLENBQUMsU0FBUyxDQUFDLFlBQVUsU0FBUyxDQUFDLGFBQWEsRUFBRSxTQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLFNBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUcsQ0FBQyxDQUFDO1NBQzVIO1FBQ0QsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDaEcsQ0FBQztJQUdNLGNBQUksR0FBWCxVQUFZLEdBQUc7UUFDWCxJQUFJLEVBQUUsQ0FBQyxTQUFTLEtBQUssS0FBSyxFQUFFO1lBQ3hCLE9BQU87U0FDVjtRQUNELElBQUksRUFBRSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtZQUM1QixTQUFTLENBQUMsU0FBUyxDQUFDLFlBQVUsU0FBUyxDQUFDLGFBQWEsRUFBRSxTQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLFNBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUcs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LENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2FBQzlEO1NBQ0o7UUFFRCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFDTCxnQkFBQztBQUFELENBL0dBLEFBK0dDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nSGVscGVyIHtcclxuICAgIC8vIOaZrumAmui+k+WHulxyXG4gICAgc3RhdGljIGxvZyhtc2c6IHN0cmluZykge1xyXG4gICAgICAgIGlmIChiYi5sb2dFbmFibGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJiLmxvZ0xldmVsID49IGJiLkxPRy5OT01BTCkge1xyXG4gICAgICAgICAgICBMb2dIZWxwZXIucHVzaENhY2hlKGAjRkZGRkZGJHtMb2dIZWxwZXIuZ2V0RGF0ZVN0cmluZygpfSAke2NjLmpzLmZvcm1hdFN0ci5hcHBseShjYywgYXJndW1lbnRzKX0gJHtMb2dIZWxwZXIuc3RhY2soMil9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmxvZyhMb2dIZWxwZXIuZ2V0RGF0ZVN0cmluZygpLCBMb2dIZWxwZXIuc3RhY2soMiksIGNjLmpzLmZvcm1hdFN0ci5hcHBseShjYywgYXJndW1lbnRzKSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyBpbmZvKG1zZykge1xyXG4gICAgICAgIGlmIChiYi5sb2dFbmFibGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJiLmxvZ0xldmVsID49IGJiLkxPRy5JTkZPKSB7XHJcbiAgICAgICAgICAgIExvZ0hlbHBlci5wdXNoQ2FjaGUoYCMwMENEMDAke0xvZ0hlbHBlci5nZXREYXRlU3RyaW5nKCl9ICR7Y2MuanMuZm9ybWF0U3RyLmFwcGx5KGNjLCBhcmd1bWVudHMpfSAke0xvZ0hlbHBlci5zdGFjaygyKX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MubG9nKFwiJWMlcyVzOlwiICsgY2MuanMuZm9ybWF0U3RyLmFwcGx5KGNjLCBhcmd1bWVudHMpLCBcImNvbG9yOiMwMENEMDA7XCIsIExvZ0hlbHBlci5nZXREYXRlU3RyaW5nKCksIExvZ0hlbHBlci5zdGFjaygyKSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIOi+k+WHuiDorablkYpcclxuICAgIHN0YXRpYyBsb2dXKG1zZzogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKGJiLmxvZ0VuYWJsZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYmIubG9nTGV2ZWwgPj0gYmIuTE9HLldBUklOKSB7XHJcbiAgICAgICAgICAgIExvZ0hlbHBlci5wdXNoQ2FjaGUoYCNlZTc3MDAke0xvZ0hlbHBlci5nZXREYXRlU3RyaW5nKCl9ICR7Y2MuanMuZm9ybWF0U3RyLmFwcGx5KGNjLCBhcmd1bWVudHMpfSAke0xvZ0hlbHBlci5zdGFjaygyKX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MubG9nKFwiJWMlcyVzOlwiICsgY2MuanMuZm9ybWF0U3RyLmFwcGx5KGNjLCBhcmd1bWVudHMpLCBcImNvbG9yOiNlZTc3MDA7XCIsIExvZ0hlbHBlci5nZXREYXRlU3RyaW5nKCksIExvZ0hlbHBlci5zdGFjaygyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6L6T5Ye6IOmUmeivr1xyXG4gICAgc3RhdGljIGxvZ0UobXNnOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoYmIubG9nRW5hYmxlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChiYi5sb2dMZXZlbCA+PSBiYi5MT0cuRVJST1IpIHtcclxuICAgICAgICAgICAgTG9nSGVscGVyLnB1c2hDYWNoZShgI0ZGMDAwMCR7TG9nSGVscGVyLmdldERhdGVTdHJpbmcoKX0gJHtjYy5qcy5mb3JtYXRTdHIuYXBwbHkoY2MsIGFyZ3VtZW50cyl9ICR7TG9nSGVscGVyLnN0YWNrKDIpfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5sb2coXCIlYyVzJXM6XCIgKyBjYy5qcy5mb3JtYXRTdHIuYXBwbHkoY2MsIGFyZ3VtZW50cyksIFwiY29sb3I6cmVkXCIsIExvZ0hlbHBlci5nZXREYXRlU3RyaW5nKCksIExvZ0hlbHBlci5zdGFjaygyKSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyBwdXNoQ2FjaGUobXNnKSB7XHJcbiAgICAgICAgYmIubG9nQ2FjaGUuc3BsaWNlKDAsIDAsIG1zZyk7XHJcbiAgICAgICAgaWYgKGJiLmxvZ0NhY2hlLmxlbmd0aCA9PT0gNDAwKSB7XHJcbiAgICAgICAgICAgIGJiLmxvZ0NhY2hlLnNwbGljZSgzOTksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0RGF0ZVN0cmluZygpIHtcclxuICAgICAgICBsZXQgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgbGV0IHN0ciA9IGQuZ2V0SG91cnMoKSArIFwiXCI7XHJcbiAgICAgICAgbGV0IHRpbWVTdHIgPSBcIlwiO1xyXG4gICAgICAgIHRpbWVTdHIgKz0gKHN0ci5sZW5ndGggPT09IDEgPyAoXCIwXCIgKyBzdHIpIDogc3RyKSArIFwiOlwiO1xyXG4gICAgICAgIHN0ciA9IGQuZ2V0TWludXRlcygpICsgXCJcIjtcclxuICAgICAgICB0aW1lU3RyICs9IChzdHIubGVuZ3RoID09PSAxID8gKFwiMFwiICsgc3RyKSA6IHN0cikgKyBcIjpcIjtcclxuICAgICAgICBzdHIgPSBkLmdldFNlY29uZHMoKSArIFwiXCI7XHJcbiAgICAgICAgdGltZVN0ciArPSAoc3RyLmxlbmd0aCA9PT0gMSA/IChcIjBcIiArIHN0cikgOiBzdHIpICsgXCIuXCI7XHJcbiAgICAgICAgc3RyID0gZC5nZXRNaWxsaXNlY29uZHMoKSArIFwiXCI7XHJcbiAgICAgICAgaWYgKHN0ci5sZW5ndGggPT09IDEpIHN0ciA9IFwiMDBcIiArIHN0cjtcclxuICAgICAgICBpZiAoc3RyLmxlbmd0aCA9PT0gMikgc3RyID0gXCIwXCIgKyBzdHI7XHJcbiAgICAgICAgdGltZVN0ciArPSBzdHI7XHJcbiAgICAgICAgdGltZVN0ciA9ICdbJyArIHRpbWVTdHIgKyAnXSc7XHJcbiAgICAgICAgcmV0dXJuIHRpbWVTdHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBwcmludFN0YWNrKCkge1xyXG4gICAgICAgIGxldCBlID0gbmV3IEVycm9yKCk7XHJcbiAgICAgICAgbGV0IGxpbmVzID0gZS5zdGFjay5zcGxpdCgnXFxuJyk7XHJcbiAgICAgICAgbGluZXMuc2hpZnQoKTtcclxuICAgICAgICBsaW5lcy5mb3JFYWNoKChsaW5lKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmxvZygnbGluZTonLCBsaW5lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN0YWNrKGluZGV4KSB7XHJcbiAgICAgICAgbGV0IGUgPSBuZXcgRXJyb3IoKTtcclxuICAgICAgICBsZXQgbGluZXMgPSBlLnN0YWNrLnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgICAgIGxpbmVzLnNoaWZ0KCk7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGxpbmVzLmZvckVhY2goKGxpbmUpID0+IHtcclxuICAgICAgICAgICAgbGluZSA9IGxpbmUuc3Vic3RyaW5nKDcpO1xyXG4gICAgICAgICAgICBsZXQgbGluZUJyZWFrID0gbGluZS5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgICAgIGlmIChsaW5lQnJlYWsubGVuZ3RoIDwgMikge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobGluZUJyZWFrWzBdKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHsgW2xpbmVCcmVha1swXV06IGxpbmVCcmVha1sxXSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgICAgIGlmIChpbmRleCA8PSByZXN1bHQubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBhIGluIHJlc3VsdFtpbmRleF0pIHtcclxuICAgICAgICAgICAgICAgIGxpc3QucHVzaChhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgc3BsaXRMaXN0ID0gbGlzdFswXS5zcGxpdChcIi5cIik7XHJcbiAgICAgICAgICAgIGlmIChzcGxpdExpc3QubGVuZ3RoID49IDIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXCJbXCIgKyBzcGxpdExpc3RbMF0gKyBcIi5qcy0+XCIgKyBzcGxpdExpc3RbMV0gKyBcIl1cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/view/base/SceneComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0cf6flw9wNM+amXjXvMUJxo', 'SceneComponent');
// framework/view/base/SceneComponent.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SceneComponent = /** @class */ (function (_super) {
    __extends(SceneComponent, _super);
    function SceneComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sceneCtrl = null;
        return _this;
    }
    SceneComponent.prototype.initBind = function () {
        bb.UIBind.bindComponent(this);
    };
    SceneComponent.prototype.onEnter = function () {
    };
    SceneComponent.prototype.onExit = function () {
    };
    SceneComponent = __decorate([
        ccclass
    ], SceneComponent);
    return SceneComponent;
}(cc.Component));
exports.default = SceneComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx2aWV3XFxiYXNlXFxTY2VuZUNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQWNDO1FBYkcsZUFBUyxHQUFpQixJQUFJLENBQUM7O0lBYW5DLENBQUM7SUFYRyxpQ0FBUSxHQUFSO1FBQ0ksRUFBRSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELGdDQUFPLEdBQVA7SUFFQSxDQUFDO0lBRUQsK0JBQU0sR0FBTjtJQUVBLENBQUM7SUFiZ0IsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQWNsQztJQUFELHFCQUFDO0NBZEQsQUFjQyxDQWQyQyxFQUFFLENBQUMsU0FBUyxHQWN2RDtrQkFkb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lQ29tcG9uZW50IGV4dGVuZHMgY2MuQ29tcG9uZW50e1xyXG4gICAgc2NlbmVDdHJsOiBiYi5TY2VuZUN0cmwgPSBudWxsO1xyXG5cclxuICAgIGluaXRCaW5kKCkge1xyXG4gICAgICAgIGJiLlVJQmluZC5iaW5kQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW50ZXIoKSA6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkV4aXQoKSA6IHZvaWQge1xyXG5cclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/test_3d/test_3d_scene1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3f3a8jT73pCXbgPBzaAYcul', 'test_3d_scene1');
// script/test_3d/test_3d_scene1.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var test_3d_scene1 = /** @class */ (function (_super) {
    __extends(test_3d_scene1, _super);
    function test_3d_scene1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    test_3d_scene1 = __decorate([
        ccclass
    ], test_3d_scene1);
    return test_3d_scene1;
}(cc.Component));
exports.default = test_3d_scene1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0ZXN0XzNkXFx0ZXN0XzNkX3NjZW5lMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUE0QyxrQ0FBWTtJQUF4RDs7SUE4QkEsQ0FBQztJQTlCb0IsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQThCbEM7SUFBRCxxQkFBQztDQTlCRCxBQThCQyxDQTlCMkMsRUFBRSxDQUFDLFNBQVMsR0E4QnZEO2tCQTlCb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB0ZXN0XzNkX3NjZW5lMSBleHRlbmRzIGNjLkNvbXBvbmVudHtcclxuICAgIC8qKiBcclxuICAgICAqICAyLjEuMCBDYW1lcmE6IOaRhOWDj+aculxyXG4gICAgICogIEBwYXJhbSB7TnVtYmVyfSB6b29tUmF0aW8gIOaRhOWDj+acuue8qeaUvuavlOeOh1xyXG4gICAgICogIEBwYXJhbSB7Q29sb3J9IGJhY2tncm91bmRDb2xvciAg5pGE5YOP5py655So5LqO5riF6Zmk5bGP5bmV55qE6IOM5pmv6Imy44CCXHJcbiAgICAgKiAgQHBhcmFtIHtOdW1iZXJ9IGRlcHRoICDmkYTlg4/mnLrmt7HluqbvvIznlKjkuo7lhrPlrprmkYTlg4/mnLrnmoTmuLLmn5Ppobrluo9cclxuICAgICAqICBAcGFyYW0ge051bWJlcn0gY3VsbGluZ01hc2sgIOWGs+WumuaRhOWDj+acuuS8mua4suafk+WcuuaZr+eahOWTquS4gOmDqOWIhuOAglxyXG4gICAgICogIEBwYXJhbSB7Q2FtZXJhLkNsZWFyRmxhZ3N9IGNsZWFyRmxhZ3MgIOWGs+WumuaRhOWDj+acuua4suafk+aXtuS8mua4hemZpOWTquS6m+eKtuaAgeOAglxyXG4gICAgICogIEBwYXJhbSB7TnVtYmVyfSBuZWFyQ2xpcCDmkYTlg4/mnLrnmoTov5Hliaroo4HpnaLjgIJcclxuICAgICAqICBAcGFyYW0ge051bWJlcn0gZmFyQ2xpcCAg5pGE5YOP5py655qE6L+c5Ymq6KOB6Z2i44CCXHJcbiAgICAgKiAgQHBhcmFtIHtSZWN0fSByZWN0ICDlhrPlrprmkYTlg4/mnLrnu5jliLblnKjlsY/luZXkuIrlk6rkuKrkvY3nva7vvIzlgLzkuLogMC0x44CCXHJcbiAgICAgKiAgQHBhcmFtIHtCb29sZWFufSBvcnRobyAg6K6+572u5pGE5YOP5py655qE5oqV5b2x5qih5byP5piv5q2j5Lqk6L+Y5piv6YCP6KeG5qih5byP44CCXHJcbiAgICAgKiAgQHBhcmFtIHtOdW1iZXJ9IG9ydGhvU2l6ZSAg5pGE5YOP5py65Zyo5q2j5Lqk5oqV5b2x5qih5byP5LiL55qE6KeG56qX5aSn5bCP44CCXHJcbiAgICAgKiAgQHBhcmFtIHtOdW1iZXJ9IGZvdiAg5Yaz5a6a5pGE5YOP5py66KeG6KeS55qE5a695bqm77yM5b2T5pGE5YOP5py65aSE5LqO6YCP6KeG5oqV5b2x5qih5byP5LiL6L+Z5Liq5bGe5oCn5omN5Lya55Sf5pWI44CCXHJcbiAgICAgKiAgQHBhcmFtIHtSZW5kZXJUZXh0dXJlfSB0YXJnZXRUZXh0dXJlICDmkYTlg4/mnLrmuLLmn5PnmoTnm67moIcgUmVuZGVyVGV4dHVyZeOAglxyXG4gICAgICogIEBwYXJhbSB7Q2FtZXJhfSBtYWluIOesrOS4gOS4quiiq+a/gOa0u+eahOaRhOWDj+acuuOAglxyXG4gICAgICogIEBwYXJhbSB7W0NhbWVyYV19IGNhbWVyYXMgIOa/gOa0u+eahOaJgOacieaRhOWDj+acuuOAglxyXG4gICAgICogIEBmdW5jdGlvbiBmaW5kQ2FtZXJhIOiOt+WPluiKgueCueaJgOWcqOeahOesrOS4gOS4quaRhOWDj+acuuOAglxyXG4gICAgICogIEBmdW5jdGlvbiBnZXROb2RlVG9DYW1lcmFUcmFuc2Zvcm0g6L+U5Zue5LiA5Liq5bCG6IqC54K55Z2Q5qCH57O76L2s5o2i5Yiw5pGE5YOP5py65Z2Q5qCH57O75LiL55qE55+p6Zi1XHJcbiAgICAgKiAgQGZ1bmN0aW9uIGdldENhbWVyYVRvV29ybGRQb2ludCDlsIbkuIDkuKrmkYTlg4/mnLrlnZDmoIfns7vkuIvnmoTngrnovazmjaLliLDkuJbnlYzlnZDmoIfns7vkuIvjgIJcclxuICAgICAqICBAZnVuY3Rpb24gZ2V0V29ybGRUb0NhbWVyYVBvaW50IOWwhuS4gOS4quS4lueVjOWdkOagh+ezu+S4i+eahOeCuei9rOaNouWIsOaRhOWDj+acuuWdkOagh+ezu+S4i+OAglxyXG4gICAgICogIEBmdW5jdGlvbiBnZXRXb3JsZFRvQ2FtZXJhTWF0cml4IOiOt+WPluS4lueVjOWdkOagh+ezu+WIsOaRhOWDj+acuuWdkOagh+ezu+eahOefqemYtVxyXG4gICAgICogIEBmdW5jdGlvbiBnZXRSYXkg5LuO5bGP5bmV5Z2Q5qCH6I635Y+W5LiA5p2h5bCE57q/XHJcbiAgICAgKiAgQGZ1bmN0aW9uIGNvbnRhaW5zTm9kZSDmo4DmtYvoioLngrnmmK/lkKbooqvmraTmkYTlg4/mnLrlvbHlk41cclxuICAgICAqICBAZnVuY3Rpb24gcmVuZGVyIOaJi+WKqOa4suafk+aRhOWDj+acuuOAglxyXG4gICAgICovXHJcblxyXG4gIFxyXG5cclxuXHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_v2.0.x_cc.Toggle_event.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3b07fjE+w9Ls5P0uMb+3F/W', 'use_v2.0.x_cc.Toggle_event');
// migration/use_v2.0.x_cc.Toggle_event.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only compatible with projects prior to v2.1.0.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Toggle in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0 之前版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Toggle，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */
if (cc.Toggle) {
  // Whether the 'toggle' and 'checkEvents' events are fired when 'toggle.check() / toggle.uncheck()' is called in the code
  // 在代码中调用 'toggle.check() / toggle.uncheck()' 时是否触发 'toggle' 与 'checkEvents' 事件
  cc.Toggle._triggerEventInScript_check = true;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbWlncmF0aW9uXFx1c2VfdjIuMC54X2NjLlRvZ2dsZV9ldmVudC5qcyJdLCJuYW1lcyI6WyJjYyIsIlRvZ2dsZSIsIl90cmlnZ2VyRXZlbnRJblNjcmlwdF9jaGVjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUFZQSxJQUFJQSxFQUFFLENBQUNDLE1BQVAsRUFBZTtBQUNYO0FBQ0E7QUFDQUQsRUFBQUEsRUFBRSxDQUFDQyxNQUFILENBQVVDLDJCQUFWLEdBQXdDLElBQXhDO0FBQ0giLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFRoaXMgc2NyaXB0IGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IENvY29zIENyZWF0b3IgYW5kIGlzIG9ubHkgY29tcGF0aWJsZSB3aXRoIHByb2plY3RzIHByaW9yIHRvIHYyLjEuMC5cclxuICogWW91IGRvIG5vdCBuZWVkIHRvIG1hbnVhbGx5IGFkZCB0aGlzIHNjcmlwdCBpbiBhbnkgb3RoZXIgcHJvamVjdC5cclxuICogSWYgeW91IGRvbid0IHVzZSBjYy5Ub2dnbGUgaW4geW91ciBwcm9qZWN0LCB5b3UgY2FuIGRlbGV0ZSB0aGlzIHNjcmlwdCBkaXJlY3RseS5cclxuICogSWYgeW91ciBwcm9qZWN0IGlzIGhvc3RlZCBpbiBWQ1Mgc3VjaCBhcyBnaXQsIHN1Ym1pdCB0aGlzIHNjcmlwdCB0b2dldGhlci5cclxuICpcclxuICog5q2k6ISa5pys55SxIENvY29zIENyZWF0b3Ig6Ieq5Yqo55Sf5oiQ77yM5LuF55So5LqO5YW85a65IHYyLjEuMCDkuYvliY3niYjmnKznmoTlt6XnqIvvvIxcclxuICog5L2g5peg6ZyA5Zyo5Lu75L2V5YW25a6D6aG555uu5Lit5omL5Yqo5re75Yqg5q2k6ISa5pys44CCXHJcbiAqIOWmguaenOS9oOeahOmhueebruS4reayoeeUqOWIsCBUb2dnbGXvvIzlj6/nm7TmjqXliKDpmaTor6XohJrmnKzjgIJcclxuICog5aaC5p6c5L2g55qE6aG555uu5pyJ5omY566h5LqOIGdpdCDnrYnniYjmnKzlupPvvIzor7flsIbmraTohJrmnKzkuIDlubbkuIrkvKDjgIJcclxuICovXHJcblxyXG5pZiAoY2MuVG9nZ2xlKSB7XHJcbiAgICAvLyBXaGV0aGVyIHRoZSAndG9nZ2xlJyBhbmQgJ2NoZWNrRXZlbnRzJyBldmVudHMgYXJlIGZpcmVkIHdoZW4gJ3RvZ2dsZS5jaGVjaygpIC8gdG9nZ2xlLnVuY2hlY2soKScgaXMgY2FsbGVkIGluIHRoZSBjb2RlXHJcbiAgICAvLyDlnKjku6PnoIHkuK3osIPnlKggJ3RvZ2dsZS5jaGVjaygpIC8gdG9nZ2xlLnVuY2hlY2soKScg5pe25piv5ZCm6Kem5Y+RICd0b2dnbGUnIOS4jiAnY2hlY2tFdmVudHMnIOS6i+S7tlxyXG4gICAgY2MuVG9nZ2xlLl90cmlnZ2VyRXZlbnRJblNjcmlwdF9jaGVjayA9IHRydWU7XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/view/base/SceneCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9aa5bWoewVFnav9tx2Lokul', 'SceneCtrl');
// framework/view/base/SceneCtrl.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SceneCtrl = /** @class */ (function () {
    function SceneCtrl() {
        this.name = "";
        this.data = null;
        this.logicComponet = null;
    }
    return SceneCtrl;
}());
exports.default = SceneCtrl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx2aWV3XFxiYXNlXFxTY2VuZUN0cmwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtJQUFBO1FBQ0ksU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixTQUFJLEdBQVEsSUFBSSxDQUFDO1FBQ2pCLGtCQUFhLEdBQW1CLElBQUksQ0FBQztJQUN6QyxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUpBLEFBSUMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTY2VuZUNvbXBvbmVudCBmcm9tIFwiLi9TY2VuZUNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmVDdHJsIHtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBkYXRhOiBhbnkgPSBudWxsO1xyXG4gICAgbG9naWNDb21wb25ldDogU2NlbmVDb21wb25lbnQgPSBudWxsO1xyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Test.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2ea54L81gZA8ITXtvfccseD', 'Test');
// script/Test.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Test = /** @class */ (function (_super) {
    __extends(Test, _super);
    function Test() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isTouching = false;
        _this.graphics = null;
        _this.offY = 0;
        return _this;
    }
    Test.prototype.start = function () {
        // init logic
        var node = new cc.Node();
        this.graphics = node.addComponent(cc.Graphics);
        this.graphics.fillColor = cc.Color.RED;
        this.graphics.strokeColor = cc.Color.RED;
        this.graphics.lineWidth = 10;
        // this.graphics.lineJoi;
        // this.graphics.fill();
        this.graphics.moveTo(0, 0);
        this.node.addChild(node);
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    };
    Test.prototype.onTouchStart = function () {
        this.isTouching = true;
    };
    Test.prototype.onTouchMove = function () {
    };
    Test.prototype.onTouchEnd = function () {
        this.isTouching = false;
        this.graphics.fill();
        this.graphics.close();
        this.graphics.clear();
        this.offY = 0;
        this.graphics.moveTo(0, 0);
    };
    Test.prototype.update = function (dt) {
        if (this.isTouching) {
            this.offY += 5;
            this.graphics.lineTo(0, this.offY);
            this.graphics.stroke();
        }
    };
    Test = __decorate([
        ccclass
    ], Test);
    return Test;
}(cc.Component));
exports.default = Test;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBa0RDO1FBakRHLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGNBQVEsR0FBZ0IsSUFBSSxDQUFDO1FBRTdCLFVBQUksR0FBVyxDQUFDLENBQUM7O0lBOENyQixDQUFDO0lBN0NHLG9CQUFLLEdBQUw7UUFDSSxhQUFhO1FBRWIsSUFBSSxJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFFN0IseUJBQXlCO1FBQ3pCLHdCQUF3QjtRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELDJCQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBRUQsMEJBQVcsR0FBWDtJQUVBLENBQUM7SUFFRCx5QkFBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFHOUIsQ0FBQztJQUVELHFCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQzFCO0lBRUwsQ0FBQztJQWpEZ0IsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQWtEeEI7SUFBRCxXQUFDO0NBbERELEFBa0RDLENBbERpQyxFQUFFLENBQUMsU0FBUyxHQWtEN0M7a0JBbERvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgaXNUb3VjaGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgZ3JhcGhpY3M6IGNjLkdyYXBoaWNzID0gbnVsbDtcclxuXHJcbiAgICBvZmZZOiBudW1iZXIgPSAwO1xyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIGluaXQgbG9naWNcclxuXHJcbiAgICAgICAgbGV0IG5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MgPSBub2RlLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5maWxsQ29sb3IgPSBjYy5Db2xvci5SRUQ7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5zdHJva2VDb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVXaWR0aCA9IDEwO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmdyYXBoaWNzLmxpbmVKb2k7XHJcbiAgICAgICAgLy8gdGhpcy5ncmFwaGljcy5maWxsKCk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5tb3ZlVG8oMCwgMCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hTdGFydCgpIHtcclxuICAgICAgICB0aGlzLmlzVG91Y2hpbmcgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hNb3ZlKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoRW5kKCkge1xyXG4gICAgICAgIHRoaXMuaXNUb3VjaGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuZmlsbCgpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuY2xvc2UoKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5vZmZZID0gMDtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLm1vdmVUbygwLCAwKVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICggdGhpcy5pc1RvdWNoaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2ZmWSArPSA1O1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVUbygwLCB0aGlzLm9mZlkpO1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/view/ViewManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '99b71dkCQROtoqM1IniL334', 'ViewManager');
// framework/view/ViewManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 基于一个场景上的视图管理:
 * 1. (同步或者异步)显示一个 View
 * 2. (同步或者异步)显示一个 Item
 * 3. 回收一个视图节点
 */
var ViewManager = /** @class */ (function () {
    function ViewManager() {
        this.viewStack = null;
        this.viewStack = [];
    }
    ViewManager.getInstance = function () {
        if (ViewManager.singleInstance == null) {
            ViewManager.singleInstance = new ViewManager();
        }
        return ViewManager.singleInstance;
    };
    ViewManager.prototype.showView = function (name, prefab, data) {
        var viewCtrl = new bb.ViewCtrl();
        viewCtrl.node = cc.instantiate(prefab);
        viewCtrl.data = data;
        viewCtrl["_tag"] = "view";
        if (name) {
            viewCtrl.node.name = name;
        }
        cc.director.getScene().addChild(viewCtrl.node);
        var components = viewCtrl.node["_components"];
        if (components.length > 0) {
            viewCtrl.logicComponet = components[components.length - 1];
            viewCtrl.logicComponet["viewCtrl"] = viewCtrl;
            viewCtrl.logicComponet["initBind"]();
            viewCtrl.logicComponet["onEnter"]();
        }
        if (this.viewStack.length) {
            this.viewStack[this.viewStack.length - 1].hideView();
        }
        var key = cc.loader["_getReferenceKey"](prefab);
        viewCtrl["_referenceKey"] = key;
        this.viewStack.push(viewCtrl);
        bb.UILoader.retatinRes(key);
        bb.UILoader.retainNodeRes(viewCtrl.node);
        return viewCtrl;
    };
    ViewManager.prototype.showViewSync = function (pathStr, data, callback) {
        var _this = this;
        bb.UILoader.loadRes(pathStr, cc.Prefab, function (prefab) {
            var viewCtrl = _this.showView(prefab.name, prefab, data);
            if (callback) {
                callback(viewCtrl);
            }
        });
    };
    ViewManager.prototype.showSubView = function (name, prefab, data) {
        var viewCtrl = new bb.ViewCtrl();
        viewCtrl.node = cc.instantiate(prefab);
        viewCtrl.data = data;
        viewCtrl["_tag"] = "subView";
        if (name) {
            viewCtrl.node.name = name;
        }
        viewCtrl["parentViewCtrl"] = this.viewStack[this.viewStack.length - 1];
        this.viewStack[this.viewStack.length - 1].node.addChild(viewCtrl.node);
        var components = viewCtrl.node["_components"];
        if (components.length > 0) {
            viewCtrl.logicComponet = components[components.length - 1];
            viewCtrl.logicComponet["viewCtrl"] = viewCtrl;
            viewCtrl.logicComponet["initBind"]();
            viewCtrl.logicComponet["onEnter"]();
        }
        this.viewStack[this.viewStack.length - 1].addSubViewCtrl(viewCtrl);
        var key = cc.loader["_getReferenceKey"](prefab);
        viewCtrl["_referenceKey"] = key;
        bb.UILoader.retatinRes(key);
        bb.UILoader.retainNodeRes(viewCtrl.node);
        return viewCtrl;
    };
    ViewManager.prototype.showSubViewSync = function (pathStr, data, callback) {
        var _this = this;
        bb.UILoader.loadRes(pathStr, cc.Prefab, function (prefab) {
            var viewCtrl = _this.showSubView(prefab.name, prefab, data);
            if (callback) {
                callback(viewCtrl);
            }
        });
    };
    ViewManager.prototype.showItem = function (name, prefab, data, parent, parentViewCtrl) {
        var viewCtrl = new bb.ViewCtrl();
        viewCtrl.node = cc.instantiate(prefab);
        viewCtrl.data = data;
        viewCtrl["_tag"] = "item";
        if (name) {
            viewCtrl.node.name = name;
        }
        parent.addChild(viewCtrl.node);
        viewCtrl["parentViewCtrl"] = parentViewCtrl;
        var components = viewCtrl.node["_components"];
        if (components.length > 0) {
            viewCtrl.logicComponet = components[components.length - 1];
            viewCtrl.logicComponet["viewCtrl"] = viewCtrl;
            viewCtrl.logicComponet["initBind"]();
            viewCtrl.logicComponet["onEnter"]();
        }
        parentViewCtrl.addSubViewCtrl(viewCtrl);
        var key = cc.loader["_getReferenceKey"](prefab);
        viewCtrl["_referenceKey"] = key;
        bb.UILoader.retatinRes(key);
        bb.UILoader.retainNodeRes(viewCtrl.node);
        return viewCtrl;
    };
    ViewManager.prototype.showItemSync = function (pathStr, data, parent, parentViewCtrl, callback) {
        var _this = this;
        bb.UILoader.loadRes(pathStr, cc.Prefab, function (prefab) {
            var viewCtrl = _this.showItem(prefab.name, prefab, data, parent, parentViewCtrl);
            if (callback) {
                callback(viewCtrl);
            }
        });
    };
    ViewManager.prototype.popView = function (depth) {
        if (depth !== null) {
            if (this.viewStack.length <= depth) {
                cc.log("pop view depth error viewStack = " + this.viewStack.length + ", depth = " + depth);
                return;
            }
            var viewCtrls = this.viewStack.splice(this.viewStack.length - depth, depth);
            viewCtrls.forEach(function (viewCtrl) {
                viewCtrl.destroyNode();
            });
            this.viewStack[this.viewStack.length - 1].showView();
            return;
        }
        if (this.viewStack.length < 2) {
            return;
        }
        var viewCtrl = this.viewStack.pop();
        viewCtrl.destroyNode();
        this.viewStack[this.viewStack.length - 1].showView();
    };
    ViewManager.prototype.removeView = function (viewCtrl) {
        var deleteIdx = this.viewStack.indexOf(viewCtrl);
        if (deleteIdx >= 0) {
            this.viewStack.splice(deleteIdx, 1)[0];
        }
    };
    ViewManager.singleInstance = null;
    return ViewManager;
}());
exports.default = ViewManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx2aWV3XFxWaWV3TWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztHQUtHO0FBQ0g7SUFVSTtRQURBLGNBQVMsR0FBbUIsSUFBSSxDQUFDO1FBRTdCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFWTSx1QkFBVyxHQUFsQjtRQUNJLElBQUksV0FBVyxDQUFDLGNBQWMsSUFBSSxJQUFJLEVBQUU7WUFDcEMsV0FBVyxDQUFDLGNBQWMsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1NBQ2xEO1FBQ0QsT0FBTyxXQUFXLENBQUMsY0FBYyxDQUFDO0lBQ3RDLENBQUM7SUFRRCw4QkFBUSxHQUFSLFVBQVMsSUFBWSxFQUFHLE1BQWlCLEVBQUUsSUFBUztRQUNoRCxJQUFJLFFBQVEsR0FBRyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVqQyxRQUFRLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDckIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUMxQixJQUFJLElBQUksRUFBRTtZQUNOLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUM3QjtRQUVELEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUvQyxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzlDLElBQUksVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdkIsUUFBUSxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMs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LENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6RCxDQUFDO0lBRUQsZ0NBQVUsR0FBVixVQUFXLFFBQXFCO1FBQzdCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pELElBQUksU0FBUyxJQUFJLENBQUMsRUFBRTtZQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDMUM7SUFDSixDQUFDO0lBN0pNLDBCQUFjLEdBQWdCLElBQUksQ0FBQztJQThKOUMsa0JBQUM7Q0EvSkQsQUErSkMsSUFBQTtrQkEvSm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5Z+65LqO5LiA5Liq5Zy65pmv5LiK55qE6KeG5Zu+566h55CGOlxyXG4gKiAxLiAo5ZCM5q2l5oiW6ICF5byC5q2lKeaYvuekuuS4gOS4qiBWaWV3XHJcbiAqIDIuICjlkIzmraXmiJbogIXlvILmraUp5pi+56S65LiA5LiqIEl0ZW1cclxuICogMy4g5Zue5pS25LiA5Liq6KeG5Zu+6IqC54K5XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3TWFuYWdlciB7XHJcbiAgICBzdGF0aWMgc2luZ2xlSW5zdGFuY2U6IFZpZXdNYW5hZ2VyID0gbnVsbDtcclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBWaWV3TWFuYWdlciB7XHJcbiAgICAgICAgaWYgKFZpZXdNYW5hZ2VyLnNpbmdsZUluc3RhbmNlID09IG51bGwpIHtcclxuICAgICAgICAgICAgVmlld01hbmFnZXIuc2luZ2xlSW5zdGFuY2UgPSBuZXcgVmlld01hbmFnZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFZpZXdNYW5hZ2VyLnNpbmdsZUluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHZpZXdTdGFjazogYmIuVmlld0N0cmxbXSA9ICBudWxsO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy52aWV3U3RhY2sgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHNob3dWaWV3KG5hbWU6IHN0cmluZywgIHByZWZhYjogY2MuUHJlZmFiLCBkYXRhOiBhbnkpOiBiYi5WaWV3Q3RybCB7XHJcbiAgICAgICAgbGV0IHZpZXdDdHJsID0gbmV3IGJiLlZpZXdDdHJsKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmlld0N0cmwubm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgdmlld0N0cmwuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgdmlld0N0cmxbXCJfdGFnXCJdID0gXCJ2aWV3XCI7XHJcbiAgICAgICAgaWYgKG5hbWUpIHtcclxuICAgICAgICAgICAgdmlld0N0cmwubm9kZS5uYW1lID0gbmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuYWRkQ2hpbGQodmlld0N0cmwubm9kZSk7XHJcblxyXG4gICAgICAgIGxldCBjb21wb25lbnRzID0gdmlld0N0cmwubm9kZVtcIl9jb21wb25lbnRzXCJdO1xyXG4gICAgICAgIGlmIChjb21wb25lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdmlld0N0cmwubG9naWNDb21wb25ldCA9IGNvbXBvbmVudHNbY29tcG9uZW50cy5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgdmlld0N0cmwubG9naWNDb21wb25ldFtcInZpZXdDdHJsXCJdID0gdmlld0N0cmw7XHJcbiAgICAgICAgICAgIHZpZXdDdHJsLmxvZ2ljQ29tcG9uZXRbXCJpbml0QmluZFwiXSgpO1xyXG4gICAgICAgICAgICB2aWV3Q3RybC5sb2dpY0NvbXBvbmV0W1wib25FbnRlclwiXSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmlld1N0YWNrLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnZpZXdTdGFja1t0aGlzLnZpZXdTdGFjay5sZW5ndGggLSAxXS5oaWRlVmlldygpO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIGxldCBrZXkgPSBjYy5sb2FkZXJbXCJfZ2V0UmVmZXJlbmNlS2V5XCJdKHByZWZhYik7XHJcbiAgICAgICAgdmlld0N0cmxbXCJfcmVmZXJlbmNlS2V5XCJdID0ga2V5O1xyXG4gICAgICAgIHRoaXMudmlld1N0YWNrLnB1c2godmlld0N0cmwpO1xyXG4gICAgICAgIGJiLlVJTG9hZGVyLnJldGF0aW5SZXMoa2V5KTtcclxuICAgICAgICBiYi5VSUxvYWRlci5yZXRhaW5Ob2RlUmVzKHZpZXdDdHJsLm5vZGUpO1xyXG4gICAgICAgcmV0dXJuIHZpZXdDdHJsO1xyXG4gICAgfVxyXG5cclxuICAgXHJcbiAgICBzaG93Vmlld1N5bmMocGF0aFN0cjogc3RyaW5nLCBkYXRhOiBhbnksICBjYWxsYmFjaz86ICh2aWV3Q3RybDogYmIuVmlld0N0cmwpPT57fSkge1xyXG4gICAgICAgIGJiLlVJTG9hZGVyLmxvYWRSZXMocGF0aFN0ciwgY2MuUHJlZmFiLCAocHJlZmFiKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB2aWV3Q3RybCAgPSB0aGlzLnNob3dWaWV3KHByZWZhYi5uYW1lLCBwcmVmYWIsIGRhdGEpO1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHZpZXdDdHJsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzaG93U3ViVmlldyhuYW1lOiBzdHJpbmcsICBwcmVmYWI6IGNjLlByZWZhYiwgZGF0YTogYW55KTogIGJiLlZpZXdDdHJsIHtcclxuICAgICAgICBsZXQgdmlld0N0cmwgPSBuZXcgYmIuVmlld0N0cmwoKTtcclxuICAgICAgICB2aWV3Q3RybC5ub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICB2aWV3Q3RybC5kYXRhID0gZGF0YTtcclxuICAgICAgICB2aWV3Q3RybFtcIl90YWdcIl0gPSBcInN1YlZpZXdcIjtcclxuICAgICAgICBpZiAobmFtZSkge1xyXG4gICAgICAgICAgICB2aWV3Q3RybC5ub2RlLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgdmlld0N0cmxbXCJwYXJlbnRWaWV3Q3RybFwiXSA9ICAgdGhpcy52aWV3U3RhY2tbdGhpcy52aWV3U3RhY2subGVuZ3RoIC0gMV07XHJcbiAgICAgICAgdGhpcy52aWV3U3RhY2tbdGhpcy52aWV3U3RhY2subGVuZ3RoIC0gMV0ubm9kZS5hZGRDaGlsZCh2aWV3Q3RybC5ub2RlKTtcclxuICAgICAgICBsZXQgY29tcG9uZW50cyA9IHZpZXdDdHJsLm5vZGVbXCJfY29tcG9uZW50c1wiXTtcclxuICAgICAgICBpZiAoY29tcG9uZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHZpZXdDdHJsLmxvZ2ljQ29tcG9uZXQgPSBjb21wb25lbnRzW2NvbXBvbmVudHMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgIHZpZXdDdHJsLmxvZ2ljQ29tcG9uZXRbXCJ2aWV3Q3RybFwiXSA9IHZpZXdDdHJsO1xyXG4gICAgICAgICAgICB2aWV3Q3RybC5sb2dpY0NvbXBvbmV0W1wiaW5pdEJpbmRcIl0oKTtcclxuICAgICAgICAgICAgdmlld0N0cmwubG9naWNDb21wb25ldFtcIm9uRW50ZXJcIl0oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy52aWV3U3RhY2tbdGhpcy52aWV3U3RhY2subGVuZ3RoIC0gMV0uYWRkU3ViVmlld0N0cmwodmlld0N0cmwpO1xyXG4gICAgICAgIGxldCBrZXkgPSBjYy5sb2FkZXJbXCJfZ2V0UmVmZXJlbmNlS2V5XCJdKHByZWZhYik7XHJcbiAgICAgICAgdmlld0N0cmxbXCJfcmVmZXJlbmNlS2V5XCJdID0ga2V5O1xyXG4gICAgICAgIGJiLlVJTG9hZGVyLnJldGF0aW5SZXMoa2V5KTtcclxuICAgICAgICBiYi5VSUxvYWRlci5yZXRhaW5Ob2RlUmVzKHZpZXdDdHJsLm5vZGUpO1xyXG4gICAgICAgcmV0dXJuIHZpZXdDdHJsO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dTdWJWaWV3U3luYyhwYXRoU3RyOiBzdHJpbmcsIGRhdGE6IGFueSwgIGNhbGxiYWNrPzogKHZpZXdDdHJsOiBiYi5WaWV3Q3RybCk9Pnt9KSB7XHJcbiAgICAgICAgYmIuVUlMb2FkZXIubG9hZFJlcyhwYXRoU3RyLCBjYy5QcmVmYWIsIChwcmVmYWIpID0+IHtcclxuICAgICAgICAgICAgbGV0IHZpZXdDdHJsICA9IHRoaXMuc2hvd1N1YlZpZXcocHJlZmFiLm5hbWUsIHByZWZhYiwgZGF0YSk7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodmlld0N0cmwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNob3dJdGVtKG5hbWU6IHN0cmluZywgIHByZWZhYjogY2MuUHJlZmFiLCBkYXRhOiBhbnksIHBhcmVudDogY2MuTm9kZSwgcGFyZW50Vmlld0N0cmw6IGJiLlZpZXdDdHJsKSB7XHJcbiAgICAgICAgbGV0IHZpZXdDdHJsID0gbmV3IGJiLlZpZXdDdHJsKCk7XHJcbiAgICAgICAgdmlld0N0cmwubm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgdmlld0N0cmwuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgdmlld0N0cmxbXCJfdGFnXCJdID0gXCJpdGVtXCI7XHJcbiAgICAgICAgaWYgKG5hbWUpIHtcclxuICAgICAgICAgICAgdmlld0N0cmwubm9kZS5uYW1lID0gbmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyZW50LmFkZENoaWxkKHZpZXdDdHJsLm5vZGUpO1xyXG4gICAgICAgIHZpZXdDdHJsW1wicGFyZW50Vmlld0N0cmxcIl0gPSBwYXJlbnRWaWV3Q3RybDtcclxuICAgICAgICBsZXQgY29tcG9uZW50cyA9IHZpZXdDdHJsLm5vZGVbXCJfY29tcG9uZW50c1wiXTtcclxuICAgICAgICBpZiAoY29tcG9uZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHZpZXdDdHJsLmxvZ2ljQ29tcG9uZXQgPSBjb21wb25lbnRzW2NvbXBvbmVudHMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgIHZpZXdDdHJsLmxvZ2ljQ29tcG9uZXRbXCJ2aWV3Q3RybFwiXSA9IHZpZXdDdHJsO1xyXG4gICAgICAgICAgICB2aWV3Q3RybC5sb2dpY0NvbXBvbmV0W1wiaW5pdEJpbmRcIl0oKTtcclxuICAgICAgICAgICAgdmlld0N0cmwubG9naWNDb21wb25ldFtcIm9uRW50ZXJcIl0oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyZW50Vmlld0N0cmwuYWRkU3ViVmlld0N0cmwodmlld0N0cmwpO1xyXG5cclxuICAgICAgICBsZXQga2V5ID0gY2MubG9hZGVyW1wiX2dldFJlZmVyZW5jZUtleVwiXShwcmVmYWIpO1xyXG4gICAgICAgIHZpZXdDdHJsW1wiX3JlZmVyZW5jZUtleVwiXSA9IGtleTtcclxuICAgICAgICBiYi5VSUxvYWRlci5yZXRhdGluUmVzKGtleSk7XHJcbiAgICAgICAgYmIuVUlMb2FkZXIucmV0YWluTm9kZVJlcyh2aWV3Q3RybC5ub2RlKTtcclxuXHJcbiAgICAgICByZXR1cm4gdmlld0N0cmw7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0l0ZW1TeW5jKHBhdGhTdHI6IHN0cmluZywgZGF0YTogYW55LCAgcGFyZW50OiBjYy5Ob2RlLCBwYXJlbnRWaWV3Q3RybDogYmIuVmlld0N0cmwsIGNhbGxiYWNrPzogKHZpZXdDdHJsOiBiYi5WaWV3Q3RybCk9Pnt9KSB7XHJcbiAgICAgICAgYmIuVUlMb2FkZXIubG9hZFJlcyhwYXRoU3RyLCBjYy5QcmVmYWIsIChwcmVmYWIpID0+IHtcclxuICAgICAgICAgICAgbGV0IHZpZXdDdHJsICA9IHRoaXMuc2hvd0l0ZW0ocHJlZmFiLm5hbWUsIHByZWZhYiwgZGF0YSwgcGFyZW50LCBwYXJlbnRWaWV3Q3RybCk7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodmlld0N0cmwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcG9wVmlldyhkZXB0aD86IG51bWJlcikge1xyXG4gICAgICAgIGlmIChkZXB0aCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy52aWV3U3RhY2subGVuZ3RoIDw9IGRlcHRoKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coYHBvcCB2aWV3IGRlcHRoIGVycm9yIHZpZXdTdGFjayA9ICR7dGhpcy52aWV3U3RhY2subGVuZ3RofSwgZGVwdGggPSAke2RlcHRofWApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgdmlld0N0cmxzID0gdGhpcy52aWV3U3RhY2suc3BsaWNlKHRoaXMudmlld1N0YWNrLmxlbmd0aCAtIGRlcHRoLCBkZXB0aCk7XHJcbiAgICAgICAgICAgIHZpZXdDdHJscy5mb3JFYWNoKCh2aWV3Q3RybCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmlld0N0cmwuZGVzdHJveU5vZGUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy52aWV3U3RhY2tbdGhpcy52aWV3U3RhY2subGVuZ3RoIC0gMV0uc2hvd1ZpZXcoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmlld1N0YWNrLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdmlld0N0cmwgPSB0aGlzLnZpZXdTdGFjay5wb3AoKTtcclxuICAgICAgICB2aWV3Q3RybC5kZXN0cm95Tm9kZSgpO1xyXG4gICAgICAgIHRoaXMudmlld1N0YWNrW3RoaXMudmlld1N0YWNrLmxlbmd0aCAtIDFdLnNob3dWaWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlVmlldyh2aWV3Q3RybDogYmIuVmlld0N0cmwpIHtcclxuICAgICAgIGxldCBkZWxldGVJZHggPSB0aGlzLnZpZXdTdGFjay5pbmRleE9mKHZpZXdDdHJsKTtcclxuICAgICAgIGlmIChkZWxldGVJZHggPj0gMCkge1xyXG4gICAgICAgICAgIHRoaXMudmlld1N0YWNrLnNwbGljZShkZWxldGVJZHgsIDEpWzBdO1xyXG4gICAgICAgfVxyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Test2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ed616WOhoNMzLFdwOy5mM1Z', 'Test2');
// script/Test2.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Test2 = /** @class */ (function (_super) {
    __extends(Test2, _super);
    function Test2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.camera = null;
        _this.sprite = null;
        _this._canvas = null;
        _this.texture = null;
        return _this;
    }
    Test2.prototype.start = function () {
        var _this = this;
        // 对图片进行灰度处理
        this.sprite.setState(1);
        this.init();
        this.scheduleOnce(function () {
            _this.createSprite();
            var img = _this.initImage();
            _this.showSprite(img);
        }, 1);
    };
    Test2.prototype.init = function () {
        var texture = new cc.RenderTexture();
        var gl = cc.game["_renderContext"];
        texture.initWithSize(this.sprite.node.width, this.sprite.node.height, gl.STENCIL_INDEX8);
        this.camera.targetTexture = texture;
        this.camera.node.position = this.sprite.node.position;
        this.texture = texture;
    };
    Test2.prototype.initImage = function () {
        var dataURL = this._canvas.toDataURL('image/png');
        var img = document.createElement('img');
        img.src = dataURL;
        return img;
    };
    Test2.prototype.createSprite = function () {
        var width = this.texture.width;
        var height = this.texture.height;
        this.sprite.dstBlendFactor = cc.macro.ZERO;
        if (!this._canvas) {
            this._canvas = document.createElement('canvas');
            this._canvas.width = width;
            this._canvas.height = height;
        }
        else {
            this.clearCanvas();
        }
        var ctx = this._canvas.getContext('2d');
        this.camera.render();
        // 左上的为原点(一个像素存 4个 格子, 分别代表着 R G B A)
        var data = this.texture.readPixels();
        // write the render data
        var rowBytes = width * 4;
        for (var row = 0; row < height; row++) {
            var srow = height - 1 - row;
            // let srow =  row;
            /**
             * 1. 以指定的尺寸（以像素计）创建新的 ImageData 对象：
             * @param width ImageData 对象的宽度，以像素计。
             * @param height ImageData 对象的高度，以像素计。
             *
             * 2. 创建与指定的另一个 ImageData 对象尺寸相同的新 ImageData 对象（不会复制图像数据）：
             * @param imageData ImageData 对象
             */
            var imageData = ctx.createImageData(width, 1);
            // r  g  b a
            var start = srow * (width) * 4;
            for (var i = 0; i < rowBytes; i++) {
                imageData.data[i] = data[start + i];
            }
            for (var offset = 0; offset < imageData.width % 4; offset++) {
                var idx = offset * 4;
                if (imageData.data[idx] === 0 && imageData.data[idx + 1] === 0 && imageData.data[idx + 2] === 0 && imageData.data[idx + 3] === 255) {
                    imageData.data[idx] = 0;
                    imageData.data[idx + 1] = 0;
                    imageData.data[idx + 2] = 0;
                    imageData.data[idx + 3] = 255;
                }
                else {
                    imageData.data[idx] = 0;
                    imageData.data[idx + 1] = 0;
                    imageData.data[idx + 2] = 0;
                    imageData.data[idx + 3] = 0;
                }
            }
            /**
             * 将图像数据（从指定的 ImageData 对象）放回画布上
             * @param imageData 规定要放回画布的 ImageData 对象
             * @param x	ImageData 对象左上角的 x 坐标，以像素计。
             * @param y	ImageData 对象左上角的 y 坐标，以像素计。
             * @param dirtyX	可选。水平值（x），以像素计，在画布上放置图像的位置。
             * @param dirtyY	可选。水平值（y），以像素计，在画布上放置图像的位置。
             * @param dirtyWidth	可选。在画布上绘制图像所使用的宽度。
             * @param dirtyHeight	可选。在画布上绘制图像所使用的高度。
             */
            ctx.putImageData(imageData, 0, row);
            this.sprite.dstBlendFactor = cc.macro.ONE_MINUS_SRC_ALPHA;
        }
        return this._canvas;
    };
    Test2.prototype.showSprite = function (img) {
        var texture = new cc.Texture2D();
        texture.initWithElement(img);
        var spriteFrame = new cc.SpriteFrame();
        spriteFrame.setTexture(texture);
        var node = new cc.Node();
        var sprite = node.addComponent(cc.Sprite);
        sprite.srcBlendFactor = cc.macro.SRC_ALPHA;
        sprite.dstBlendFactor = cc.macro.ONE_MINUS_SRC_ALPHA;
        sprite.spriteFrame = spriteFrame;
        node.zIndex = cc.macro.MAX_ZINDEX;
        node.parent = cc.director.getScene();
        // set position
        var width = cc.winSize.width;
        var height = cc.winSize.height;
        node.x = width / 2;
        node.y = height / 2;
        node.on(cc.Node.EventType.TOUCH_START, function () {
            node.parent = null;
            node.destroy();
        });
        this.captureAction(node, width, height);
    };
    Test2.prototype.captureAction = function (node, width, height) {
        var scaleAction = cc.scaleTo(1, 1);
        var targetPos = cc.v2(width - width / 6, height / 4);
        var moveAction = cc.moveTo(1, targetPos);
        var spawn = cc.spawn(scaleAction, moveAction);
        node.runAction(spawn);
    };
    Test2.prototype.clearCanvas = function () {
        var ctx = this._canvas.getContext('2d');
        ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    };
    __decorate([
        property(cc.Camera)
    ], Test2.prototype, "camera", void 0);
    __decorate([
        property(cc.Sprite)
    ], Test2.prototype, "sprite", void 0);
    Test2 = __decorate([
        ccclass
    ], Test2);
    return Test2;
}(cc.Component));
exports.default = Test2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxUZXN0Mi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUFtQyx5QkFBWTtJQUEvQztRQUFBLHFFQTJKQztRQXpKRyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBR3pCLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFFekIsYUFBTyxHQUFRLElBQUksQ0FBQztRQUNwQixhQUFPLEdBQVMsSUFBSSxDQUFDOztJQW1KekIsQ0FBQztJQWxKRyxxQkFBSyxHQUFMO1FBQUEsaUJBU0M7UUFSRyxZQUFZO1FBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLEdBQUcsR0FBRyxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDM0IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRUQsb0JBQUksR0FBSjtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXJDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUVuQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3pGLElBQUks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RSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsRUFBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDekMsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsMkJBQVcsR0FBWDtRQUNJLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUF4SkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5Q0FDSztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lDQUNLO0lBTFIsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQTJKekI7SUFBRCxZQUFDO0NBM0pELEFBMkpDLENBM0prQyxFQUFFLENBQUMsU0FBUyxHQTJKOUM7a0JBM0pvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3QyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBjYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHNwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBfY2FudmFzOiBhbnkgPSBudWxsO1xyXG4gICAgdGV4dHVyZTogYW55ICA9IG51bGw7XHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy8g5a+55Zu+54mH6L+b6KGM54Gw5bqm5aSE55CGXHJcbiAgICAgICAgdGhpcy5zcHJpdGUuc2V0U3RhdGUoMSk7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVNwcml0ZSgpO1xyXG4gICAgICAgICAgICB2YXIgaW1nID0gdGhpcy5pbml0SW1hZ2UoKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93U3ByaXRlKGltZyk7XHJcbiAgICAgICAgfSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBsZXQgdGV4dHVyZSA9IG5ldyBjYy5SZW5kZXJUZXh0dXJlKCk7XHJcblxyXG4gICAgICAgIGxldCBnbCA9IGNjLmdhbWVbXCJfcmVuZGVyQ29udGV4dFwiXTtcclxuICAgICAgIFxyXG4gICAgICAgIHRleHR1cmUuaW5pdFdpdGhTaXplKHRoaXMuc3ByaXRlLm5vZGUud2lkdGgsIHRoaXMuc3ByaXRlLm5vZGUuaGVpZ2h0LCBnbC5TVEVOQ0lMX0lOREVYOCk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEudGFyZ2V0VGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IHRoaXMuc3ByaXRlLm5vZGUucG9zaXRpb247XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlICA9IHRleHR1cmU7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEltYWdlKCkge1xyXG4gICAgICAgIHZhciBkYXRhVVJMID0gdGhpcy5fY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyk7XHJcbiAgICAgICAgdmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGltZy5zcmMgPSBkYXRhVVJMO1xyXG4gICAgICAgIHJldHVybiBpbWc7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjcmVhdGVTcHJpdGUoKSB7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gdGhpcy50ZXh0dXJlLndpZHRoO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSB0aGlzLnRleHR1cmUuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuc3ByaXRlLmRzdEJsZW5kRmFjdG9yID0gY2MubWFjcm8uWkVSTztcclxuICAgICAgICBpZiAoIXRoaXMuX2NhbnZhcykge1xyXG4gICAgICAgICAgICB0aGlzLl9jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLl9jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jbGVhckNhbnZhcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEucmVuZGVyKCk7XHJcbiAgICAgIFxyXG4gICAgICAgIC8vIOW3puS4iueahOS4uuWOn+eCuSjkuIDkuKrlg4/ntKDlrZggNOS4qiDmoLzlrZAsIOWIhuWIq+S7o+ihqOedgCBSIEcgQiBBKVxyXG4gICAgICAgIGxldCBkYXRhOiBVaW50OEFycmF5ID0gdGhpcy50ZXh0dXJlLnJlYWRQaXhlbHMoKTtcclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC8vIHdyaXRlIHRoZSByZW5kZXIgZGF0YVxyXG4gICAgICAgIGxldCByb3dCeXRlcyA9IHdpZHRoICogNDsgXHJcblxyXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGhlaWdodDsgcm93KyspIHtcclxuICAgICAgICAgICAgbGV0IHNyb3cgPSBoZWlnaHQgLSAxIC0gcm93O1xyXG4gICAgICAgICAgICAvLyBsZXQgc3JvdyA9ICByb3c7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiAxLiDku6XmjIflrprnmoTlsLrlr7jvvIjku6Xlg4/ntKDorqHvvInliJvlu7rmlrDnmoQgSW1hZ2VEYXRhIOWvueixoe+8mlxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gd2lkdGggSW1hZ2VEYXRhIOWvueixoeeahOWuveW6pu+8jOS7peWDj+e0oOiuoeOAglxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gaGVpZ2h0IEltYWdlRGF0YSDlr7nosaHnmoTpq5jluqbvvIzku6Xlg4/ntKDorqHjgIJcclxuICAgICAgICAgICAgICogXHJcbiAgICAgICAgICAgICAqIDIuIOWIm+W7uuS4juaMh+WumueahOWPpuS4gOS4qiBJbWFnZURhdGEg5a+56LGh5bC65a+455u45ZCM55qE5pawIEltYWdlRGF0YSDlr7nosaHvvIjkuI3kvJrlpI3liLblm77lg4/mlbDmja7vvInvvJpcclxuICAgICAgICAgICAgICogQHBhcmFtIGltYWdlRGF0YSBJbWFnZURhdGEg5a+56LGhXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBsZXQgaW1hZ2VEYXRhID0gY3R4LmNyZWF0ZUltYWdlRGF0YSh3aWR0aCwgMSk7XHJcblxyXG4gICAgICAgICAgICAvLyByICBnICBiIGFcclxuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gc3JvdyAqICh3aWR0aCkgKiA0O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd0J5dGVzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGltYWdlRGF0YS5kYXRhW2ldID0gZGF0YVtzdGFydCArIGldO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBvZmZzZXQgPSAwOyBvZmZzZXQ8IGltYWdlRGF0YS53aWR0aCAlIDQ7IG9mZnNldCsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaWR4ID0gb2Zmc2V0ICogNDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKGltYWdlRGF0YS5kYXRhW2lkeF0gPT09IDAgJiYgIGltYWdlRGF0YS5kYXRhW2lkeCArIDFdID09PSAwICYmICAgaW1hZ2VEYXRhLmRhdGFbaWR4ICsgMl0gPT09IDAgJiYgIGltYWdlRGF0YS5kYXRhW2lkeCArIDNdID09PSAyNTUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZURhdGEuZGF0YVtpZHhdID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZURhdGEuZGF0YVtpZHggKyAxXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbaWR4ICsgMl0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlRGF0YS5kYXRhW2lkeCArIDNdID0gMjU1O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZURhdGEuZGF0YVtpZHhdID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZURhdGEuZGF0YVtpZHggKyAxXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbaWR4ICsgMl0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlRGF0YS5kYXRhW2lkeCArIDNdID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5bCG5Zu+5YOP5pWw5o2u77yI5LuO5oyH5a6a55qEIEltYWdlRGF0YSDlr7nosaHvvInmlL7lm57nlLvluIPkuIpcclxuICAgICAgICAgICAgICogQHBhcmFtIGltYWdlRGF0YSDop4TlrpropoHmlL7lm57nlLvluIPnmoQgSW1hZ2VEYXRhIOWvueixoVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0geFx0SW1hZ2VEYXRhIOWvueixoeW3puS4iuinkueahCB4IOWdkOagh++8jOS7peWDj+e0oOiuoeOAglxyXG4gICAgICAgICAgICAgKiBAcGFyYW0geVx0SW1hZ2VEYXRhIOWvueixoeW3puS4iuinkueahCB5IOWdkOagh++8jOS7peWDj+e0oOiuoeOAglxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gZGlydHlYXHTlj6/pgInjgILmsLTlubPlgLzvvIh477yJ77yM5Lul5YOP57Sg6K6h77yM5Zyo55S75biD5LiK5pS+572u5Zu+5YOP55qE5L2N572u44CCXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSBkaXJ0eVlcdOWPr+mAieOAguawtOW5s+WAvO+8iHnvvInvvIzku6Xlg4/ntKDorqHvvIzlnKjnlLvluIPkuIrmlL7nva7lm77lg4/nmoTkvY3nva7jgIJcclxuICAgICAgICAgICAgICogQHBhcmFtIGRpcnR5V2lkdGhcdOWPr+mAieOAguWcqOeUu+W4g+S4iue7mOWItuWbvuWDj+aJgOS9v+eUqOeahOWuveW6puOAglxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gZGlydHlIZWlnaHRcdOWPr+mAieOAguWcqOeUu+W4g+S4iue7mOWItuWbvuWDj+aJgOS9v+eUqOeahOmrmOW6puOAglxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgY3R4LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIDAsIHJvdyk7XHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLmRzdEJsZW5kRmFjdG9yID0gY2MubWFjcm8uT05FX01JTlVTX1NSQ19BTFBIQTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbnZhcztcclxuICAgIH1cclxuXHJcbiAgICBzaG93U3ByaXRlKGltZykge1xyXG4gICAgICAgIGxldCB0ZXh0dXJlID0gbmV3IGNjLlRleHR1cmUyRCgpO1xyXG4gICAgICAgIHRleHR1cmUuaW5pdFdpdGhFbGVtZW50KGltZyk7XHJcblxyXG4gICAgICAgIGxldCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSgpO1xyXG4gICAgICAgIHNwcml0ZUZyYW1lLnNldFRleHR1cmUodGV4dHVyZSk7XHJcblxyXG4gICAgICAgIGxldCBub2RlID0gbmV3IGNjLk5vZGUoKTtcclxuICAgICAgICBsZXQgc3ByaXRlID0gbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKVxyXG4gICAgICAgICBcclxuICAgICAgICBzcHJpdGUuc3JjQmxlbmRGYWN0b3IgPSBjYy5tYWNyby5TUkNfQUxQSEE7XHJcbiAgICAgICAgc3ByaXRlLmRzdEJsZW5kRmFjdG9yID0gY2MubWFjcm8uT05FX01JTlVTX1NSQ19BTFBIQTtcclxuICAgICBcclxuICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuXHJcbiAgICAgICAgbm9kZS56SW5kZXggPSBjYy5tYWNyby5NQVhfWklOREVYO1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKTtcclxuICAgICAgICAvLyBzZXQgcG9zaXRpb25cclxuICAgICAgICBsZXQgd2lkdGggPSBjYy53aW5TaXplLndpZHRoO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSBjYy53aW5TaXplLmhlaWdodDtcclxuICAgICAgICBub2RlLnggPSB3aWR0aCAvIDI7XHJcbiAgICAgICAgbm9kZS55ID0gaGVpZ2h0IC8gMjtcclxuICAgICAgICBub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgbm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2FwdHVyZUFjdGlvbihub2RlLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgY2FwdHVyZUFjdGlvbihub2RlLCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgbGV0IHNjYWxlQWN0aW9uID0gY2Muc2NhbGVUbygxLDEpO1xyXG4gICAgICAgIGxldCB0YXJnZXRQb3MgPSBjYy52Mih3aWR0aCAtIHdpZHRoIC8gNiwgIGhlaWdodCAvIDQpO1xyXG4gICAgICAgIGxldCBtb3ZlQWN0aW9uID0gY2MubW92ZVRvKDEsIHRhcmdldFBvcyk7IFxyXG4gICAgICAgIGxldCBzcGF3biA9IGNjLnNwYXduKHNjYWxlQWN0aW9uLCBtb3ZlQWN0aW9uKTtcclxuICAgICAgICBub2RlLnJ1bkFjdGlvbihzcGF3bik7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJDYW52YXMoKSB7XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5fY2FudmFzLndpZHRoLCB0aGlzLl9jYW52YXMuaGVpZ2h0KTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/view/base/BaseComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e3ff1NW6qNM0LvJ1nw2QeKI', 'BaseComponent');
// framework/view/base/BaseComponent.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaseComponent = /** @class */ (function (_super) {
    __extends(BaseComponent, _super);
    function BaseComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionInId = bb.UI_ACTION_IN.NONE;
        _this.actionOutId = bb.UI_ACTION_OUT.NONE;
        _this.uiCtrl = null;
        return _this;
    }
    BaseComponent.prototype.onLoad = function () {
        bb.UIManager.loadAllPlugin(this.node, this);
    };
    BaseComponent.prototype.start = function () {
        bb.UIManager.startAllPlugin(this.node, this);
        this.onEnter();
    };
    BaseComponent.prototype.onEnter = function () {
        bb.UIManager.enterAllPlugin(this.node, this);
    };
    BaseComponent.prototype.onExit = function () {
    };
    __decorate([
        property({ type: bb.UI_ACTION_IN, tooltip: "进入动画" })
    ], BaseComponent.prototype, "actionInId", void 0);
    __decorate([
        property({ type: bb.UI_ACTION_OUT, tooltip: "退出动画" })
    ], BaseComponent.prototype, "actionOutId", void 0);
    BaseComponent = __decorate([
        ccclass
    ], BaseComponent);
    return BaseComponent;
}(cc.Component));
exports.default = BaseComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx2aWV3XFxiYXNlXFxCYXNlQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBeUJDO1FBdkJHLGdCQUFVLEdBQW9CLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1FBRW5ELGlCQUFXLEdBQXFCLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1FBRXRELFlBQU0sR0FBYyxJQUFJLENBQUM7O0lBbUI3QixDQUFDO0lBakJHLDhCQUFNLEdBQU47UUFDRyxFQUFFLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCw2QkFBSyxHQUFMO1FBQ0ksRUFBRSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUdELCtCQUFPLEdBQVA7UUFDSSxFQUFFLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCw4QkFBTSxHQUFOO0lBRUEsQ0FBQztJQXRCRDtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsWUFBWSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUMsQ0FBQztxREFDQTtJQUVuRDtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUMsQ0FBQztzREFDRTtJQUpyQyxhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBeUJqQztJQUFELG9CQUFDO0NBekJELEFBeUJDLENBekIwQyxFQUFFLENBQUMsU0FBUyxHQXlCdEQ7a0JBekJvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUNvbXBvbmVudCBleHRlbmRzIGNjLkNvbXBvbmVudHtcclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogYmIuVUlfQUNUSU9OX0lOLCB0b29sdGlwOiBcIui/m+WFpeWKqOeUu1wifSlcclxuICAgIGFjdGlvbkluSWQ6IGJiLlVJX0FDVElPTl9JTiA9IGJiLlVJX0FDVElPTl9JTi5OT05FO1xyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBiYi5VSV9BQ1RJT05fT1VULCB0b29sdGlwOiBcIumAgOWHuuWKqOeUu1wifSlcclxuICAgIGFjdGlvbk91dElkOiBiYi5VSV9BQ1RJT05fT1VUID0gYmIuVUlfQUNUSU9OX09VVC5OT05FO1xyXG5cclxuICAgIHVpQ3RybDogYmIuVUlDdHJsID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICBiYi5VSU1hbmFnZXIubG9hZEFsbFBsdWdpbih0aGlzLm5vZGUsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGJiLlVJTWFuYWdlci5zdGFydEFsbFBsdWdpbih0aGlzLm5vZGUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25FbnRlcigpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvbkVudGVyKCkgOiB2b2lkIHtcclxuICAgICAgICBiYi5VSU1hbmFnZXIuZW50ZXJBbGxQbHVnaW4odGhpcy5ub2RlLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkV4aXQoKSA6IHZvaWQge1xyXG5cclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/Localization.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '31b21lVosRNLYhKYpQuD5UH', 'Localization');
// framework/Localization.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** 本地化模块 */
var Localization = /** @class */ (function () {
    function Localization() {
        this.jsonData = null;
        cc.log("本地化: " + cc.sys.language);
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
    Localization.getInstance = function () {
        if (Localization.singleInstance == null) {
            Localization.singleInstance = new Localization();
        }
        return Localization.singleInstance;
    };
    Localization.prototype.init = function () {
        var _this = this;
        bb.UILoader.loadRes("localization/localization_" + cc.sys.language, cc.JsonAsset, function (data) {
            _this.jsonData = data.json;
        });
    };
    Localization.prototype.get = function (key) {
        return this.jsonData[key];
    };
    Localization.singleInstance = null;
    return Localization;
}());
exports.default = Localization;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxMb2NhbGl6YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxZQUFZO0FBQ1o7SUFXSTtRQUZBLGFBQVEsR0FBVyxJQUFJLENBQUM7UUFHckIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuQyxJQUFJLFNBQVMsRUFBRTtZQUNWLE9BQU87U0FDWDtRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLHNHQUFzRztRQUN0RyxzQkFBc0I7UUFDdEIsVUFBVTtRQUNWLHdHQUF3RztRQUN4RyxvQkFBb0I7UUFDcEIsU0FBUztRQUNOLFVBQVU7SUFDYixDQUFDO0lBdkJNLHdCQUFXLEdBQWxCO1FBQ0ksSUFBSSxZQUFZLENBQUMsY0FBYyxJQUFJLElBQUksRUFBRTtZQUNyQyxZQUFZLENBQUMsY0FBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7U0FDcEQ7UUFDRCxPQUFPLFlBQVksQ0FBQyxjQUFjLENBQUM7SUFDdkMsQ0FBQztJQW9CRCwyQkFBSSxHQUFKO1FBQUEsaUJBSUM7UUFIRyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQywrQkFBNkIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFVLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLElBQUk7WUFDbkYsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDBCQUFHLEdBQUgsVUFBSSxHQUFXO1FBQ1gsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFsQ00sMkJBQWMsR0FBaUIsSUFBSSxDQUFDO0lBbUMvQyxtQkFBQztDQXBDRCxBQW9DQyxJQUFBO2tCQXBDb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiDmnKzlnLDljJbmqKHlnZcgKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYWxpemF0aW9uIHtcclxuICAgIHN0YXRpYyBzaW5nbGVJbnN0YW5jZTogTG9jYWxpemF0aW9uID0gbnVsbDtcclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBMb2NhbGl6YXRpb24ge1xyXG4gICAgICAgIGlmIChMb2NhbGl6YXRpb24uc2luZ2xlSW5zdGFuY2UgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBMb2NhbGl6YXRpb24uc2luZ2xlSW5zdGFuY2UgPSBuZXcgTG9jYWxpemF0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBMb2NhbGl6YXRpb24uc2luZ2xlSW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAganNvbkRhdGE6IE9iamVjdCA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICBjYy5sb2coXCLmnKzlnLDljJY6IFwiICsgIGNjLnN5cy5sYW5ndWFnZSk7XHJcbiAgICAgICBpZiAoQ0NfRURJVE9SKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgIH1cclxuXHJcbiAgICAgICB0aGlzLmpzb25EYXRhID0ge307ICAgICBcclxuICAgIC8vICAgIGNjLmxvYWRlci5sb2FkUmVzKGBsb2NhbGl6YXRpb24vbG9jYWxpemF0aW9uXyR7Y2Muc3lzLmxhbmd1YWdlfWAsIGNjLkpzb25Bc3NldCwgKGVyciwganNvbikgPT4ge1xyXG4gICAgLy8gICAgICAgICBjYy5sb2coZXJyKVxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gICAgYmIuVUlMb2FkZXIubG9hZFJlcyhgbG9jYWxpemF0aW9uL2xvY2FsaXphdGlvbl8ke2NjLnN5cy5sYW5ndWFnZX0uanNvbmAsIGNjLkpzb25Bc3NldCwgKGpzb24pID0+IHtcclxuICAgIC8vICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAvLyAgICB9KTtcclxuICAgICAgIC8vIOWKoOi9veacrOWcsOWMlui1hOa6kFxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgYmIuVUlMb2FkZXIubG9hZFJlcyhgbG9jYWxpemF0aW9uL2xvY2FsaXphdGlvbl8ke2NjLnN5cy5sYW5ndWFnZX1gLCBjYy5Kc29uQXNzZXQsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuanNvbkRhdGEgPSBkYXRhLmpzb247XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KGtleTogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuanNvbkRhdGFba2V5XTtcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Test3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '05f3dSzdGNBOI7RPQkEg14o', 'Test3');
// script/Test3.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Test3 = /** @class */ (function (_super) {
    __extends(Test3, _super);
    function Test3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Test3.prototype.start = function () {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits["e_aabbBit"] |
            cc.PhysicsManager.DrawBits["e_pairBit"] |
            cc.PhysicsManager.DrawBits["e_centerOfMassBit"] |
            cc.PhysicsManager.DrawBits["e_jointBit"] |
            cc.PhysicsManager.DrawBits["e_shapeBit"];
        // cc.director.getPhysicsManager().debugDrawFlags = 0;
        // 如果希望修改重力加速度为其他值，比如每秒加速降落 640 像素，那么可以这样设置：
        cc.director.getPhysicsManager().gravity = cc.v2(0, -640);
    };
    Test3 = __decorate([
        ccclass
    ], Test3);
    return Test3;
}(cc.Component));
exports.default = Test3;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxUZXN0My50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUFtQyx5QkFBWTtJQUEvQzs7SUFlQSxDQUFDO0lBZEcscUJBQUssR0FBTDtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBRS9DLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxjQUFjLEdBQUksRUFBRSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO1lBQ3pGLEVBQUUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQztZQUN2QyxFQUFFLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQztZQUMvQyxFQUFFLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUM7WUFDeEMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFekMsc0RBQXNEO1FBRXRELDRDQUE0QztRQUM1QyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQWRnQixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBZXpCO0lBQUQsWUFBQztDQWZELEFBZUMsQ0Fma0MsRUFBRSxDQUFDLFNBQVMsR0FlOUM7a0JBZm9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdDMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5kZWJ1Z0RyYXdGbGFncyA9ICBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0c1tcImVfYWFiYkJpdFwiXSB8XHJcbiAgICAgICAgY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHNbXCJlX3BhaXJCaXRcIl0gfFxyXG4gICAgICAgIGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzW1wiZV9jZW50ZXJPZk1hc3NCaXRcIl0gfFxyXG4gICAgICAgIGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzW1wiZV9qb2ludEJpdFwiXSB8XHJcbiAgICAgICAgY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHNbXCJlX3NoYXBlQml0XCJdO1xyXG5cclxuICAgICAgICAvLyBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmRlYnVnRHJhd0ZsYWdzID0gMDtcclxuXHJcbiAgICAgICAgLy8g5aaC5p6c5biM5pyb5L+u5pS56YeN5Yqb5Yqg6YCf5bqm5Li65YW25LuW5YC877yM5q+U5aaC5q+P56eS5Yqg6YCf6ZmN6JC9IDY0MCDlg4/ntKDvvIzpgqPkuYjlj6/ku6Xov5nmoLforr7nva7vvJpcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmdyYXZpdHkgPSBjYy52MigwLCAtNjQwKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/scene/test_uiloader/test_scene1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5109aw9xsZOvJK270goRGzt', 'test_scene1');
// resources/scene/test_uiloader/test_scene1.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var test_scene1 = /** @class */ (function (_super) {
    __extends(test_scene1, _super);
    function test_scene1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prefab = null;
        return _this;
    }
    test_scene1.prototype.onLoad = function () {
        bb.ViewManager.showView(this.prefab.name, this.prefab, { "aaa": 11, ddd: "333" });
    };
    __decorate([
        property(cc.Prefab)
    ], test_scene1.prototype, "prefab", void 0);
    test_scene1 = __decorate([
        ccclass
    ], test_scene1);
    return test_scene1;
}(bb.BaseComponent));
exports.default = test_scene1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxzY2VuZVxcdGVzdF91aWxvYWRlclxcdGVzdF9zY2VuZTEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUM7SUFBeUMsK0JBQWdCO0lBQXpEO1FBQUEscUVBTUM7UUFKRyxZQUFNLEdBQWMsSUFBSSxDQUFDOztJQUk3QixDQUFDO0lBSEcsNEJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFIRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUNLO0lBRlIsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQU0vQjtJQUFELGtCQUFDO0NBTkQsQUFNQyxDQU53QyxFQUFFLENBQUMsYUFBYSxHQU14RDtrQkFOb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRlc3Rfc2NlbmUxIGV4dGVuZHMgYmIuQmFzZUNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBiYi5WaWV3TWFuYWdlci5zaG93Vmlldyh0aGlzLnByZWZhYi5uYW1lLCB0aGlzLnByZWZhYiwge1wiYWFhXCI6IDExLCBkZGQ6XCIzMzNcIn0pO1xyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/event/EventManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7a426ftB1VIVIaVc4ngdIyl', 'EventManager');
// framework/event/EventManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventManager = /** @class */ (function () {
    function EventManager() {
        this.event_cache = null;
        this.event_cache = {};
    }
    EventManager.getInstance = function () {
        if (EventManager.singleInstance == null) {
            EventManager.singleInstance = new EventManager();
        }
        return EventManager.singleInstance;
    };
    /**
     *
     * @param {number} type 事件类型
     * @param {Function} callback 触发函数
     * @param {string} tag 标识这个回调函数属于哪一个类(每个类都有一个唯一标识符)
     * @param {number} priority 事件优先级
     */
    EventManager.prototype.addEventListener = function (type, callback, class_id, priority) {
        if (class_id === void 0) { class_id = ""; }
        if (priority === void 0) { priority = 0; }
        if (!type || !callback) {
            return;
        }
        var sub_cache = this.event_cache[type] || [];
        var hasSame = false;
        for (var i = 0; i < sub_cache.length; i++) {
            if (sub_cache[i].callback === callback) {
                hasSame = true;
                break;
            }
        }
        if (hasSame) {
            return;
        }
        var ievent = {
            type: type,
            class_id: class_id,
            priority: priority,
            callback: callback
        };
        if (priority > 0) {
            var isPush = true;
            for (var i = sub_cache.length - 1; i >= 0; i--) {
                if (sub_cache[i].priority > priority) {
                    sub_cache.splice(i + 1, 0, ievent);
                    isPush = false;
                    break;
                }
            }
            if (isPush) {
                sub_cache.splice(0, 0, ievent);
            }
        }
        else {
            sub_cache.push(ievent);
        }
        this.event_cache[type] = sub_cache;
    };
    EventManager.prototype.dispatchEvent = function (type, params) {
        if (!type) {
            return;
        }
        var sub_cache = this.event_cache[type];
        if (!sub_cache) {
            return;
        }
        for (var i = 0; i < sub_cache.length; i++) {
            var ievent = sub_cache[i];
            ievent.callback(params);
        }
    };
    EventManager.prototype.removeEventListener = function (type, callback) {
        if (!type || !callback) {
            return;
        }
        var sub_cache = this.event_cache[type];
        if (!sub_cache) {
            return;
        }
        for (var i = 0; i < sub_cache.length; i++) {
            if (sub_cache[i].callback === callback) {
                sub_cache.splice(i, 1);
                break;
            }
        }
        if (sub_cache.length == 0) {
            delete this.event_cache[type];
        }
    };
    EventManager.prototype.removeEventListenerByTag = function (type, class_id) {
        if (!type) {
            return;
        }
        for (var key in this.event_cache) {
            var sub_cache = this.event_cache[key];
            if (!sub_cache) {
                continue;
            }
            for (var i = 0; i < sub_cache.length; i++) {
                if (sub_cache[i].class_id === class_id) {
                    sub_cache.splice(i, 1);
                    break;
                }
            }
            if (sub_cache.length == 0) {
                delete this.event_cache[type];
            }
        }
    };
    EventManager.singleInstance = null;
    return EventManager;
}());
exports.default = EventManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxldmVudFxcRXZlbnRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUUE7SUFVSTtRQUZBLGdCQUFXLEdBQW1DLElBQUksQ0FBQztRQUcvQyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBVk0sd0JBQVcsR0FBbEI7UUFDSSxJQUFJLFlBQVksQ0FBQyxjQUFjLElBQUksSUFBSSxFQUFFO1lBQ3JDLFlBQVksQ0FBQyxjQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztTQUNwRDtRQUNELE9BQU8sWUFBWSxDQUFDLGNBQWMsQ0FBQztJQUN2QyxDQUFDO0lBT0Q7Ozs7OztPQU1HO0lBQ0gsdUNBQWdCLEdBQWhCLFVBQWlCLElBQVksRUFBRSxRQUFhLEVBQUUsUUFBcUIsRUFBRSxRQUFvQjtRQUEzQyx5QkFBQSxFQUFBLGFBQXFCO1FBQUUseUJBQUEsRUFBQSxZQUFvQjtRQUNyRixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3BCLE9BQU87U0FDVjtRQUNELElBQUksU0FBUyxHQUFrQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM1RCxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDcEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRTtnQkFDcEMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDZixNQUFNO2FBQ1Q7U0FDSjtRQUNELElBQUksT0FBTyxFQUFFO1lBQ1QsT0FBTztTQUNWO1FBQ0QsSUFBSSxNQUFNLEdBQVc7WUFDakIsSUFBSSxFQUFFLElBQUk7WUFDVixRQUFRLEVBQUUsUUFBUTtZ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QUFRLEVBQUU7b0JBQ3BDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN2QixNQUFNO2lCQUNUO2FBQ0o7WUFDRCxJQUFJLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUN2QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDakM7U0FDSjtJQUNMLENBQUM7SUFoSE0sMkJBQWMsR0FBaUIsSUFBSSxDQUFDO0lBaUgvQyxtQkFBQztDQWxIRCxBQWtIQyxJQUFBO2tCQWxIb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbnRlcmZhY2UgSUV2ZW50IHtcclxuICAgIHR5cGU6IG51bWJlcixcclxuICAgIHByaW9yaXR5OiBudW1iZXIsIFxyXG4gICAgY2xhc3NfaWQ6IHN0cmluZyxcclxuICAgIGNhbGxiYWNrOiAoZGF0YTogYW55KSA9PiB2b2lkXHJcbn0gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudE1hbmFnZXIge1xyXG4gICAgc3RhdGljIHNpbmdsZUluc3RhbmNlOiBFdmVudE1hbmFnZXIgPSBudWxsO1xyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCk6IEV2ZW50TWFuYWdlciB7XHJcbiAgICAgICAgaWYgKEV2ZW50TWFuYWdlci5zaW5nbGVJbnN0YW5jZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIEV2ZW50TWFuYWdlci5zaW5nbGVJbnN0YW5jZSA9IG5ldyBFdmVudE1hbmFnZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIEV2ZW50TWFuYWdlci5zaW5nbGVJbnN0YW5jZTtcclxuICAgIH1cclxuICAgIGV2ZW50X2NhY2hlOiB7W2tleTogbnVtYmVyXTogQXJyYXk8SUV2ZW50Pn0gPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZXZlbnRfY2FjaGUgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHR5cGUg5LqL5Lu257G75Z6LXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayDop6blj5Hlh73mlbBcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0YWcg5qCH6K+G6L+Z5Liq5Zue6LCD5Ye95pWw5bGe5LqO5ZOq5LiA5Liq57G7KOavj+S4quexu+mDveacieS4gOS4quWUr+S4gOagh+ivhuespilcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwcmlvcml0eSDkuovku7bkvJjlhYjnuqdcclxuICAgICAqL1xyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcih0eXBlOiBudW1iZXIsIGNhbGxiYWNrOiBhbnksIGNsYXNzX2lkOiBzdHJpbmcgPSBcIlwiLCBwcmlvcml0eTogbnVtYmVyID0gMCkge1xyXG4gICAgICAgIGlmICghdHlwZSB8fCAhY2FsbGJhY2spIHsgXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHN1Yl9jYWNoZTogQXJyYXk8SUV2ZW50PiA9IHRoaXMuZXZlbnRfY2FjaGVbdHlwZV0gfHwgW107XHJcbiAgICAgICAgbGV0IGhhc1NhbWUgPSBmYWxzZTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1Yl9jYWNoZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoc3ViX2NhY2hlW2ldLmNhbGxiYWNrID09PSBjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgaGFzU2FtZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaGFzU2FtZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBcclxuICAgICAgICBsZXQgaWV2ZW50OiBJRXZlbnQgPSB7XHJcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgICAgIGNsYXNzX2lkOiBjbGFzc19pZCxcclxuICAgICAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LCBcclxuICAgICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAocHJpb3JpdHkgPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBpc1B1c2ggPSB0cnVlO1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSBzdWJfY2FjaGUubGVuZ3RoIC0gMTsgaSA+PTA7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBzdWJfY2FjaGVbaV0ucHJpb3JpdHkgPiBwcmlvcml0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Yl9jYWNoZS5zcGxpY2UoaSArIDEsIDAsIGlldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNQdXNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzUHVzaCkge1xyXG4gICAgICAgICAgICAgICAgc3ViX2NhY2hlLnNwbGljZSgwLCAwLCBpZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3ViX2NhY2hlLnB1c2goaWV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ldmVudF9jYWNoZVt0eXBlXSA9IHN1Yl9jYWNoZTtcclxuICAgIH0gXHJcblxyXG4gICAgZGlzcGF0Y2hFdmVudCh0eXBlOiBudW1iZXIsIHBhcmFtcz86IGFueSkge1xyXG4gICAgICAgIGlmICghdHlwZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzdWJfY2FjaGU6IEFycmF5PElFdmVudD4gPSB0aGlzLmV2ZW50X2NhY2hlW3R5cGVdO1xyXG4gICAgICAgIGlmICghc3ViX2NhY2hlKSB7XHJcbiAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1Yl9jYWNoZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgaWV2ZW50ID0gc3ViX2NhY2hlW2ldO1xyXG4gICAgICAgICAgICBpZXZlbnQuY2FsbGJhY2socGFyYW1zKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVFdmVudExpc3RlbmVyKHR5cGU6IG51bWJlciwgY2FsbGJhY2s6IGFueSkge1xyXG4gICAgICAgIGlmICghdHlwZSB8fCAhY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGxldCBzdWJfY2FjaGU6IEFycmF5PElFdmVudD4gID0gdGhpcy5ldmVudF9jYWNoZVt0eXBlXTtcclxuICAgICAgICAgaWYgKCFzdWJfY2FjaGUpIHtcclxuICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1Yl9jYWNoZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgaWYgKHN1Yl9jYWNoZVtpXS5jYWxsYmFjayA9PT0gY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICBzdWJfY2FjaGUuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGlmIChzdWJfY2FjaGUubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50X2NhY2hlW3R5cGVdO1xyXG4gICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lckJ5VGFnKHR5cGU6IG51bWJlciwgY2xhc3NfaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmICghdHlwZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IobGV0IGtleSBpbiB0aGlzLmV2ZW50X2NhY2hlKSB7XHJcbiAgICAgICAgICAgIGxldCBzdWJfY2FjaGU6IEFycmF5PElFdmVudD4gPSB0aGlzLmV2ZW50X2NhY2hlW2tleV07XHJcbiAgICAgICAgICAgIGlmICghc3ViX2NhY2hlKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1Yl9jYWNoZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN1Yl9jYWNoZVtpXS5jbGFzc19pZCA9PT0gY2xhc3NfaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWJfY2FjaGUuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzdWJfY2FjaGUubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50X2NhY2hlW3R5cGVdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/audio/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bef487PaOVEqIsv0EBQG+fC', 'AudioManager');
// framework/audio/AudioManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @class AudioManager
 * @author 虣虣
 * @deprecated 音乐，音效管理模块
 *
 */
var AudioManager = /** @class */ (function () {
    function AudioManager() {
        this.soundMute = false;
        this.effctMute = false;
        this._defaultBtnAudio = null;
        this.effects = null;
        this._currentMusicId = -1;
        this._currentMusicCacheUrl = null;
        this._currentEffectId = -1;
        this._currentEffectCacheUrl = null;
        this.effects = [];
    }
    AudioManager.getInstance = function () {
        if (AudioManager.singleInstance == null) {
            AudioManager.singleInstance = new AudioManager();
        }
        return AudioManager.singleInstance;
    };
    AudioManager.prototype.switchEffctMute = function (soundMute) {
        this.soundMute = soundMute;
    };
    AudioManager.prototype.switchSoundMute = function (effctMute) {
        this.effctMute = effctMute;
    };
    AudioManager.prototype.setDefaultBtnAudio = function (path) {
        var _this = this;
        cc.resources.load(path, cc.AudioClip, function (err, audioclip) {
            _this._defaultBtnAudio = audioclip;
        });
    };
    AudioManager.prototype.playDefaultBtnAudio = function (volume) {
        if (volume === void 0) { volume = 1; }
        this.playEffect(this._defaultBtnAudio, false, false);
    };
    AudioManager.prototype.setEffectsVolume = function (volume) {
        cc.audioEngine.setEffectsVolume(volume);
        if (volume === 0) {
            this.stopEffect();
        }
    };
    AudioManager.prototype.setMusicVolume = function (volume) {
        cc.audioEngine.setMusicVolume(volume);
        if (volume === 0) {
            this.stopMusic();
        }
    };
    AudioManager.prototype.stopMusic = function () {
        cc.audioEngine.stopMusic();
    };
    AudioManager.prototype.stopEffect = function () {
        if (this._currentEffectId < 0) {
            return;
        }
        cc.audioEngine.stopEffect(this._currentEffectId);
        this._currentEffectId = -1;
    };
    AudioManager.prototype.playMusic = function (audioclip, loop) {
        var _this = this;
        this._currentMusicCacheUrl = audioclip.nativeUrl;
        this._currentMusicId = cc.audioEngine.playMusic(audioclip, loop);
        cc.audioEngine.setFinishCallback(this._currentMusicId, function () {
            _this._currentMusicCacheUrl = null;
            _this._currentMusicId = -1;
        });
    };
    AudioManager.prototype.playMusicSync = function (path, loop) {
        var _this = this;
        cc.resources.load(path, cc.AudioClip, function (err, audioclip) {
            if (err) {
                bb.logE(err.message);
                return;
            }
            _this.playMusic(audioclip, loop);
        });
    };
    AudioManager.prototype.playEffect = function (audioclip, immediately, sync) {
        if (immediately) {
            this._playEffect(audioclip, sync);
            return;
        }
        this.effects.push(audioclip);
        this._playEffect();
    };
    AudioManager.prototype.playEffectSync = function (path, immediately) {
        var _this = this;
        cc.resources.load(path, cc.AudioClip, function (err, audioclip) {
            if (err) {
                bb.logE(err.message);
                return;
            }
            _this.playEffect(audioclip, immediately, true);
        });
    };
    AudioManager.prototype._playEffect = function (audioclip, sync) {
        if (audioclip === void 0) { audioclip = null; }
        if (sync === void 0) { sync = false; }
        if (audioclip) {
            this._play(audioclip);
            return;
        }
        var audioclipObject = this.effects.shift();
        if (!audioclipObject) {
            return;
        }
        this._play(audioclipObject);
    };
    AudioManager.prototype._play = function (audioclip) {
        var _this = this;
        this._currentEffectCacheUrl = audioclip.nativeUrl;
        this._currentEffectId = cc.audioEngine.playEffect(audioclip, false);
        cc.audioEngine.setFinishCallback(this._currentEffectId, function () {
            _this._currentEffectId = -1;
            _this._currentEffectCacheUrl = null;
            _this._playEffect();
        });
    };
    AudioManager.singleInstance = null;
    return AudioManager;
}());
exports.default = AudioManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxhdWRpb1xcQXVkaW9NYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0dBS0c7QUFDSDtJQXVCSTtRQWRBLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUUzQixxQkFBZ0IsR0FBaUIsSUFBSSxDQUFDO1FBRXRDLFlBQU8sR0FBd0IsSUFBSSxDQUFDO1FBRXBDLG9CQUFlLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsMEJBQXFCLEdBQVcsSUFBSSxDQUFDO1FBR3JDLHFCQUFnQixHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzlCLDJCQUFzQixHQUFXLElBQUksQ0FBQztRQUdsQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBdkJNLHdCQUFXLEdBQWxCO1FBQ0ksSUFBSSxZQUFZLENBQUMsY0FBYyxJQUFJLElBQUksRUFBRTtZQUNyQyxZQUFZLENBQUMsY0FBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7U0FDcEQ7UUFDRCxPQUFPLFlBQVksQ0FBQyxjQUFjLENBQUM7SUFDdkMsQ0FBQztJQW9CRCxzQ0FBZSxHQUFmLFVBQWdCLFNBQWtCO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUFFRCxzQ0FBZSxHQUFmLFVBQWdCLFNBQWtCO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUFFRCx5Q0FBa0IsR0FBbEIsVUFBbUIsSUFBWTtRQUEvQixpQkFJQztRQUhHLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQUMsR0FBUyxFQUFFLFNBQXVCO1lBQ3JFLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsMENBQW1CLEdBQW5CLFVBQW9CLE1BQWtCO1FBQWxCLHVCQUFBLEVBQUEsVUFBa0I7UUFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQ3hELENBQUM7SUFFRCx1Q0FBZ0IsR0FBaEIsVUFBaUIsTUFBYztRQUMzQixFQUFFLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNkLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtTQUNwQjtJQUNMLENBQUM7SUFFRCxxQ0FBYyxHQUFkLFVBQWUsTUFBYztRQUN6QixFQUFFLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QyxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDZCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDcEI7SUFDTCxDQUFDO0lBRUQsZ0NBQVMsR0FBVDtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELGlDQUFVLEdBQVY7UUFDSSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLEVBQUU7WUFDM0IsT0FBTztTQUNWO1FBQ0QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxnQ0FBUyxHQUFULFVBQVUsU0FBdUIsRUFBRSxJQUFhO1FBQWhELGlCQU9DO1FBTkcsSUFBSSxDQUFDLHFCQUFxQixHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUM7UUFDakQsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFHO1lBQ3BELEtBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7WUFDbEMsS0FBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxvQ0FBYSxHQUFiLFVBQWMsSUFBWSxFQUFFLElBQWE7UUFBekMsaUJBUUM7UUFQRyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLEdBQVUsRUFBRSxTQUF1QjtZQUN0RSxJQUFJLEdBQUcsRUFBRTtnQkFDTCxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDckIsT0FBTzthQUNWO1lBQ0QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDbkMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsaUNBQVUsR0FBVixVQUFXLFNBQXVCLEVBQUUsV0FBb0IsRUFBRSxJQUFhO1FBQ25FLElBQUksV0FBVyxFQUFFO1lBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbEMsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxxQ0FBYyxHQUFkLFVBQWUsSUFBWSxFQUFFLFdBQW9CO1FBQWpELGlCQVFDO1FBUEcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBQyxHQUFVLEVBQUUsU0FBdUI7WUFDdEUsSUFBSSxHQUFHLEVBQUU7Z0JBQ0wsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3JCLE9BQU87YUFDVjtZQUNELEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxrQ0FBVyxHQUFYLFVBQVksU0FBOEIsRUFBRSxJQUFxQjtRQUFyRCwwQkFBQSxFQUFBLGdCQUE4QjtRQUFFLHFCQUFBLEVBQUEsWUFBcUI7UUFDN0QsSUFBSSxTQUFTLEVBQUU7WUFDWCxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3RCLE9BQU87U0FDVjtRQUNELElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUNsQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCw0QkFBSyxHQUFMLFVBQU0sU0FBdUI7UUFBN0IsaUJBUUM7UUFQRyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQztRQUNsRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3BFLEVBQUUsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3BELEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMzQixLQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO1lBQ25DLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFoSU0sMkJBQWMsR0FBaUIsSUFBSSxDQUFDO0lBa0kvQyxtQkFBQztDQW5JRCxBQW1JQyxJQUFBO2tCQW5Jb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAY2xhc3MgQXVkaW9NYW5hZ2VyXHJcbiAqIEBhdXRob3Ig6Jmj6JmjXHJcbiAqIEBkZXByZWNhdGVkIOmfs+S5kO+8jOmfs+aViOeuoeeQhuaooeWdl1xyXG4gKiBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvTWFuYWdlciB7XHJcbiAgICBzdGF0aWMgc2luZ2xlSW5zdGFuY2U6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogQXVkaW9NYW5hZ2VyIHtcclxuICAgICAgICBpZiAoQXVkaW9NYW5hZ2VyLnNpbmdsZUluc3RhbmNlID09IG51bGwpIHtcclxuICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLnNpbmdsZUluc3RhbmNlID0gbmV3IEF1ZGlvTWFuYWdlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gQXVkaW9NYW5hZ2VyLnNpbmdsZUluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNvdW5kTXV0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgZWZmY3RNdXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgX2RlZmF1bHRCdG5BdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBlZmZlY3RzOiBBcnJheTxjYy5BdWRpb0NsaXA+ID0gbnVsbDtcclxuXHJcbiAgICBfY3VycmVudE11c2ljSWQ6IG51bWJlciA9IC0xO1xyXG4gICAgX2N1cnJlbnRNdXNpY0NhY2hlVXJsOiBzdHJpbmcgPSBudWxsO1xyXG5cclxuXHJcbiAgICBfY3VycmVudEVmZmVjdElkOiBudW1iZXIgPSAtMTtcclxuICAgIF9jdXJyZW50RWZmZWN0Q2FjaGVVcmw6IHN0cmluZyA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoRWZmY3RNdXRlKHNvdW5kTXV0ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuc291bmRNdXRlID0gc291bmRNdXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaFNvdW5kTXV0ZShlZmZjdE11dGU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmVmZmN0TXV0ZSA9IGVmZmN0TXV0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREZWZhdWx0QnRuQXVkaW8ocGF0aDogc3RyaW5nKSB7XHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQocGF0aCwgY2MuQXVkaW9DbGlwLCAoZXJyOkVycm9yLCBhdWRpb2NsaXA6IGNjLkF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9kZWZhdWx0QnRuQXVkaW8gPSBhdWRpb2NsaXA7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheURlZmF1bHRCdG5BdWRpbyh2b2x1bWU6IG51bWJlciA9IDEpIHtcclxuICAgICAgICB0aGlzLnBsYXlFZmZlY3QodGhpcy5fZGVmYXVsdEJ0bkF1ZGlvLCBmYWxzZSwgZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0RWZmZWN0c1ZvbHVtZSh2b2x1bWU6IG51bWJlcikge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUodm9sdW1lKTtcclxuICAgICAgICBpZiAodm9sdW1lID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcEVmZmVjdCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldE11c2ljVm9sdW1lKHZvbHVtZTogbnVtYmVyKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUodm9sdW1lKTtcclxuICAgICAgICBpZiAodm9sdW1lID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcE11c2ljKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0b3BNdXNpYygpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wRWZmZWN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50RWZmZWN0SWQgPCAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEVmZmVjdCh0aGlzLl9jdXJyZW50RWZmZWN0SWQpO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRFZmZlY3RJZCA9IC0xO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwbGF5TXVzaWMoYXVkaW9jbGlwOiBjYy5BdWRpb0NsaXAsIGxvb3A6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9jdXJyZW50TXVzaWNDYWNoZVVybCA9IGF1ZGlvY2xpcC5uYXRpdmVVcmw7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudE11c2ljSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWMoYXVkaW9jbGlwLCBsb29wKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRGaW5pc2hDYWxsYmFjayh0aGlzLl9jdXJyZW50TXVzaWNJZCAsICgpID0+e1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50TXVzaWNDYWNoZVVybCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRNdXNpY0lkID0gLTE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheU11c2ljU3luYyhwYXRoOiBzdHJpbmcsIGxvb3A6IGJvb2xlYW4pIHtcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChwYXRoLCBjYy5BdWRpb0NsaXAsIChlcnI6IEVycm9yLCBhdWRpb2NsaXA6IGNjLkF1ZGlvQ2xpcCkgPT57XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGJiLmxvZ0UoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucGxheU11c2ljKGF1ZGlvY2xpcCwgbG9vcClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwbGF5RWZmZWN0KGF1ZGlvY2xpcDogY2MuQXVkaW9DbGlwLCBpbW1lZGlhdGVseTogYm9vbGVhbiwgc3luYzogYm9vbGVhbikge1xyXG4gICAgICAgIGlmIChpbW1lZGlhdGVseSkge1xyXG4gICAgICAgICAgICB0aGlzLl9wbGF5RWZmZWN0KGF1ZGlvY2xpcCwgc3luYyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lZmZlY3RzLnB1c2goYXVkaW9jbGlwKTtcclxuICAgICAgICB0aGlzLl9wbGF5RWZmZWN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheUVmZmVjdFN5bmMocGF0aDogc3RyaW5nLCBpbW1lZGlhdGVseTogYm9vbGVhbikge1xyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHBhdGgsIGNjLkF1ZGlvQ2xpcCwgKGVycjogRXJyb3IsIGF1ZGlvY2xpcDogY2MuQXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGJiLmxvZ0UoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucGxheUVmZmVjdChhdWRpb2NsaXAsIGltbWVkaWF0ZWx5LCB0cnVlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfcGxheUVmZmVjdChhdWRpb2NsaXA6IGNjLkF1ZGlvQ2xpcCA9IG51bGwsIHN5bmM6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGlmIChhdWRpb2NsaXApIHtcclxuICAgICAgICAgICAgdGhpcy5fcGxheShhdWRpb2NsaXApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBhdWRpb2NsaXBPYmplY3QgPSB0aGlzLmVmZmVjdHMuc2hpZnQoKTtcclxuICAgICAgICBpZiAoIWF1ZGlvY2xpcE9iamVjdCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3BsYXkoYXVkaW9jbGlwT2JqZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBfcGxheShhdWRpb2NsaXA6IGNjLkF1ZGlvQ2xpcCkge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRFZmZlY3RDYWNoZVVybCA9IGF1ZGlvY2xpcC5uYXRpdmVVcmw7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudEVmZmVjdElkID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChhdWRpb2NsaXAsIGZhbHNlKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRGaW5pc2hDYWxsYmFjayh0aGlzLl9jdXJyZW50RWZmZWN0SWQsICgpID0+e1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50RWZmZWN0SWQgPSAtMTtcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudEVmZmVjdENhY2hlVXJsID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5fcGxheUVmZmVjdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/scene/test_view/test_item_view.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '44f19MV3JFDjYqxsw2RRrDx', 'test_item_view');
// resources/scene/test_view/test_item_view.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var test_item_view = /** @class */ (function (_super) {
    __extends(test_item_view, _super);
    function test_item_view() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    test_item_view.prototype.onLoad = function () {
        cc.log("test_item_view  onLoad");
    };
    test_item_view.prototype.onEnter = function () {
        cc.log("test_item_view  onEnter");
    };
    test_item_view.prototype.onExit = function () {
        cc.log("test_item_view  onExit");
    };
    test_item_view.prototype.onDestroy = function () {
        cc.log("test_item_view  onDestroy");
    };
    test_item_view.prototype.onEnable = function () {
        cc.log("test_item_view  onEnable");
    };
    test_item_view.prototype.onDisable = function () {
        cc.log("test_item_view  onDisable");
    };
    test_item_view = __decorate([
        ccclass
    ], test_item_view);
    return test_item_view;
}(bb.SceneComponent));
exports.default = test_item_view;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxzY2VuZVxcdGVzdF92aWV3XFx0ZXN0X2l0ZW1fdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUE0QyxrQ0FBaUI7SUFBN0Q7O0lBMEJBLENBQUM7SUF6QkcsK0JBQU0sR0FBTjtRQUVJLEVBQUUsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBR0QsZ0NBQU8sR0FBUDtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsa0NBQVMsR0FBVDtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsa0NBQVMsR0FBVDtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBekJnQixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBMEJsQztJQUFELHFCQUFDO0NBMUJELEFBMEJDLENBMUIyQyxFQUFFLENBQUMsY0FBYyxHQTBCNUQ7a0JBMUJvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRlc3RfaXRlbV92aWV3IGV4dGVuZHMgYmIuU2NlbmVDb21wb25lbnQge1xyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBcclxuICAgICAgICBjYy5sb2coXCJ0ZXN0X2l0ZW1fdmlldyAgb25Mb2FkXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvbkVudGVyKCkge1xyXG4gICAgICAgIGNjLmxvZyhcInRlc3RfaXRlbV92aWV3ICBvbkVudGVyXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRXhpdCgpIHtcclxuICAgICAgICBjYy5sb2coXCJ0ZXN0X2l0ZW1fdmlldyAgb25FeGl0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBjYy5sb2coXCJ0ZXN0X2l0ZW1fdmlldyAgb25EZXN0cm95XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIGNjLmxvZyhcInRlc3RfaXRlbV92aWV3ICBvbkVuYWJsZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgY2MubG9nKFwidGVzdF9pdGVtX3ZpZXcgIG9uRGlzYWJsZVwiKTtcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/scene/test_uiloader/ResViewLogic.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '44274XXB0VGc5glMVRZ/3Ch', 'ResViewLogic');
// resources/scene/test_uiloader/ResViewLogic.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var SpriteCount = 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Helloworld = /** @class */ (function (_super) {
    __extends(Helloworld, _super);
    function Helloworld() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sprite = null;
        _this.spriteFrame = null;
        _this.button = null;
        _this.pefab = null;
        _this.audioClip = null;
        return _this;
    }
    Helloworld.prototype.start = function () {
        cc.log("\u5F53\u524D\u7F13\u5B58\u8D44\u6E90\uFF1A" + bb.UILoader.getCacheCount());
    };
    Helloworld.prototype._onBtnLoadPrefabTouchEnd = function (sender) {
        bb.ViewManager.showView(this.pefab.name, this.pefab, { "aaa": 11, ddd: "333" });
        // bb.ViewManager.showViewSync("Item",  {"aaa": 11, ddd:"333"}, this.node.parent, null);
    };
    Helloworld.prototype._onBtnLoadSyncPrefabTouchEnd = function (sender) {
        bb.ViewManager.showViewSync("ItemSync", { "aaa": 11, ddd: "333" });
    };
    Helloworld.prototype._onBtnMusicTouchEnd = function (sender) {
        bb.AudioManager.playMusic(this.audioClip, true);
    };
    Helloworld.prototype._onBtnMusicSyncTouchEnd = function (sender) {
        bb.AudioManager.playMusicSync("ball_hit_kartoon", true);
    };
    Helloworld.prototype._onBtnEffectTouchEnd = function (sender) {
        bb.AudioManager.playEffect(this.audioClip, false);
    };
    Helloworld.prototype._onBtnEffectSyncTouchEnd = function (sender) {
        bb.AudioManager.playEffectSync("ball_hit_kartoon", false);
    };
    Helloworld.prototype._onBtnUpdateSpriteTouchEnd = function (sender) {
        bb.UILoader.updateSpriteTexture(this.sprite.node, this.spriteFrame);
    };
    Helloworld.prototype._onBtnUpdateSpriteSyncTouchEnd = function (sender) {
        var _this = this;
        bb.UILoader.loadSpriteFrame("icon_ball_2_1", function (spriteFrame) {
            bb.UILoader.updateSpriteTexture(_this.sprite.node, spriteFrame);
        });
    };
    Helloworld.prototype._onBtnUpdateButtonSyncTouchEnd = function (sender) {
        var _this = this;
        var res = ["slider_level_barGreen", "slider_level_barOrange", "slider_level_barRed"];
        bb.UILoader.loadSpriteFrames(res, function (spriteFrames) {
            bb.UILoader.updateButtonTexture(_this.button.node, spriteFrames[0], spriteFrames[2], spriteFrames[1]);
        });
    };
    Helloworld.prototype._onBtnLoadStaticResTouchEnd = function (sender) {
        // TY-BGX
        bb.UILoader.loadStaticRes("TY-BGX", cc.SpriteFrame, "test1", function (spriteFrame111) {
            bb.UILoader.updateSpriteTexture(this.sprite.node, spriteFrame111);
        }.bind(this));
    };
    Helloworld.prototype._onBtnFreeStaticResTouchEnd = function (sender) {
        bb.UILoader.releaseStaticRes("test1");
    };
    __decorate([
        property(cc.Sprite)
    ], Helloworld.prototype, "sprite", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Helloworld.prototype, "spriteFrame", void 0);
    __decorate([
        property(cc.Button)
    ], Helloworld.prototype, "button", void 0);
    __decorate([
        property(cc.Prefab)
    ], Helloworld.prototype, "pefab", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Helloworld.prototype, "audioClip", void 0);
    Helloworld = __decorate([
        ccclass
    ], Helloworld);
    return Helloworld;
}(bb.BaseComponent));
exports.default = Helloworld;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxzY2VuZVxcdGVzdF91aWxvYWRlclxcUmVzVmlld0xvZ2ljLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQztBQUNkLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDO0lBQXdDLDhCQUFnQjtJQUF4RDtRQUFBLHFFQTBFQztRQXhFRyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBR3pCLGlCQUFXLEdBQW1CLElBQUksQ0FBQztRQUluQyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBR3pCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFHeEIsZUFBUyxHQUFpQixJQUFJLENBQUM7O0lBMkRuQyxDQUFDO0lBekRHLDBCQUFLLEdBQUw7UUFDRyxFQUFFLENBQUMsR0FBRyxDQUFDLCtDQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFJLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsNkNBQXdCLEdBQXhCLFVBQXlCLE1BQU07UUFDM0IsRUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7UUFDN0Usd0ZBQXdGO0lBQzVGLENBQUM7SUFFRCxpREFBNEIsR0FBNUIsVUFBNkIsTUFBTTtRQUMvQixFQUFFLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUcsRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCx3Q0FBbUIsR0FBbkIsVUFBb0IsTUFBTTtRQUN0QixFQUFFLENB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dXJjZXNDb250ZW50IjpbIlxyXG52YXIgU3ByaXRlQ291bnQgPSAwO1xyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVsbG93b3JsZCBleHRlbmRzIGJiLkJhc2VDb21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHNwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBzcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgYnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgYXVkaW9DbGlwOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgIGNjLmxvZyhg5b2T5YmN57yT5a2Y6LWE5rqQ77yaJHsgYmIuVUlMb2FkZXIuZ2V0Q2FjaGVDb3VudCgpfWApO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkJ0bkxvYWRQcmVmYWJUb3VjaEVuZChzZW5kZXIpIHtcclxuICAgICAgICBiYi5WaWV3TWFuYWdlci5zaG93Vmlldyh0aGlzLnBlZmFiLm5hbWUsIHRoaXMucGVmYWIsIHtcImFhYVwiOiAxMSwgZGRkOlwiMzMzXCJ9KTtcclxuICAgICAgICAvLyBiYi5WaWV3TWFuYWdlci5zaG93Vmlld1N5bmMoXCJJdGVtXCIsICB7XCJhYWFcIjogMTEsIGRkZDpcIjMzM1wifSwgdGhpcy5ub2RlLnBhcmVudCwgbnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uQnRuTG9hZFN5bmNQcmVmYWJUb3VjaEVuZChzZW5kZXIpIHtcclxuICAgICAgICBiYi5WaWV3TWFuYWdlci5zaG93Vmlld1N5bmMoXCJJdGVtU3luY1wiLCAge1wiYWFhXCI6IDExLCBkZGQ6XCIzMzNcIn0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkJ0bk11c2ljVG91Y2hFbmQoc2VuZGVyKSB7XHJcbiAgICAgICAgYmIuQXVkaW9NYW5hZ2VyLnBsYXlNdXNpYyh0aGlzLmF1ZGlvQ2xpcCwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uQnRuTXVzaWNTeW5jVG91Y2hFbmQoc2VuZGVyKSB7XHJcbiAgICAgICAgYmIuQXVkaW9NYW5hZ2VyLnBsYXlNdXNpY1N5bmMoXCJiYWxsX2hpdF9rYXJ0b29uXCIsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkJ0bkVmZmVjdFRvdWNoRW5kKHNlbmRlcikge1xyXG4gICAgICAgIGJiLkF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0KHRoaXMuYXVkaW9DbGlwLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uQnRuRWZmZWN0U3luY1RvdWNoRW5kKHNlbmRlcikge1xyXG4gICAgICAgIGJiLkF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0U3luYyhcImJhbGxfaGl0X2thcnRvb25cIiwgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkJ0blVwZGF0ZVNwcml0ZVRvdWNoRW5kKHNlbmRlcikge1xyXG4gICAgICAgIGJiLlVJTG9hZGVyLnVwZGF0ZVNwcml0ZVRleHR1cmUodGhpcy5zcHJpdGUubm9kZSwgdGhpcy5zcHJpdGVGcmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uQnRuVXBkYXRlU3ByaXRlU3luY1RvdWNoRW5kKHNlbmRlcikge1xyXG4gICAgICAgIGJiLlVJTG9hZGVyLmxvYWRTcHJpdGVGcmFtZShcImljb25fYmFsbF8yXzFcIiwgKHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIGJiLlVJTG9hZGVyLnVwZGF0ZVNwcml0ZVRleHR1cmUodGhpcy5zcHJpdGUubm9kZSwgc3ByaXRlRnJhbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkJ0blVwZGF0ZUJ1dHRvblN5bmNUb3VjaEVuZChzZW5kZXIpIHtcclxuICAgICAgICBsZXQgcmVzID0gW1wic2xpZGVyX2xldmVsX2JhckdyZWVuXCIsIFwic2xpZGVyX2xldmVsX2Jhck9yYW5nZVwiLCBcInNsaWRlcl9sZXZlbF9iYXJSZWRcIl07XHJcbiAgICAgICAgYmIuVUlMb2FkZXIubG9hZFNwcml0ZUZyYW1lcyhyZXMsIChzcHJpdGVGcmFtZXMpID0+IHtcclxuICAgICAgICAgICAgYmIuVUlMb2FkZXIudXBkYXRlQnV0dG9uVGV4dHVyZSh0aGlzLmJ1dHRvbi5ub2RlLCBzcHJpdGVGcmFtZXNbMF0sIHNwcml0ZUZyYW1lc1syXSwgc3ByaXRlRnJhbWVzWzFdKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIF9vbkJ0bkxvYWRTdGF0aWNSZXNUb3VjaEVuZChzZW5kZXIpIHtcclxuICAgICAgICAvLyBUWS1CR1hcclxuICAgICAgICBiYi5VSUxvYWRlci5sb2FkU3RhdGljUmVzKFwiVFktQkdYXCIsIGNjLlNwcml0ZUZyYW1lLCBcInRlc3QxXCIsIGZ1bmN0aW9uKHNwcml0ZUZyYW1lMTExKSB7XHJcbiAgICAgICAgICAgIGJiLlVJTG9hZGVyLnVwZGF0ZVNwcml0ZVRleHR1cmUodGhpcy5zcHJpdGUubm9kZSwgc3ByaXRlRnJhbWUxMTEpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uQnRuRnJlZVN0YXRpY1Jlc1RvdWNoRW5kKHNlbmRlcikge1xyXG4gICAgICAgIGJiLlVJTG9hZGVyLnJlbGVhc2VTdGF0aWNSZXMoXCJ0ZXN0MVwiKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/scene/test_view/test_view_1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e9010pMtStKGYeZZN6n/3D6', 'test_view_1');
// resources/scene/test_view/test_view_1.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var test_view_1 = /** @class */ (function (_super) {
    __extends(test_view_1, _super);
    function test_view_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    test_view_1.prototype.onLoad = function () {
    };
    test_view_1.prototype.onEnter = function () {
        // for(let i = 0; i < 5; i++) {
        //     bb.ViewManager.showItemSync("test_scene/Item_View_1", {}, this.node, this.viewCtrl, () => {});
        // }
    };
    test_view_1.prototype._onBtnTouchEnd = function (sender) {
        bb.ViewManager.showSubViewSync("scene/test_view/VIEW_2", {}, function (viewCtrl) {
            // this.viewCtrl.destroyNode();
        }.bind(this));
        bb.ViewManager.showSubViewSync("scene/test_view/VIEW_3", {}, function (viewCtrl) {
            // this.viewCtrl.destroyNode();
        }.bind(this));
    };
    test_view_1 = __decorate([
        ccclass
    ], test_view_1);
    return test_view_1;
}(bb.BaseComponent));
exports.default = test_view_1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxzY2VuZVxcdGVzdF92aWV3XFx0ZXN0X3ZpZXdfMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUF5QywrQkFBZ0I7SUFBekQ7O0lBdUJBLENBQUM7SUF0QkcsNEJBQU0sR0FBTjtJQUVBLENBQUM7SUFHRCw2QkFBTyxHQUFQO1FBQ0ksK0JBQStCO1FBQy9CLHFHQUFxRztRQUNyRyxJQUFJO0lBRVIsQ0FBQztJQUVELG9DQUFjLEdBQWQsVUFBZSxNQUFNO1FBRWxCLEVBQUUsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLHdCQUF3QixFQUFFLEVBQUUsRUFBRSxVQUFTLFFBQVE7WUFDMUUsK0JBQStCO1FBQ25DLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUVkLEVBQUUsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLHdCQUF3QixFQUFFLEVBQUUsRUFBRSxVQUFTLFFBQVE7WUFDN0UsK0JBQStCO1FBQy9CLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBdEJnQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBdUIvQjtJQUFELGtCQUFDO0NBdkJELEFBdUJDLENBdkJ3QyxFQUFFLENBQUMsYUFBYSxHQXVCeEQ7a0JBdkJvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRlc3Rfdmlld18xIGV4dGVuZHMgYmIuQmFzZUNvbXBvbmVudCB7XHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uRW50ZXIoKSB7XHJcbiAgICAgICAgLy8gZm9yKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgICAgIC8vICAgICBiYi5WaWV3TWFuYWdlci5zaG93SXRlbVN5bmMoXCJ0ZXN0X3NjZW5lL0l0ZW1fVmlld18xXCIsIHt9LCB0aGlzLm5vZGUsIHRoaXMudmlld0N0cmwsICgpID0+IHt9KTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgX29uQnRuVG91Y2hFbmQoc2VuZGVyKSB7XHJcbiAgICAgICBcclxuICAgICAgIGJiLlZpZXdNYW5hZ2VyLnNob3dTdWJWaWV3U3luYyhcInNjZW5lL3Rlc3Rfdmlldy9WSUVXXzJcIiwge30sIGZ1bmN0aW9uKHZpZXdDdHJsKSB7XHJcbiAgICAgICAgICAgLy8gdGhpcy52aWV3Q3RybC5kZXN0cm95Tm9kZSgpO1xyXG4gICAgICAgfS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICBiYi5WaWV3TWFuYWdlci5zaG93U3ViVmlld1N5bmMoXCJzY2VuZS90ZXN0X3ZpZXcvVklFV18zXCIsIHt9LCBmdW5jdGlvbih2aWV3Q3RybCkge1xyXG4gICAgICAgIC8vIHRoaXMudmlld0N0cmwuZGVzdHJveU5vZGUoKTtcclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/scene/test_view/test_view_3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '88199ZYA9lKAa38v+XasKnC', 'test_view_3');
// resources/scene/test_view/test_view_3.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var test_view_3 = /** @class */ (function (_super) {
    __extends(test_view_3, _super);
    function test_view_3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    test_view_3.prototype.onLoad = function () {
        //    this.scheduleOnce(() => {
        //        bb.SceneManager.loadScene("test_scene4", {a: "100", b: "2000"});
        //        //  bb.ViewManager.popView(3);
        //    }, 5);
    };
    test_view_3.prototype._onBtnTouchEnd = function (sender) {
        // this.viewCtrl
        //   bb.ViewManager.showViewSync("test_scene/VIEW_3", {}, function(viewCtrl) {
        //        this.viewCtrl.destroyNode();
        //   }.bind(this));
        // bb.ViewManager.popView(2);
        this.viewCtrl.destroyNode();
        // this.viewCtrl.popView(2);
    };
    test_view_3 = __decorate([
        ccclass
    ], test_view_3);
    return test_view_3;
}(bb.BaseComponent));
exports.default = test_view_3;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxzY2VuZVxcdGVzdF92aWV3XFx0ZXN0X3ZpZXdfMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUF5QywrQkFBZ0I7SUFBekQ7O0lBaUJBLENBQUM7SUFoQkcsNEJBQU0sR0FBTjtRQUNBLCtCQUErQjtRQUMvQiwwRUFBMEU7UUFDMUUsd0NBQXdDO1FBQ3hDLFlBQVk7SUFDWixDQUFDO0lBRUQsb0NBQWMsR0FBZCxVQUFlLE1BQU07UUFDbEIsZ0JBQWdCO1FBQ25CLDhFQUE4RTtRQUM5RSxzQ0FBc0M7UUFDdEMsbUJBQW1CO1FBQ2YsNkJBQTZCO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0IsNEJBQTRCO0lBQ2hDLENBQUM7SUFoQmlCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FpQi9CO0lBQUQsa0JBQUM7Q0FqQkQsQUFpQkMsQ0FqQndDLEVBQUUsQ0FBQyxhQUFhLEdBaUJ4RDtrQkFqQm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdGVzdF92aWV3XzMgZXh0ZW5kcyBiYi5CYXNlQ29tcG9uZW50IHtcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAvLyAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgYmIuU2NlbmVNYW5hZ2VyLmxvYWRTY2VuZShcInRlc3Rfc2NlbmU0XCIsIHthOiBcIjEwMFwiLCBiOiBcIjIwMDBcIn0pO1xyXG4gICAgLy8gICAgICAgIC8vICBiYi5WaWV3TWFuYWdlci5wb3BWaWV3KDMpO1xyXG4gICAgLy8gICAgfSwgNSk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uQnRuVG91Y2hFbmQoc2VuZGVyKSB7XHJcbiAgICAgICAvLyB0aGlzLnZpZXdDdHJsXHJcbiAgICAvLyAgIGJiLlZpZXdNYW5hZ2VyLnNob3dWaWV3U3luYyhcInRlc3Rfc2NlbmUvVklFV18zXCIsIHt9LCBmdW5jdGlvbih2aWV3Q3RybCkge1xyXG4gICAgLy8gICAgICAgIHRoaXMudmlld0N0cmwuZGVzdHJveU5vZGUoKTtcclxuICAgIC8vICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICAvLyBiYi5WaWV3TWFuYWdlci5wb3BWaWV3KDIpO1xyXG4gICAgICAgIHRoaXMudmlld0N0cmwuZGVzdHJveU5vZGUoKTtcclxuICAgICAgIC8vIHRoaXMudmlld0N0cmwucG9wVmlldygyKTtcclxuICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/scene/test_view/test_view_2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3ff6dTSubdBVZfl+NrXUwms', 'test_view_2');
// resources/scene/test_view/test_view_2.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var test_view_2 = /** @class */ (function (_super) {
    __extends(test_view_2, _super);
    function test_view_2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    test_view_2.prototype.onLoad = function () {
    };
    test_view_2.prototype.onEnter = function () {
        //   for(let i = 0; i < 5; i++) {
        //       bb.ViewManager.showItemSync("test_scene/Item_View_1", {}, this.node, this.viewCtrl, () => {});
        //   }
    };
    test_view_2.prototype._onBtnTouchEnd = function (sender) {
        // this.viewCtrl.destroyNode();
        // bb.ViewManager.showSubViewSync("test_scene/VIEW_3", {}, function(viewCtrl) {
        //    // this.viewCtrl.destroyNode();
        // }.bind(this));
    };
    test_view_2 = __decorate([
        ccclass
    ], test_view_2);
    return test_view_2;
}(bb.BaseComponent));
exports.default = test_view_2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxzY2VuZVxcdGVzdF92aWV3XFx0ZXN0X3ZpZXdfMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUF5QywrQkFBZ0I7SUFBekQ7O0lBaUJBLENBQUM7SUFoQkcsNEJBQU0sR0FBTjtJQUVBLENBQUM7SUFFRCw2QkFBTyxHQUFQO1FBQ0UsaUNBQWlDO1FBQ2pDLHVHQUF1RztRQUN2RyxNQUFNO0lBQ1IsQ0FBQztJQUVELG9DQUFjLEdBQWQsVUFBZSxNQUFNO1FBQ2pCLCtCQUErQjtRQUNqQywrRUFBK0U7UUFDL0UscUNBQXFDO1FBQ3JDLGlCQUFpQjtJQUNwQixDQUFDO0lBaEJpQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBaUIvQjtJQUFELGtCQUFDO0NBakJELEFBaUJDLENBakJ3QyxFQUFFLENBQUMsYUFBYSxHQWlCeEQ7a0JBakJvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRlc3Rfdmlld18yIGV4dGVuZHMgYmIuQmFzZUNvbXBvbmVudCB7XHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25FbnRlcigpIHtcclxuICAgICAgLy8gICBmb3IobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgIC8vICAgICAgIGJiLlZpZXdNYW5hZ2VyLnNob3dJdGVtU3luYyhcInRlc3Rfc2NlbmUvSXRlbV9WaWV3XzFcIiwge30sIHRoaXMubm9kZSwgdGhpcy52aWV3Q3RybCwgKCkgPT4ge30pO1xyXG4gICAgICAvLyAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfb25CdG5Ub3VjaEVuZChzZW5kZXIpIHtcclxuICAgICAgICAvLyB0aGlzLnZpZXdDdHJsLmRlc3Ryb3lOb2RlKCk7XHJcbiAgICAgIC8vIGJiLlZpZXdNYW5hZ2VyLnNob3dTdWJWaWV3U3luYyhcInRlc3Rfc2NlbmUvVklFV18zXCIsIHt9LCBmdW5jdGlvbih2aWV3Q3RybCkge1xyXG4gICAgICAvLyAgICAvLyB0aGlzLnZpZXdDdHJsLmRlc3Ryb3lOb2RlKCk7XHJcbiAgICAgIC8vIH0uYmluZCh0aGlzKSk7XHJcbiAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/scene/test_view/test_scene4.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '16f08EBJs1C5oeqemcCOgRk', 'test_scene4');
// resources/scene/test_view/test_scene4.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var test_scene4 = /** @class */ (function (_super) {
    __extends(test_scene4, _super);
    function test_scene4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    test_scene4.prototype.onLoad = function () {
        cc.log("test_scene4  onLoad");
    };
    test_scene4.prototype.onEnter = function () {
        cc.log("test_scene4  onEnter");
        cc.log(this.sceneCtrl.data);
    };
    test_scene4.prototype.onExit = function () {
        cc.log("test_scene4  onExit");
    };
    test_scene4.prototype.onEnable = function () {
        cc.log("test_scene4  onEnable");
    };
    test_scene4.prototype.onDisable = function () {
        cc.log("test_scene4  onDisable");
    };
    test_scene4 = __decorate([
        ccclass
    ], test_scene4);
    return test_scene4;
}(bb.SceneComponent));
exports.default = test_scene4;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxzY2VuZVxcdGVzdF92aWV3XFx0ZXN0X3NjZW5lNC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUF5QywrQkFBaUI7SUFBMUQ7O0lBcUJBLENBQUM7SUFwQkcsNEJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsNkJBQU8sR0FBUDtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUMvQixFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELDRCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELDhCQUFRLEdBQVI7UUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELCtCQUFTLEdBQVQ7UUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDckMsQ0FBQztJQXBCZ0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQXFCL0I7SUFBRCxrQkFBQztDQXJCRCxBQXFCQyxDQXJCd0MsRUFBRSxDQUFDLGNBQWMsR0FxQnpEO2tCQXJCb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB0ZXN0X3NjZW5lNCBleHRlbmRzIGJiLlNjZW5lQ29tcG9uZW50IHtcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgY2MubG9nKFwidGVzdF9zY2VuZTQgIG9uTG9hZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVudGVyKCkge1xyXG4gICAgICAgIGNjLmxvZyhcInRlc3Rfc2NlbmU0ICBvbkVudGVyXCIpO1xyXG4gICAgICAgIGNjLmxvZyh0aGlzLnNjZW5lQ3RybC5kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkV4aXQoKSB7XHJcbiAgICAgICAgY2MubG9nKFwidGVzdF9zY2VuZTQgIG9uRXhpdFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICBjYy5sb2coXCJ0ZXN0X3NjZW5lNCAgb25FbmFibGVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIGNjLmxvZyhcInRlc3Rfc2NlbmU0ICBvbkRpc2FibGVcIik7XHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/scene/test_view/test_scene3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd83cfHFN6JMxbgbcS03l9jK', 'test_scene3');
// resources/scene/test_view/test_scene3.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var test_scene3 = /** @class */ (function (_super) {
    __extends(test_scene3, _super);
    function test_scene3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prefab = null;
        return _this;
    }
    test_scene3.prototype.onLoad = function () {
        bb.Localization.init();
        cc.log("test_scene3  onLoad");
        bb.ViewManager.showView(this.prefab.name, this.prefab, { "aaa": 11, ddd: "333" });
    };
    test_scene3.prototype.start = function () {
        cc.log("test_scene3  onEnter");
        bb.log("hello world !!! ");
        var fun = function () {
            bb.log2("hello world !!! ");
        };
        bb.info("hello world !!! ");
        bb.warn("hello world !!! ");
        fun();
        bb.log(bb._T(1001));
        // 
    };
    test_scene3.prototype.onExit = function () {
        cc.log("test_scene3  onExit");
    };
    test_scene3.prototype.onDestroy = function () {
        cc.log("test_scene3  onDestroy");
    };
    test_scene3.prototype.onEnable = function () {
        cc.log("test_scene3  onEnable");
    };
    test_scene3.prototype.onDisable = function () {
        cc.log("test_scene3  onDisable");
    };
    __decorate([
        property(cc.Prefab)
    ], test_scene3.prototype, "prefab", void 0);
    test_scene3 = __decorate([
        ccclass
    ], test_scene3);
    return test_scene3;
}(bb.SceneComponent));
exports.default = test_scene3;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxzY2VuZVxcdGVzdF92aWV3XFx0ZXN0X3NjZW5lMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUF5QywrQkFBaUI7SUFBMUQ7UUFBQSxxRUF3Q0M7UUF0Q0csWUFBTSxHQUFjLElBQUksQ0FBQzs7SUFzQzdCLENBQUM7SUFyQ0csNEJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzlCLEVBQUUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFHRCwyQkFBSyxHQUFMO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRy9CLEVBQUUsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUMzQixJQUFJLEdBQUcsR0FBRztZQUNOLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUE7UUFDRCxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDNUIsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzVCLEdBQUcsRUFBRSxDQUFDO1FBQ04sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDcEIsR0FBRztJQUNQLENBQUM7SUFFRCw0QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCwrQkFBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCw4QkFBUSxHQUFSO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCwrQkFBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFyQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FDSztJQUZSLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0F3Qy9CO0lBQUQsa0JBQUM7Q0F4Q0QsQUF3Q0MsQ0F4Q3dDLEVBQUUsQ0FBQyxjQUFjLEdBd0N6RDtrQkF4Q29CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdGVzdF9zY2VuZTMgZXh0ZW5kcyBiYi5TY2VuZUNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBiYi5Mb2NhbGl6YXRpb24uaW5pdCgpO1xyXG4gICAgICAgIGNjLmxvZyhcInRlc3Rfc2NlbmUzICBvbkxvYWRcIik7XHJcbiAgICAgICAgYmIuVmlld01hbmFnZXIuc2hvd1ZpZXcodGhpcy5wcmVmYWIubmFtZSwgdGhpcy5wcmVmYWIsIHtcImFhYVwiOiAxMSwgZGRkOlwiMzMzXCJ9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY2MubG9nKFwidGVzdF9zY2VuZTMgIG9uRW50ZXJcIik7XHJcblxyXG4gICAgICBcclxuICAgICAgICBiYi5sb2coXCJoZWxsbyB3b3JsZCAhISEgXCIpO1xyXG4gICAgICAgIHZhciBmdW4gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgYmIubG9nMihcImhlbGxvIHdvcmxkICEhISBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJiLmluZm8oXCJoZWxsbyB3b3JsZCAhISEgXCIpO1xyXG4gICAgICAgIGJiLndhcm4oXCJoZWxsbyB3b3JsZCAhISEgXCIpO1xyXG4gICAgICAgIGZ1bigpO1xyXG4gICAgICAgIGJiLmxvZyhiYi5fVCgxMDAxKSk7XHJcbiAgICAgICAgLy8gXHJcbiAgICB9XHJcblxyXG4gICAgb25FeGl0KCkge1xyXG4gICAgICAgIGNjLmxvZyhcInRlc3Rfc2NlbmUzICBvbkV4aXRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGNjLmxvZyhcInRlc3Rfc2NlbmUzICBvbkRlc3Ryb3lcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgY2MubG9nKFwidGVzdF9zY2VuZTMgIG9uRW5hYmxlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICBjYy5sb2coXCJ0ZXN0X3NjZW5lMyAgb25EaXNhYmxlXCIpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/scene/test_uiloader/test_scene2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '84c3eC4wZ1E0L4Z9GtCEUgr', 'test_scene2');
// resources/scene/test_uiloader/test_scene2.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var SpriteCount = 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var test_scene2 = /** @class */ (function (_super) {
    __extends(test_scene2, _super);
    function test_scene2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // @property(cc.AudioClip)
    // audioclip: cc.AudioClip = null;
    test_scene2.prototype.start = function () {
        this.scheduleOnce(function () {
            bb.AudioManager.playEffectSync("ball_hit_kartoon", false);
            // bb.AudioManager.playEffect(this.audioclip, false);
        }, 5);
        this.scheduleOnce(function () {
            bb.AudioManager.playMusicSync("ball_hit_kartoon", false);
            // bb.AudioManager.playEffectSync("ball_hit_kartoon", false);
            // bb.AudioManager.playEffect(this.audioclip, false);
        }, 10);
    };
    test_scene2 = __decorate([
        ccclass
    ], test_scene2);
    return test_scene2;
}(cc.Component));
exports.default = test_scene2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxzY2VuZVxcdGVzdF91aWxvYWRlclxcdGVzdF9zY2VuZTIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDO0FBQ2QsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUM7SUFBeUMsK0JBQVk7SUFBckQ7O0lBbUJBLENBQUM7SUFsQkcsMEJBQTBCO0lBQzFCLGtDQUFrQztJQUVsQywyQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEVBQUUsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzNELHFEQUFxRDtRQUN4RCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFHTixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2IsRUFBRSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDM0QsNkRBQTZEO1lBQzVELHFEQUFxRDtRQUN6RCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDWCxDQUFDO0lBaEJnQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBbUIvQjtJQUFELGtCQUFDO0NBbkJELEFBbUJDLENBbkJ3QyxFQUFFLENBQUMsU0FBUyxHQW1CcEQ7a0JBbkJvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBTcHJpdGVDb3VudCA9IDA7XHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB0ZXN0X3NjZW5lMiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICAvLyBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgLy8gYXVkaW9jbGlwOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBiYi5BdWRpb01hbmFnZXIucGxheUVmZmVjdFN5bmMoXCJiYWxsX2hpdF9rYXJ0b29uXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAvLyBiYi5BdWRpb01hbmFnZXIucGxheUVmZmVjdCh0aGlzLmF1ZGlvY2xpcCwgZmFsc2UpO1xyXG4gICAgICAgIH0sIDUpOyBcclxuICAgICAgIFxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICBiYi5BdWRpb01hbmFnZXIucGxheU11c2ljU3luYyhcImJhbGxfaGl0X2thcnRvb25cIiwgZmFsc2UpO1xyXG4gICAgICAgICAgIC8vIGJiLkF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0U3luYyhcImJhbGxfaGl0X2thcnRvb25cIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAvLyBiYi5BdWRpb01hbmFnZXIucGxheUVmZmVjdCh0aGlzLmF1ZGlvY2xpcCwgZmFsc2UpO1xyXG4gICAgICAgIH0sIDEwKTsgXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/scene/test_uiloader/Item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5fcd9UdqDFP9q7NvpQDD0My', 'Item');
// resources/scene/test_uiloader/Item.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.pefab = null;
        return _this;
    }
    Item.prototype.onLoad = function () {
    };
    Item.prototype.onEnter = function () {
        cc.log("onEnter" + this.viewCtrl.data);
    };
    Item.prototype.onEnable = function () {
    };
    Item.prototype.start = function () {
        var _this = this;
        cc.log("start" + this.viewCtrl.data);
        // onLoad -> onEnable -> onEnter -> start
        cc.log("\u5F53\u524D\u7F13\u5B58\u8D44\u6E90\uFF1A" + bb.UILoader.getCacheCount());
        this.node.on(cc.Node.EventType.TOUCH_END, function () {
            _this.viewCtrl.destroyNode();
        });
    };
    __decorate([
        property(cc.Label)
    ], Item.prototype, "label", void 0);
    __decorate([
        property()
    ], Item.prototype, "text", void 0);
    __decorate([
        property(cc.Prefab)
    ], Item.prototype, "pefab", void 0);
    Item = __decorate([
        ccclass
    ], Item);
    return Item;
}(bb.BaseComponent));
exports.default = Item;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxzY2VuZVxcdGVzdF91aWxvYWRlclxcSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUFrQyx3QkFBZ0I7SUFBbEQ7UUFBQSxxRUE4QkM7UUEzQkcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDO1FBR3ZCLFdBQUssR0FBYyxJQUFJLENBQUM7O0lBcUI1QixDQUFDO0lBbkJHLHFCQUFNLEdBQU47SUFFQSxDQUFDO0lBRUQsc0JBQU8sR0FBUDtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDM0MsQ0FBQztJQUVELHVCQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsb0JBQUssR0FBTDtRQUFBLGlCQU9DO1FBTkcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNyQyx5Q0FBeUM7UUFDekMsRUFBRSxDQUFDLEdBQUcsQ0FBQywrQ0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBSSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQ3RDLEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBMUJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7dUNBQ0k7SUFHdkI7UUFEQyxRQUFRLEVBQUU7c0NBQ1k7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt1Q0FDSTtJQVRQLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0E4QnhCO0lBQUQsV0FBQztDQTlCRCxBQThCQyxDQTlCaUMsRUFBRSxDQUFDLGFBQWEsR0E4QmpEO2tCQTlCb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW0gZXh0ZW5kcyBiYi5CYXNlQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25FbnRlcigpIHtcclxuICAgICAgICBjYy5sb2coXCJvbkVudGVyXCIgKyAgdGhpcy52aWV3Q3RybC5kYXRhKVxyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBjYy5sb2coXCJzdGFydFwiICsgIHRoaXMudmlld0N0cmwuZGF0YSlcclxuICAgICAgICAvLyBvbkxvYWQgLT4gb25FbmFibGUgLT4gb25FbnRlciAtPiBzdGFydFxyXG4gICAgICAgIGNjLmxvZyhg5b2T5YmN57yT5a2Y6LWE5rqQ77yaJHsgYmIuVUlMb2FkZXIuZ2V0Q2FjaGVDb3VudCgpfWApO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy52aWV3Q3RybC5kZXN0cm95Tm9kZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/model/BaseModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a34b0F3+BZLM54Tkvj6C1Bj', 'BaseModel');
// framework/model/BaseModel.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseModel = /** @class */ (function () {
    function BaseModel() {
    }
    BaseModel.prototype.initModel = function () {
        // TODO 由子类实现
    };
    BaseModel.prototype.saveItem = function (key, item) {
        if (key !== null && item !== null) {
            cc.sys.localStorage.setItem(key, item);
        }
    };
    BaseModel.prototype.getItem = function (key) {
        if (key !== null) {
            return cc.sys.localStorage.getItem(key);
        }
        return undefined;
    };
    BaseModel.prototype.removeItem = function (key) {
        if (key !== null) {
            cc.sys.localStorage.removeItem(key);
        }
    };
    return BaseModel;
}());
exports.default = BaseModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxtb2RlbFxcQmFzZU1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQXVCQSxDQUFDO0lBdEJHLDZCQUFTLEdBQVQ7UUFDSSxhQUFhO0lBQ2pCLENBQUM7SUFFRCw0QkFBUSxHQUFSLFVBQVMsR0FBVyxFQUFFLElBQVM7UUFDM0IsSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDL0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUMxQztJQUNMLENBQUM7SUFFRCwyQkFBTyxHQUFQLFVBQVEsR0FBVztRQUNmLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtZQUNkLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzNDO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUVELDhCQUFVLEdBQVYsVUFBVyxHQUFXO1FBQ2xCLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtZQUNkLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN2QztJQUNMLENBQUM7SUFDTCxnQkFBQztBQUFELENBdkJBLEFBdUJDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlTW9kZWwge1xyXG4gICAgaW5pdE1vZGVsKCkge1xyXG4gICAgICAgIC8vIFRPRE8g55Sx5a2Q57G75a6e546wXHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZUl0ZW0oa2V5OiBzdHJpbmcsIGl0ZW06IGFueSkge1xyXG4gICAgICAgIGlmIChrZXkgIT09IG51bGwgJiYgaXRlbSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbShrZXk6IHN0cmluZykge1xyXG4gICAgICAgIGlmIChrZXkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoa2V5ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/pool/PoolManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0af55nLPbhJ2LozX5Ss3/Jw', 'PoolManager');
// framework/pool/PoolManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserPool_1 = require("./UserPool");
// 缓存管理池
var PoolManager = /** @class */ (function () {
    function PoolManager() {
        this._pool_map = {};
    }
    PoolManager.getInstance = function () {
        if (PoolManager._instance == null) {
            PoolManager._instance = new PoolManager();
        }
        return PoolManager._instance;
    };
    PoolManager.prototype.addPool = function (name, pool) {
        if (this._pool_map[name]) {
            return;
        }
        this._pool_map[name] = pool;
    };
    PoolManager.prototype.getPool = function (name) {
        return this._pool_map[name];
    };
    PoolManager.prototype.getPoolByName = function (name, prefab) {
        if (!this._pool_map[name]) {
            this._pool_map[name] = new UserPool_1.default(prefab, 3);
        }
        return this._pool_map[name];
    };
    PoolManager.prototype.getPoolNode = function (name) {
        if (!this._pool_map[name]) {
            return null;
        }
        return this._pool_map[name].get();
    };
    PoolManager.prototype.putPoolNode = function (name, target) {
        if (!this._pool_map[name]) {
            return;
        }
        this._pool_map[name].put(target);
    };
    PoolManager.prototype.removePool = function (name) {
        if (!this._pool_map[name]) {
            return;
        }
        this._pool_map[name] = null;
        delete this._pool_map[name];
    };
    PoolManager._instance = null;
    return PoolManager;
}());
exports.default = PoolManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxwb29sXFxQb29sTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFrQztBQUVsQyxRQUFRO0FBSVI7SUFBQTtRQUNJLGNBQVMsR0FBOEIsRUFBRSxDQUFDO0lBaUQ5QyxDQUFDO0lBOUNVLHVCQUFXLEdBQWxCO1FBQ0ksSUFBSSxXQUFXLENBQUMsU0FBUyxJQUFJLElBQUksRUFBRTtZQUMvQixXQUFXLENBQUMsU0FBUyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7U0FDN0M7UUFDRCxPQUFPLFdBQVcsQ0FBQyxTQUFTLENBQUM7SUFDakMsQ0FBQztJQUVELDZCQUFPLEdBQVAsVUFBUSxJQUFZLEVBQUUsSUFBYztRQUNoQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdEIsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQUVELDZCQUFPLEdBQVAsVUFBUSxJQUFZO1FBQ2hCLE9BQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsbUNBQWEsR0FBYixVQUFjLElBQVksRUFBRSxNQUFpQjtRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksa0JBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDbEQ7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELGlDQUFXLEdBQVgsVUFBWSxJQUFZO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3ZCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxPQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVELGlDQUFXLEdBQVgsVUFBWSxJQUFZLEVBQUUsTUFBZTtRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN2QixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsZ0NBQVUsR0FBVixVQUFXLElBQVk7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdkIsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDNUIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUE5Q00scUJBQVMsR0FBZ0IsSUFBSSxDQUFDO0lBK0N6QyxrQkFBQztDQWxERCxBQWtEQyxJQUFBO2tCQWxEb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyUG9vbCBmcm9tIFwiLi9Vc2VyUG9vbFwiO1xyXG5cclxuLy8g57yT5a2Y566h55CG5rGgXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvb2xNYW5hZ2VyICB7XHJcbiAgICBfcG9vbF9tYXA6IHtba2V5OiBzdHJpbmddOiBVc2VyUG9vbH0gPSB7fTtcclxuXHJcbiAgICBzdGF0aWMgX2luc3RhbmNlOiBQb29sTWFuYWdlciA9IG51bGw7XHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogUG9vbE1hbmFnZXIge1xyXG4gICAgICAgIGlmIChQb29sTWFuYWdlci5faW5zdGFuY2UgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBQb29sTWFuYWdlci5faW5zdGFuY2UgPSBuZXcgUG9vbE1hbmFnZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFBvb2xNYW5hZ2VyLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRQb29sKG5hbWU6IHN0cmluZywgcG9vbDogVXNlclBvb2wpIHtcclxuICAgICAgICBpZiAodGhpcy5fcG9vbF9tYXBbbmFtZV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9wb29sX21hcFtuYW1lXSA9IHBvb2w7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UG9vbChuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gIHRoaXMuX3Bvb2xfbWFwW25hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBvb2xCeU5hbWUobmFtZTogc3RyaW5nLCBwcmVmYWI6IGNjLlByZWZhYikge1xyXG4gICAgICAgIGlmICghdGhpcy5fcG9vbF9tYXBbbmFtZV0pIHtcclxuICAgICAgICAgICAgdGhpcy5fcG9vbF9tYXBbbmFtZV0gPSBuZXcgVXNlclBvb2wocHJlZmFiLCAzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bvb2xfbWFwW25hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBvb2xOb2RlKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICghdGhpcy5fcG9vbF9tYXBbbmFtZV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAgdGhpcy5fcG9vbF9tYXBbbmFtZV0uZ2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHV0UG9vbE5vZGUobmFtZTogc3RyaW5nLCB0YXJnZXQ6IGNjLk5vZGUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3Bvb2xfbWFwW25hbWVdKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcG9vbF9tYXBbbmFtZV0ucHV0KHRhcmdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlUG9vbChuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3Bvb2xfbWFwW25hbWVdKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcG9vbF9tYXBbbmFtZV0gPSBudWxsO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLl9wb29sX21hcFtuYW1lXTtcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/model/ObjectManaget.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dbc0d5QN11HtayLEu45yAwI', 'ObjectManaget');
// framework/model/ObjectManaget.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @module ObjectManager
 * @deprecated 数据模型管理器
 * @exports
 */
var ObjectManager = /** @class */ (function () {
    function ObjectManager() {
    }
    ObjectManager.getInstance = function () {
        if (ObjectManager.singleInstance == null) {
            ObjectManager.singleInstance = new ObjectManager();
        }
        return ObjectManager.singleInstance;
    };
    /**
     * @function
     * @param {number} name 数据模型的名字
     * @param {typeof bb.BaseModel} model 数据模型
     */
    ObjectManager.prototype.addModel = function (name, model) {
        if (this[name]) {
            return;
        }
        this[name] = new model();
        this[name].initModel();
        return this[name];
    };
    ObjectManager.prototype.removeModel = function (name) {
        if (!this[name]) {
            return;
        }
        this[name] = null;
        delete this[name];
    };
    ObjectManager.prototype.getModelByName = function (name, model) {
        var ret = this[name];
        if (ret !== null && ret instanceof bb.BaseModel) {
            return ret;
        }
        this[name] = new model();
        this[name].initModel();
        return this[name];
    };
    ObjectManager.singleInstance = null;
    return ObjectManager;
}());
exports.default = ObjectManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxtb2RlbFxcT2JqZWN0TWFuYWdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0dBSUc7QUFDSDtJQUFBO0lBMENBLENBQUM7SUF4Q1UseUJBQVcsR0FBbEI7UUFDSSxJQUFJLGFBQWEsQ0FBQyxjQUFjLElBQUksSUFBSSxFQUFFO1lBQ3RDLGFBQWEsQ0FBQyxjQUFjLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztTQUN0RDtRQUNELE9BQU8sYUFBYSxDQUFDLGNBQWMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGdDQUFRLEdBQVIsVUFBUyxJQUFZLEVBQUUsS0FBMEI7UUFDN0MsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDWixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDdkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxJQUFZO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDYixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxzQ0FBYyxHQUFkLFVBQWUsSUFBWSxFQUFFLEtBQTBCO1FBQ25ELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQixJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksR0FBRyxZQUFZLEVBQUUsQ0FBQyxTQUFTLEVBQUU7WUFDN0MsT0FBTyxHQUFHLENBQUM7U0FDZDtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN2QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBdENNLDRCQUFjLEdBQWtCLElBQUksQ0FBQztJQXlDaEQsb0JBQUM7Q0ExQ0QsQUEwQ0MsSUFBQTtrQkExQ29CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyoqXHJcbiAqIEBtb2R1bGUgT2JqZWN0TWFuYWdlclxyXG4gKiBAZGVwcmVjYXRlZCDmlbDmja7mqKHlnovnrqHnkIblmahcclxuICogQGV4cG9ydHNcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdE1hbmFnZXIge1xyXG4gICAgc3RhdGljIHNpbmdsZUluc3RhbmNlOiBPYmplY3RNYW5hZ2VyID0gbnVsbDtcclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBPYmplY3RNYW5hZ2VyIHtcclxuICAgICAgICBpZiAoT2JqZWN0TWFuYWdlci5zaW5nbGVJbnN0YW5jZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIE9iamVjdE1hbmFnZXIuc2luZ2xlSW5zdGFuY2UgPSBuZXcgT2JqZWN0TWFuYWdlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gT2JqZWN0TWFuYWdlci5zaW5nbGVJbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBmdW5jdGlvblxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5hbWUg5pWw5o2u5qih5Z6L55qE5ZCN5a2XXHJcbiAgICAgKiBAcGFyYW0ge3R5cGVvZiBiYi5CYXNlTW9kZWx9IG1vZGVsIOaVsOaNruaooeWei1xyXG4gICAgICovXHJcbiAgICBhZGRNb2RlbChuYW1lOiBzdHJpbmcsIG1vZGVsOiB0eXBlb2YgYmIuQmFzZU1vZGVsKSB7XHJcbiAgICAgICAgaWYgKHRoaXNbbmFtZV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzW25hbWVdID0gbmV3IG1vZGVsKCk7XHJcbiAgICAgICAgdGhpc1tuYW1lXS5pbml0TW9kZWwoKTtcclxuICAgICAgICByZXR1cm4gdGhpc1tuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVNb2RlbChuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIXRoaXNbbmFtZV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzW25hbWVdID0gbnVsbDtcclxuICAgICAgICBkZWxldGUgdGhpc1tuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRNb2RlbEJ5TmFtZShuYW1lOiBzdHJpbmcsIG1vZGVsOiB0eXBlb2YgYmIuQmFzZU1vZGVsKTogYmIuQmFzZU1vZGVsIHtcclxuICAgICAgICBsZXQgcmV0ID0gdGhpc1tuYW1lXTtcclxuICAgICAgICBpZiAocmV0ICE9PSBudWxsICYmIHJldCBpbnN0YW5jZW9mIGJiLkJhc2VNb2RlbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzW25hbWVdID0gbmV3IG1vZGVsKCk7XHJcbiAgICAgICAgdGhpc1tuYW1lXS5pbml0TW9kZWwoKTtcclxuICAgICAgICByZXR1cm4gdGhpc1tuYW1lXTtcclxuICAgIH1cclxuXHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/pool/UserPool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '34c73lIfNNDMI/0ab4FL38K', 'UserPool');
// framework/pool/UserPool.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserPool = /** @class */ (function () {
    function UserPool(prefab, num) {
        this.countId = 0;
        this.pool = new Array();
        this.prefab = prefab;
        for (var i = 0; i < num; i++) {
            var node = void 0;
            if (cc["supportJit"]) {
                cc["supportJit"] = false;
                node = cc.instantiate(prefab);
                cc["supportJit"] = true;
            }
            else {
                // 如果是特殊的不支持 JIT 的平台，则不需要优化，也不能强制设置 cc.supportJit 为 true
                node = cc.instantiate(prefab);
            }
            node["poolId"] = ++this.countId;
            this.pool.push(node);
        }
    }
    /**
     * @description 从缓存池中 取出 一个 node 对象
     * @returns {cc.Node}  返回一个 node 对象
     */
    UserPool.prototype.get = function () {
        if (this.pool.length > 0) {
            var node = this.pool.shift();
            return node;
        }
        else {
            var node = void 0;
            if (cc["supportJit"]) {
                cc["supportJit"] = false;
                node = cc.instantiate(this.prefab);
                cc["supportJit"] = true;
            }
            else {
                // 如果是特殊的不支持 JIT 的平台，则不需要优化，也不能强制设置 cc.supportJit 为 true
                node = cc.instantiate(this.prefab);
            }
            node["poolId"] = ++this.countId;
            return node;
        }
    };
    /**
     * @description 回收一个node节点到缓存池中
     * @param target 回收的目标节点
     */
    UserPool.prototype.put = function (target) {
        target.stopAllActions();
        target.removeFromParent();
        if (this.pool.indexOf(target) >= 0) {
            return;
        }
        this.pool.push(target);
    };
    /**
     * @description 返回缓存池还有多少个对象可以用
     * @returns {Number} 缓存池还有多少个对象
     */
    UserPool.prototype.count = function () {
        return this.pool.length;
    };
    /**
     * @description 返回缓存池一共产生了多少个对象
     * @returns {Number} 缓存池一共产生了多少个对象
     */
    UserPool.prototype.size = function () {
        return this.countId;
    };
    /**
     * @description 清楚缓存池对象
     */
    UserPool.prototype.clear = function () {
        this.pool.forEach(function (target, index) {
            target.destroy();
        });
        this.pool = [];
    };
    return UserPool;
}());
exports.default = UserPool;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxwb29sXFxVc2VyUG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBS0ksa0JBQVksTUFBaUIsRUFBRSxHQUFXO1FBRmxDLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFHeEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEtBQUssRUFBVyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekIsSUFBSSxJQUFJLFNBQUEsQ0FBQztZQUNULElBQUksRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFO2dCQUNsQixFQUFFLENBQUMsWUFBWSxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDOUIsRUFBRSxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQzthQUMzQjtpQkFDSTtnQkFDRCx3REFBd0Q7Z0JBQ3hELElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2pDO1lBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QjtJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSCxzQkFBRyxHQUFIO1FBQ0ksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM3QixPQUFPLElBQUksQ0FBQztTQUNmO2FBQU07WUFDSCxJQUFJLElBQUksU0FBQSxDQUFDO1lBQ1QsSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQ2xCLEVBQUUsQ0FBQyxZQUFZLENBQUMsR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbkMsRUFBRSxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQzthQUMzQjtpQkFDSTtnQkFDRCx3REFBd0Q7Z0JBQ3hELElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN0QztZQUNELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDaEMsT0FBTyxJQUFJLENBQUM7U0FDZjtJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSCxzQkFBRyxHQUFILFVBQUksTUFBZTtRQUNmLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixNQUFNLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUMxQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNoQyxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsd0JBQUssR0FBTDtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7T0FHRztJQUNILHVCQUFJLEdBQUo7UUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBZSxFQUFFLEtBQWE7WUFDN0MsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQXRGQSxBQXNGQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlclBvb2wge1xyXG4gICAgcHJpdmF0ZSBwb29sIDogQXJyYXk8Y2MuTm9kZT47XHJcbiAgICBwcml2YXRlIHByZWZhYjogY2MuUHJlZmFiO1xyXG4gICAgcHJpdmF0ZSBjb3VudElkOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByZWZhYjogY2MuUHJlZmFiLCBudW06IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucG9vbCA9IG5ldyBBcnJheTxjYy5Ob2RlPigpO1xyXG4gICAgICAgIHRoaXMucHJlZmFiID0gcHJlZmFiO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBudW07IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbm9kZTtcclxuICAgICAgICAgICAgaWYgKGNjW1wic3VwcG9ydEppdFwiXSkge1xyXG4gICAgICAgICAgICAgICAgY2NbXCJzdXBwb3J0Sml0XCJdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIGNjW1wic3VwcG9ydEppdFwiXSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzmmK/nibnmrornmoTkuI3mlK/mjIEgSklUIOeahOW5s+WPsO+8jOWImeS4jemcgOimgeS8mOWMlu+8jOS5n+S4jeiDveW8uuWItuiuvue9riBjYy5zdXBwb3J0Sml0IOS4uiB0cnVlXHJcbiAgICAgICAgICAgICAgICBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBub2RlW1wicG9vbElkXCJdID0gKyt0aGlzLmNvdW50SWQ7XHJcbiAgICAgICAgICAgIHRoaXMucG9vbC5wdXNoKG5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiDku47nvJPlrZjmsaDkuK0g5Y+W5Ye6IOS4gOS4qiBub2RlIOWvueixoVxyXG4gICAgICogQHJldHVybnMge2NjLk5vZGV9ICDov5Tlm57kuIDkuKogbm9kZSDlr7nosaFcclxuICAgICAqL1xyXG4gICAgZ2V0KCk6IGNjLk5vZGUge1xyXG4gICAgICAgIGlmICh0aGlzLnBvb2wubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMucG9vbC5zaGlmdCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgbm9kZTtcclxuICAgICAgICAgICAgaWYgKGNjW1wic3VwcG9ydEppdFwiXSkge1xyXG4gICAgICAgICAgICAgICAgY2NbXCJzdXBwb3J0Sml0XCJdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgY2NbXCJzdXBwb3J0Sml0XCJdID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIOWmguaenOaYr+eJueauiueahOS4jeaUr+aMgSBKSVQg55qE5bmz5Y+w77yM5YiZ5LiN6ZyA6KaB5LyY5YyW77yM5Lmf5LiN6IO95by65Yi26K6+572uIGNjLnN1cHBvcnRKaXQg5Li6IHRydWVcclxuICAgICAgICAgICAgICAgIG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbm9kZVtcInBvb2xJZFwiXSA9ICsrdGhpcy5jb3VudElkO1xyXG4gICAgICAgICAgICByZXR1cm4gbm9kZTsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIOWbnuaUtuS4gOS4qm5vZGXoioLngrnliLDnvJPlrZjmsaDkuK1cclxuICAgICAqIEBwYXJhbSB0YXJnZXQg5Zue5pS255qE55uu5qCH6IqC54K5XHJcbiAgICAgKi9cclxuICAgIHB1dCh0YXJnZXQ6IGNjLk5vZGUpOiB2b2lkIHtcclxuICAgICAgICB0YXJnZXQuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0YXJnZXQucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgIGlmICh0aGlzLnBvb2wuaW5kZXhPZih0YXJnZXQpID49IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgdGhpcy5wb29sLnB1c2godGFyZ2V0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiDov5Tlm57nvJPlrZjmsaDov5jmnInlpJrlsJHkuKrlr7nosaHlj6/ku6XnlKhcclxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IOe8k+WtmOaxoOi/mOacieWkmuWwkeS4quWvueixoVxyXG4gICAgICovXHJcbiAgICBjb3VudCgpOiBudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9vbC5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24g6L+U5Zue57yT5a2Y5rGg5LiA5YWx5Lqn55Sf5LqG5aSa5bCR5Liq5a+56LGhXHJcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSDnvJPlrZjmsaDkuIDlhbHkuqfnlJ/kuoblpJrlsJHkuKrlr7nosaFcclxuICAgICAqL1xyXG4gICAgc2l6ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvdW50SWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24g5riF5qWa57yT5a2Y5rGg5a+56LGhXHJcbiAgICAgKi9cclxuICAgIGNsZWFyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucG9vbC5mb3JFYWNoKCh0YXJnZXQ6IGNjLk5vZGUsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgdGFyZ2V0LmRlc3Ryb3koKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBvb2wgPSBbXTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/model/BaseVO.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '52531OOp2BK+51Byu8LDLDC', 'BaseVO');
// framework/model/BaseVO.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseVO = /** @class */ (function () {
    function BaseVO() {
    }
    BaseVO.prototype.parseData = function (data) {
        if (!data) {
            return;
        }
        for (var key in data) {
            if (this[key] === undefined) {
                continue;
            }
            this[key] = data[key];
        }
    };
    BaseVO.prototype.getFormatStr = function () {
        return JSON.stringify(this);
    };
    return BaseVO;
}());
exports.default = BaseVO;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxtb2RlbFxcQmFzZVZPLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQW9CQSxDQUFDO0lBbEJHLDBCQUFTLEdBQVQsVUFBVSxJQUFZO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDUCxPQUFPO1NBQ1Y7UUFFRCxLQUFLLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtZQUNsQixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxTQUFTLEVBQUU7Z0JBQ3pCLFNBQVM7YUFDWjtZQUVELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDekI7SUFDTCxDQUFDO0lBR0QsNkJBQVksR0FBWjtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0wsYUFBQztBQUFELENBcEJBLEFBb0JDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlVk8ge1xyXG4gICAgXHJcbiAgICBwYXJzZURhdGEoZGF0YTogT2JqZWN0KSB7XHJcbiAgICAgICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzW2tleV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IGRhdGFba2V5XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBnZXRGb3JtYXRTdHIoKSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMpO1xyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/view/base/BaseViewCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f0349vR6JlJAow86GoOQtmi', 'BaseViewCtrl');
// framework/view/base/BaseViewCtrl.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UIAction_1 = require("./UIAction");
var BaseViewCtrl = /** @class */ (function () {
    function BaseViewCtrl() {
    }
    BaseViewCtrl.prototype.setVisible = function (visible, cleanup) {
        if (cleanup === void 0) { cleanup = true; }
        if (visible) {
        }
    };
    BaseViewCtrl.prototype.removeUICtrl = function (ctrl, cleanup) {
        if (cleanup === void 0) { cleanup = false; }
        for (var i = this.subUIStack.length - 1; i >= 0; i--) {
            if (this.subUIStack[i] === ctrl) {
                if (cc.isValid(this.subUIStack[i].rootView)) {
                    this.subUIStack[i].closeUI(cleanup);
                }
                this.subUIStack.splice(i, 1);
            }
        }
    };
    BaseViewCtrl.prototype.closeUI = function (cleanup, action) {
        if (cleanup === void 0) { cleanup = false; }
        var destroyFun = function () {
            if (this.parentUICtrl) {
                this.parentUICtrl.removeUICtrlFromParent(this);
            }
            cleanup && cc.assetManager.releaseAsset(this.rootPrefab);
            this.rootView.destroy();
        }.bind(this);
        if (action) {
            UIAction_1.default.getInstance().runViewOutAction(action, this.rootView, function () {
                destroyFun();
            });
            return;
        }
        destroyFun();
    };
    return BaseViewCtrl;
}());
exports.default = BaseViewCtrl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx2aWV3XFxiYXNlXFxCYXNlVmlld0N0cmwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBa0M7QUFFbEM7SUFBQTtJQXlDQSxDQUFDO0lBakNHLGlDQUFVLEdBQVYsVUFBVyxPQUFnQixFQUFFLE9BQXVCO1FBQXZCLHdCQUFBLEVBQUEsY0FBdUI7UUFDaEQsSUFBSSxPQUFPLEVBQUU7U0FFWjtJQUNMLENBQUM7SUFFRCxtQ0FBWSxHQUFaLFVBQWEsSUFBZSxFQUFFLE9BQXdCO1FBQXhCLHdCQUFBLEVBQUEsZUFBd0I7UUFDbEQsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFO2dCQUM3QixJQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ3ZDO2dCQUNELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNoQztTQUNKO0lBQ0wsQ0FBQztJQUVELDhCQUFPLEdBQVAsVUFBUSxPQUF3QixFQUFFLE1BQXlCO1FBQW5ELHdCQUFBLEVBQUEsZUFBd0I7UUFDNUIsSUFBSSxVQUFVLEdBQUc7WUFDYixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbEQ7WUFDRCxPQUFPLElBQUksRUFBRSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNiLElBQUksTUFBTSxFQUFFO1lBQ1Isa0JBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDM0QsVUFBVSxFQUFFLENBQUM7WUFDakIsQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFPO1NBQ1Y7UUFDRCxVQUFVLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQXpDQSxBQXlDQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJQWN0aW9uIGZyb20gXCIuL1VJQWN0aW9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlVmlld0N0cmwge1xyXG4gICAgcm9vdFByZWZhYjogY2MuUHJlZmFiO1xyXG4gICAgcm9vdFZpZXc6IGNjLk5vZGU7XHJcbiAgICBkYXRhOiBhbnk7XHJcbiAgICBzdWJVSVN0YWNrOiBiYi5VSUN0cmxbXTtcclxuICAgIHBhcmVudFVJQ3RybDogYmIuVUlDdHJsO1xyXG5cclxuXHJcbiAgICBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4sIGNsZWFudXA6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICAgICAgaWYgKHZpc2libGUpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVVJQ3RybChjdHJsOiBiYi5VSUN0cmwsIGNsZWFudXA6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnN1YlVJU3RhY2subGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3ViVUlTdGFja1tpXSA9PT0gY3RybCkge1xyXG4gICAgICAgICAgICAgICAgaWYoY2MuaXNWYWxpZCggdGhpcy5zdWJVSVN0YWNrW2ldLnJvb3RWaWV3KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ViVUlTdGFja1tpXS5jbG9zZVVJKGNsZWFudXApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJVSVN0YWNrLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVVJKGNsZWFudXA6IGJvb2xlYW4gPSBmYWxzZSwgYWN0aW9uPzogYmIuVUlfQUNUSU9OX09VVCkge1xyXG4gICAgICAgIGxldCBkZXN0cm95RnVuID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudFVJQ3RybCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnRVSUN0cmwucmVtb3ZlVUlDdHJsRnJvbVBhcmVudCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjbGVhbnVwICYmIGNjLmFzc2V0TWFuYWdlci5yZWxlYXNlQXNzZXQodGhpcy5yb290UHJlZmFiKTtcclxuICAgICAgICAgICAgdGhpcy5yb290Vmlldy5kZXN0cm95KCk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIGlmIChhY3Rpb24pIHtcclxuICAgICAgICAgICAgVUlBY3Rpb24uZ2V0SW5zdGFuY2UoKS5ydW5WaWV3T3V0QWN0aW9uKGFjdGlvbiwgdGhpcy5yb290VmlldywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGVzdHJveUZ1bigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZXN0cm95RnVuKCk7XHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/view/pligin/UIPlugin.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '64b721ZPZRGoKJqJrdLSGCR', 'UIPlugin');
// framework/view/pligin/UIPlugin.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
* @author 虣虣
*/
var UIPlugin = /** @class */ (function () {
    function UIPlugin() {
        this.name = ""; // 插件的名字
    }
    UIPlugin.prototype.register = function () {
        // TODO 插件注册事件 -> 由子类实现
    };
    UIPlugin.prototype.load = function (node, component) {
        // TODO 插件开始执行 -> 由子类实现
    };
    UIPlugin.prototype.start = function (node, component) {
    };
    UIPlugin.prototype.enter = function (node, component) {
    };
    UIPlugin.prototype.destroy = function (node, component) {
        // TODO 界面销毁时调用 -> 由子类实现
    };
    return UIPlugin;
}());
exports.default = UIPlugin;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx2aWV3XFxwbGlnaW5cXFVJUGx1Z2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0VBRUU7QUFDRjtJQUFBO1FBQ0ksU0FBSSxHQUFXLEVBQUUsQ0FBQyxDQUFDLFFBQVE7SUFzQi9CLENBQUM7SUFwQkcsMkJBQVEsR0FBUjtRQUNJLHVCQUF1QjtJQUMzQixDQUFDO0lBRUQsdUJBQUksR0FBSixVQUFLLElBQWEsRUFBRSxTQUF3QjtRQUN4Qyx1QkFBdUI7SUFDM0IsQ0FBQztJQUVELHdCQUFLLEdBQUwsVUFBTSxJQUFhLEVBQUUsU0FBdUI7SUFFNUMsQ0FBQztJQUVELHdCQUFLLEdBQUwsVUFBTSxJQUFhLEVBQUUsU0FBdUI7SUFFNUMsQ0FBQztJQUVELDBCQUFPLEdBQVAsVUFBUSxJQUFhLEVBQUUsU0FBdUI7UUFDMUMsd0JBQXdCO0lBQzVCLENBQUM7SUFFTCxlQUFDO0FBQUQsQ0F2QkEsQUF1QkMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4qIEBhdXRob3Ig6Jmj6JmjXHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJUGx1Z2luIHtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwiXCI7IC8vIOaPkuS7tueahOWQjeWtl1xyXG5cclxuICAgIHJlZ2lzdGVyKCkge1xyXG4gICAgICAgIC8vIFRPRE8g5o+S5Lu25rOo5YaM5LqL5Lu2IC0+IOeUseWtkOexu+WunueOsFxyXG4gICAgfVxyXG5cclxuICAgIGxvYWQobm9kZTogY2MuTm9kZSwgY29tcG9uZW50OiAgY2MuQ29tcG9uZW50KSB7XHJcbiAgICAgICAgLy8gVE9ETyDmj5Lku7blvIDlp4vmiafooYwgLT4g55Sx5a2Q57G75a6e546wXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQobm9kZTogY2MuTm9kZSwgY29tcG9uZW50OiBjYy5Db21wb25lbnQpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXIobm9kZTogY2MuTm9kZSwgY29tcG9uZW50OiBjYy5Db21wb25lbnQpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveShub2RlOiBjYy5Ob2RlLCBjb21wb25lbnQ6IGNjLkNvbXBvbmVudCkge1xyXG4gICAgICAgIC8vIFRPRE8g55WM6Z2i6ZSA5q+B5pe26LCD55SoIC0+IOeUseWtkOexu+WunueOsFxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------
