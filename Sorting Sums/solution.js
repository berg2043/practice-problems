function order(str){
  let answer = []
  let arr = str.split(' ').filter((item)=> item)
  let ob = arr.reduce((holder, item)=>{
    let sum = 0;
    for(let char of item){
      sum += Number(char);
    }
    holder[sum]? holder[sum].push(item) : holder[sum]=[item]
    return holder;
  }, {})
  for(let key in ob){
    ob[key].sort();
    for(let item of ob[key]){
      answer.push(item);
    }
  }
  return answer.join(' ');
}


// Tests

console.log(order("56 65 74 100 99 68 86  180 90"), "100 180 90 56 65 74 68 86 99");
console.log(order("103 123 4444 99 2000"), "2000 103 123 4444 99");
console.log(order("2000 10003 1234000 44444444 9999 11 11 22 123"), "11 11 2000 10003 22 123 1234000 44444444 9999");