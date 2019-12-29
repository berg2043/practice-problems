function reverseInParens(text){
  let num = text.length;
  for(let i = 0; i<num; i++){
    let additional = 0
    if(text[i] === '('){
      for(let k = i+1; k<num; k++){
        if(text[k] === '('){
          // Replaces the ( with a ) to account for flipping the parentheses
          text = text.substring(0,k) + ')' + text.substring(k+1);
          additional += 1;
        } else if(text[k] === ')'){
          if(additional === 0){
            let textStart = text.substring(0, i)
            let textOpenParen = text.substring(i, i+1)
            let textRev = text.substring(i+1,k).split('').reverse().join('')
            let textEnd = text.substring(k)
            text = textStart + 
                textOpenParen +
                textRev +
                textEnd
            console.log(text);
            break;
          } else {
          additional -= 1;
          // Replaces the ) with a ( to account for flipping the parentheses
          text = text.substring(0,k) + '(' + text.substring(k+1);
          }
        }
      }
      }
    }
    return text;
}

// Tests
console.log(reverseInParens("h(el)lo"), "h(le)lo");
console.log(reverseInParens("a ((d e) c b)"), "a (b c (d e))");
console.log(reverseInParens("one (two (three) four)"), "one (ruof (three) owt)");
console.log(reverseInParens("one (ruof ((rht)ee) owt)"), "one (two ((thr)ee) four)");