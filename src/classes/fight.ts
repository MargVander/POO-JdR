import Good from './good'
import Bad from './bad'
import Run from './run'

export default class Fight {
    _start:boolean = Math.random() >= 0.5
    _good:Good
    _bad:Bad

    constructor(good:Good, bad:Bad) {
        this._good = good
        this._bad = bad
    }

    get start():boolean {
        return this._start
    }

    set start(start:boolean) {
        this._start = start
    }

    get good():Good {
        return this._good
    }

    set good(good:Good) {
        this._good = good
    }

    get bad():Bad {
        return this._bad
    }

    set bad(bad:Bad) {
        this._bad = bad
    }

    fight = () => {
        while (this.good.pv != 0 && this.bad.pv != 0) {
            if (this.start === true) {
                new Run(this.good, this.bad)
            } else {
                new Run(this.bad, this.good)
            }
        }
    }
}