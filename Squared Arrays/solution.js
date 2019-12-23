function comp(a,b){
  let count = 0;
  if(!b){
    return false
  }
  try {
    for(n of a){
      // console.log('n', n);
      // console.log('n^2',n*n);
      if (b.includes(n*n)){
        // console.log('b',b);
        let i = b.findIndex((iValue) => iValue === n*n);
        // console.log('i',i);
        b.splice(i,1)
        // console.log('b2',b);
        count++
      }
    }
  } catch (error) {
    return false
  }
  if(count === a.length){
    return true;
  } else {
    return false;
  }
}


// TESTS
const testA = [121, 144, 19, 161, 19, 144, 19, 11]  
const testB = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

console.log(testA);
console.log(testB);
console.log('should be true', comp(testA, testB))

const testC = [132, 14641, 20736, 361, 25921, 361, 20736, 361]

console.log(testA);
console.log(testC);
console.log('should be false', comp(testA, testC))

const testD = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]

console.log(testA);
console.log(testD);
console.log('should be false', comp(testA, testD))

const testE = [];

console.log(testE);
console.log(testE);
console.log('should be true', comp(testE, testE))

const testF = null;
console.log(testE);
console.log(testF);
console.log('should be false', comp(testE, testF))