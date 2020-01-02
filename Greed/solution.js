function score( dice ) {
  let pool = dice.reduce((numbers, die) => {
    numbers[die]++; 
    return numbers; 
  }, {1:0, 2:0, 3:0, 4:0, 5:0, 6:0});
  let total = 0
  total += Math.floor(pool[6]/3)*600;
  total += Math.floor(pool[4]/3)*400;
  total += Math.floor(pool[3]/3)*300;
  total += Math.floor(pool[2]/3)*200;
  total += Math.floor(pool[1]/3)?
    1000*Math.floor(pool[1]/3) + (pool[1]-Math.floor(pool[1]/3)*3)*100:
    pool[1]*100;
  total += Math.floor(pool[5]/3)?
    500*Math.floor(pool[5]/3) + (pool[5]-Math.floor(pool[5]/3)*3)*50:
    pool[5]*50;
  return total;
}

// Tests
console.log(score([2,3,4,6,2]), 0);
console.log(score([4,4,4,3,3]), 400);
console.log(score([2,4,4,5,4]), 450);
console.log(score([1,1,1,1,5]), 1150);
console.log(score([5,5,5,5,1]), 650);