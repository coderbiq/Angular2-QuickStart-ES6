export class Entity {

    constructor() {
        let now = new Date();
        this.id = '';
        this.created = now.getTime();
        this.updated = now.getTime();
    }

    ExchangeJson(jsonData) {
        for(let propName in jsonData) {
            this[propName] = jsonData[propName];
        }
    }

    ToJson() {
        return JSON.parse(JSON.stringify( this ));;
    }
}
