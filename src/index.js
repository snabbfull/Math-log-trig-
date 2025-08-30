export class Character {
    constructor(name, type, attack) {
        this.name = name;
        this.type = type;
        this.baseAttack = attack;
        this._stoned = false;
        this.distance = 1;
    }

    set stoned(value) {
        this._stoned = value;
    }

    get stoned() {
        return this._stoned;
    }

    set attack(value) {
        this.baseAttack = value;
    }

    get attack() {
        let result = this.baseAttack * (1 - (this.distance - 1) * 0.1);

        if (this._stoned) {
            result -= Math.log2(this.distance) * 5;
        }

        return Math.max(0, Math.round(result));
    }
}

export class Magician extends Character {
    constructor(name) {
        super(name, 'Magician', 100);
    }
}

export class Daemon extends Character {
    constructor(name) {
        super(name, 'Daemon', 100);
    }
}