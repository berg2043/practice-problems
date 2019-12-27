function alphabetPosition(text) {
  let newText = []
  for(let i of text){
    let num = i.charCodeAt(0).toString(10)
    if(num>64 && num<91){
      num -= 64
      newText.push(num)
    } else if(num>96 && num<123){
      num -= 96;
      newText.push(num)
    }
  }
  return newText.join(' ')
}


// Tests

console.log(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
console.log(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");