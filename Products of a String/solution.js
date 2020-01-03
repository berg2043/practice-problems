function removeNb (n) {
  let arr = []
  for(let i = 1; i<n+1; i++){
    arr.push(i);
  }
  let sum = arr.reduce((total, cur)=>{total += cur; return total;}, 0);
  let answer = [];
  for(num of arr){
    if(
      Math.floor((sum-num)/num) > num && 
      Math.floor((sum-num-num)/num) === ((sum-num-num)%num)+num
    ){
      answer.push([num, ((sum-num-num)%num)+num])
    } else if(Math.floor((sum-num)/num) === ((sum-num)%num)){
      answer.push([num, (sum-num)%num])
    }
  }
  return answer;
}

// Tests

console.log(removeNb(26), [[15,21], [21,15]]);
console.log(removeNb(100), []);