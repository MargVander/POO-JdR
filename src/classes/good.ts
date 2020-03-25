import Character from './characters'
import Weapon from './weapon'

export default class Good extends Character{
    constructor(name = '', weapon:Weapon){
        super(name)
        this.weapon = weapon
    }

    heal = () => {
        const plusPv = Math.floor(Math.random() * 20)
        if (this.pv + plusPv >= this.pvMax) {
            this.pv = this.pvMax
        } else {
            this.pv += plusPv
        }
    }
}