"use strict";
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