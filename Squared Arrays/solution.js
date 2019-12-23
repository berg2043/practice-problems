


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