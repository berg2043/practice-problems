// Not a fan of turning a into a string to break the addition, but it works
function validParentheses(parens){
  const arr = parens.split('');
  return (arr.reduce((a,c)=>{
    if(c==='('){
      a++;
      return a;
    } else if (c===')'){
      a--;
      if(a<0){
        a = '';
      } else {
        return a;
      }
    }
  },0) === 0)
}

// TESTS
console.log(validParentheses( "()" ), true);
console.log(validParentheses( "())" ), false);
console.log(validParentheses( ")()(" ), false);
console.log(validParentheses( ")()()()(" ), false);
