function removeNb (n) {
  let arr = []
  for(let i = 1; i<n+1; i++){
    arr.push(i);
  }
  let sum = arr.reduce((total, cur)=>{total += cur; return total;}, 0);
  let answer = [];
  for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
      if(arr[i] * arr[j] === sum - arr[i] - arr[j]){
        answer.push([arr[i], arr[j]]);
      }
    }
  }
  return answer;
}

// Tests

console.log(removeNb(26), [[15,21], [21,15]]);
console.log(removeNb(100), []);