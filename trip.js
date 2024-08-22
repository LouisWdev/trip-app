class Trip {
    #id;
    #name;
    #cost;

    constructor(id, name) {
        this.#id = id;
        this.#name = name;
        this.#cost = 0;
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    get cost() {
        return this.#cost;
    }

    set cost(value) {
        this.#cost = value;
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            cost: this.cost
        }
    }
}
module.exports = Trip;