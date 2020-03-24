import Character from './characters'

class Good extends Character{
    constructor(name = ''){
        super(name)
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

export default Good