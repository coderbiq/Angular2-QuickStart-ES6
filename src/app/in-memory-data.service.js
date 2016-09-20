export class InMemoryDataService {
    createDb() {
        let heroes = [
            {id: 'test-hero-1', name: 'test hero 1'},
            {id: 'test-hero-2', name: 'test hero 2'},
            {id: 'test-hero-3', name: 'test hero 3'},
            {id: 'test-hero-4', name: 'test hero 4'}
        ];
        return {"heroes": heroes};
    }
}
