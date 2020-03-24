import Good from './classes/good'
import Bad from './classes/bad';
import Fight from './classes/fight'
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  

rl.question('Name your hero : ', (answer:string) => {
      let good = new Good(answer)
      console.log(good);
      let bad = new Bad()
      console.log(bad);
    rl.close();
    let fight = new Fight(good, bad)
    console.log(fight.start);
    
  });
  
// let good = new Good('pierre')
// console.log(good.name);
// console.log(good.pv);
// console.log(good.pvMax);
// let bad = new Bad()
// console.log(bad.name);
