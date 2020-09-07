export default class BaseVO {
    
    parseData(data: Object) {
        if (!data) {
            return;
        }

        for (let key in data) {
            if (this[key] === undefined) {
                continue;
            }

            this[key] = data[key];
        }
    }

    
    getFormatStr() {
        return JSON.stringify(this);
    }
}