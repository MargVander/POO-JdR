import Weapon from "./weapon"

class Character{
    private _name: string
    private _pv: number = Math.floor(Math.random() * 200 + 300)
    private _pvMax: number = this._pv
    private _defense: number = Math.floor(Math.random() * 80)
    private _weapon: Weapon

    constructor(name:string = "") {
                this._name = name
                this._weapon = new Weapon()
            }

            get name():string {
                return this._name
            }

            set name(name:string) {
                this._name = name
            }

            get pv():number {
                return this._pv
            }

            set pv(pv:number) {
                if (pv >= 0) {
                    this._pv = pv
                } else {
                    this._pv = 0
                }
            }

            get pvMax():number {
                return this._pvMax
            }

            set pvMax(pvMax:number) {
                this._pvMax = pvMax
            }

            get defense():number {
                return this._defense
            }

            set defense(defense:number) {
                this._defense = defense
            }

            get weapon():Weapon {
                return this._weapon
            }

            set weapon(weapon:Weapon) {
                this._weapon = weapon
            }
}

export default Character