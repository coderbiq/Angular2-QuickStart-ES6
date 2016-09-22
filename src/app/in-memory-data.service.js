export class InMemoryDataService {
    createDb() {
        let heroes = [
            {id: 1, name: 'test hero 1', power: 'Really Smart'},
            {id: 2, name: 'test hero 2', power: 'Super Flexible'},
            {id: 3, name: 'test hero 3', power: 'Super Hot'},
            {id: 4, name: 'test hero 4', power: 'Weather Changer'},
            {id: 5, name: 'test hero 5', power: 'Really Smart'},
            {id: 6, name: 'test hero 6', power: 'Super Flexible'},
        ];
        return {"heroes": heroes};
    }
}
