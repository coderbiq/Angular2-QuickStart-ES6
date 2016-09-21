export class Entity {

    constructor() {
        let now = new Date();
        this.id = '';
        this.created = now.getTime();
        this.updated = now.getTime();
    }

    exchangeJson(jsonData) {
        for(let propName in jsonData) {
            this[propName] = jsonData[propName];
        }
    }

    toJson() {
        return JSON.parse(this.toString());;
    }

    toString() {
        return JSON.stringify(this);
    }
}
