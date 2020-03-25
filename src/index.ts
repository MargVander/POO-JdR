import Good from './classes/good'
import Bad from './classes/bad';
import Fight from './classes/fight'
import readline from 'readline'
import Weapon from './classes/weapon'
import { Weapon1 } from './classes/weapon1';
import { Weapon2 } from './classes/weapon2';

const inputReader = async (question: string) => {
    let response;
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    await new Promise((resolve, reject) => {
        rl.question(`${question}`, (answer: string) => {
            resolve(answer)
        })
    }).then(onfull => {
        response = onfull;
        rl.close()
    })

    return response
}
 
const m = async () => {
let goodName = await inputReader('Nommez votre héro : ')
let weapon = await weaponChoice() as Weapon
let good = new Good(goodName, weapon)
let bad = new Bad()
console.log(good);
console.log(bad);
new Fight(good, bad)
}

const weaponChoice = async () => {
    let weapon = new Weapon()
    let choice = await inputReader('Choisissez votre arme : 1 ou 2 :')
    if (choice === 1) {
        weapon = new Weapon1()
    } else {
        weapon = new Weapon2()
    }
    return weapon
}

m();