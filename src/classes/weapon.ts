export default class Weapon{
    private _minDamage: number = Math.floor(Math.random() * 200)
    private _maxDamage: number = this._minDamage + Math.floor(Math.random() * 10)
    private _criticalHit: number = Math.floor(Math.random() * 10)

    get minDamage():number {
        return this._minDamage
    }

    set minDamage(minDamage:number) {
        this._minDamage = minDamage
    }

    get maxDamage():number {
        return this._maxDamage
    }

    set maxDamage(maxDamage:number) {
        this._maxDamage = maxDamage
    }

    get criticalHit() {
        return this._criticalHit
    }

    set criticalHit(criticalHit) {
        if (criticalHit < 50) {
            this._criticalHit = criticalHit
        }
    }
    
}