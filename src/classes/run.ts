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
        let damagePts = Math.floor(Math.random() * this.attacker.weapon.minDamage + this.attacker.weapon.maxDamage)
        if (Math.random() * 100 < this._attacker.weapon._criticalHit) {
            damagePts *= 2
        }
        this.target.pv = this.target.pv - (damagePts - this.target.defense)
        console.log(this.attacker.name + " inflige " + (damagePts - this.target.defense) + " dégat à son adversaire");
        console.log(this.target.name + " n'a plus que " + this.target.pv + " pv")
        return this.target
    }
}