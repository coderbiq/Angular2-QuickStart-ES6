export class Entity {

    constructor() {
        let now = new Date();
        this.Id = '';
        this.Created = now.getTime();
        this.Updated = now.getTime();
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
