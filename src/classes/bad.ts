import Character from './characters'

export default class Bad extends Character{
    constructor(name:string = ""){
        super(name)
        this.name = this.randomName()        
    }

    randomName():string {
        let name = Math.random().toString(36).replace(/[^a-z]+/g, '')
        return name[0].toUpperCase() + name.substring(1)
    }
    // Methode de création de nom aléatoire
}