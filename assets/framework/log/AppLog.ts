
export default class LogHelper {
    // 普通输出
    static log(msg: string) {
        if (bb.logEnable === false) {
            return;
        }
        if (bb.logLevel >= bb.LOG.NOMAL) {
            LogHelper.pushCache(`#FFFFFF${LogHelper.getDateString()} ${cc.js.formatStr.apply(cc, arguments)} ${LogHelper.stack(2)}`);
        }
        cc.log(LogHelper.getDateString(), LogHelper.stack(2), cc.js.formatStr.apply(cc, arguments));
    }


    static info(msg) {
        if (bb.logEnable === false) {
            return;
        }
        if (bb.logLevel >= bb.LOG.INFO) {
            LogHelper.pushCache(`#00CD00${LogHelper.getDateString()} ${cc.js.formatStr.apply(cc, arguments)} ${LogHelper.stack(2)}`);
        }
        cc.log("%c%s%s:" + cc.js.formatStr.apply(cc, arguments), "color:#00CD00;", LogHelper.getDateString(), LogHelper.stack(2));
    }


    // 输出 警告
    static logW(msg: string) {
        if (bb.logEnable === false) {
            return;
        }
        if (bb.logLevel >= bb.LOG.WARIN) {
            LogHelper.pushCache(`#ee7700${LogHelper.getDateString()} ${cc.js.formatStr.apply(cc, arguments)} ${LogHelper.stack(2)}`);
        }
        cc.log("%c%s%s:" + cc.js.formatStr.apply(cc, arguments), "color:#ee7700;", LogHelper.getDateString(), LogHelper.stack(2));
    }

    // 输出 错误
    static logE(msg: string) {
        if (bb.logEnable === false) {
            return;
        }
        if (bb.logLevel >= bb.LOG.ERROR) {
            LogHelper.pushCache(`#FF0000${LogHelper.getDateString()} ${cc.js.formatStr.apply(cc, arguments)} ${LogHelper.stack(2)}`);
        }
        cc.log("%c%s%s:" + cc.js.formatStr.apply(cc, arguments), "color:red", LogHelper.getDateString(), LogHelper.stack(2));
    }


    static pushCache(msg) {
        bb.logCache.splice(0, 0, msg);
        if (bb.logCache.length === 400) {
            bb.logCache.splice(399, 1);
        }
    }

    static getDateString() {
        let d = new Date();
        let str = d.getHours() + "";
        let timeStr = "";
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

    public static printStack() {
        let e = new Error();
        let lines = e.stack.split('\n');
        lines.shift();
        lines.forEach((line) => {
            cc.log('line:', line);
        });
    }

    public static stack(index) {
        let e = new Error();
        let lines = e.stack.split("\n");
        lines.shift();
        let result = [];
        lines.forEach((line) => {
            line = line.substring(7);
            let lineBreak = line.split(" ");
            if (lineBreak.length < 2) {
                result.push(lineBreak[0]);
            } else {
                result.push({ [lineBreak[0]]: lineBreak[1] });
            }
        });

        let list = [];
        if (index <= result.length - 1) {
            for (let a in result[index]) {
                list.push(a);
            }
        }

        if (list.length > 0) {
            let splitList = list[0].split(".");
            if (splitList.length >= 2) {
                return ("[" + splitList[0] + ".js->" + splitList[1] + "]");
            }
        }

        return "";
    }
}