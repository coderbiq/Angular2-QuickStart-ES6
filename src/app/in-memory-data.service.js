export class InMemoryDataService {
    createDb() {
        let heroes = [
            {id: 'test-hero-1', name: 'test hero 1', power: 'Really Smart'},
            {id: 'test-hero-2', name: 'test hero 2', power: 'Super Flexible'},
            {id: 'test-hero-3', name: 'test hero 3', power: 'Super Hot'},
            {id: 'test-hero-4', name: 'test hero 4', power: 'Weather Changer'}
        ];
        return {"heroes": heroes};
    }
}
