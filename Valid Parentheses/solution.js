function validParentheses(parens){
  const arr = parens.split('');
  if(arr.indexOf(')')<arr.indexOf('(')){
    return false;
  }
  return true;
}

// TESTS
console.log(validParentheses( "()" ), true);
console.log(validParentheses( "())" ), false);
console.log(validParentheses( ")()(" ), false);