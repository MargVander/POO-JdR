import Character from "./characters";

export default class Run{
    _target:Character
    _attacker:Character

    constructor(target:Character, attacker:Character) {
        this._target = target
        this._attacker = attacker
        this.hit()
    }

    get target():Character {
        return this._target
    }

    set target(target:Character) {
        this._target = target
    }

    get attacker():Character {
        return this._attacker
    }

    set attacker(attacker:Character) {
        this._attacker = attacker
    }

    hit = ():Character => {
        const damagePts = Math.floor(Math.random() * this.attacker.weapon.minDamage + this.attacker.weapon.maxDamage)
        this.target.pv = this.target.pv - (damagePts + this.target.defense)
        return this.target
    }
}