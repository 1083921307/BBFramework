
export default class AppLog {
    static singleInstance: AppLog = null;
    static getInstance(): AppLog {
        if (AppLog.singleInstance == null) {
            AppLog.singleInstance = new AppLog();
        }
        return AppLog.singleInstance;
    }

    isLog: boolean = true;

    log() {
        if (!this.isLog) {
            return;
        }
        var backLog = cc.log || console.log ||  window["log"];
        backLog.call(AppLog, "%s%s" + cc.js.formatStr.apply(cc, arguments),this._getDateString(), this._stack());
    }

    info() {
        if (!this.isLog) {
            return;
        }
        var backLog = cc.log || console.log || window["log"];
        backLog.call(AppLog, "%c%s%s:" + cc.js.formatStr.apply(cc, arguments), "color:#00CD00;", this._getDateString(), this._stack());
    }

    log2() {
        if (!this.isLog) {
            return;
        }
        var backLog = cc.log || console.log ||  window["log"];
        backLog.call(AppLog, "%c%s%s:" + cc.js.formatStr.apply(cc, arguments), "color:#EED2EE;", this._getDateString(), this._stack());
    };
    
    info2() {
        if (!this.isLog) {
            return;
        }
        var backLog = cc.log || console.log ||  window["log"];
        backLog.call(AppLog, "%c%s%s:" + cc.js.formatStr.apply(cc, arguments),  "color:#F08080;", this._getDateString(), this._stack());
    };
    
    info3() {
        if (!this.isLog) {
            return;
        }
        var backLog = cc.log || console.log ||  window["log"];
        backLog.call(AppLog, "%c%s%s:" + cc.js.formatStr.apply(cc, arguments), "color:#9B30FF;", this._getDateString(), this._stack());
    };


    warn() {
        if (!this.isLog) {
            return;
        }
        var backLog = cc.log || console.log ||  window["log"];
        backLog.call(AppLog, "%c%s%s:" + cc.js.formatStr.apply(cc, arguments), "color:#ee7700;", this._getDateString(), this._stack());
    };

    error() {
        if (!this.isLog) {
            return;
        }
        var backLog = cc.log || console.log ||  window["log"];
        backLog.call(AppLog, "%c%s%s:" + cc.js.formatStr.apply(cc, arguments), "color:red", this._getDateString(), this._stack());
    };

    _stack() {
        var e = new Error();
        var lines = e.stack.split("\n");
        lines.shift();
        var result = [];
        lines.forEach((line) => {
            line = line.substring(7);
            var lineBreak = line.split(" ");
            if (lineBreak.length < 2) {
                result.push(lineBreak[0]);
            } else {
                result.push({[lineBreak[0]]: lineBreak[1]});
            }
        });
    
    
        var list = [];
    
        let result_idx = -1;
        for (var i = 0; i < result.length; i++) {
            for (var a in result[i]) {
                var l = a.split(".");
                if (l[0] !== "AppLog") {
                    result_idx = i;
                    break;
                }
            }
            if (result_idx >= 0) {
                break;
            }
        }

        let result_list  = Object["values"](result[2])[0].split("/");

        return result_list[result_list.length - 1];
    }

    _getDateString(): string {
        var d = new Date();
        var str = d.getHours() + "";
        var timeStr = "";
        timeStr += (str.length === 1 ? ("0" + str) : str) + ":";

        str = d.getMinutes() + "";
        timeStr += (str.length === 1 ? ("0" + str) : str) + ":";

        str = d.getSeconds() + "";
        timeStr += (str.length === 1 ? ("0" + str) : str) + ".";

        str = d.getMilliseconds() + "";
        if (str.length === 1) str = "00" + str;
        if (str.length === 2) str = "0" + str;
        timeStr += str;

        timeStr = '[' + timeStr + ']';

        return timeStr;
    }
}
