function findNb(m){
  let remaining = m;
  let base = 0;
  while(remaining>0){
    base += 1;
    remaining -= Math.pow(base, 3);
  }
  if(remaining < 0){
    return -1;
  } else {
    return base;
  }
}


// Tests
console.log(findNb(27))
console.log(findNb(1071225), 45)
console.log(findNb(91716553919377),  -1)
console.log(findNb(135440716410000), 4824)
console.log(findNb(40539911473216), 3568)