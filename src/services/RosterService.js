import Developer from './model/Developer.js'

export default class RosterService {
    static developers = []

    addDeveloper(name, image) {
        this.developers.push(Developer(name, image));
    }

    getDevelopers() {
        return this.developers;
    }
}