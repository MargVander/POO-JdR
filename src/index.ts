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
    new Fight(good, bad)
  });