// Numbers
function zero(incoming){
  if(incoming){
    incoming.push(0);
    return operationIdentifier(incoming);
  } else {
    return 0;
  }
}
function one(incoming){
  if(incoming){
    incoming.push(1);
    return operationIdentifier(incoming);
  } else {
    return 1;
  }
}
function two(incoming){
  if(incoming){
    incoming.push(2);
    return operationIdentifier(incoming);
  } else {
    return 2;
  }
}
function three(incoming){
  if(incoming){
    incoming.push(3);
    return operationIdentifier(incoming);
  } else {
    return 3;
  }
}
function four(incoming){
  if(incoming){
    incoming.push(4);
    return operationIdentifier(incoming);
  } else {
    return 4;
  }
}
function five(incoming){
  if(incoming){
    incoming.push(5);
    return operationIdentifier(incoming);
  } else {
    return 5;
  }
}
function six(incoming){
  if(incoming){
    incoming.push(6);
    return operationIdentifier(incoming);
  } else {
    return 6;
  }
}
function seven(incoming){
  if(incoming){
    incoming.push(7);
    return operationIdentifier(incoming);
  } else {
    return 7;
  }
}
function eight(incoming){
  if(incoming){
    incoming.push(8);
    return operationIdentifier(incoming);
  } else {
    return 8;
  }
}
function nine(incoming){
  if(incoming){
    incoming.push(9);
    return operationIdentifier(incoming);
  } else {
    return 9;
  }
}

// Math function to make code drier
function operationIdentifier(arr){
  switch (arr[1]) {
    case '+':
      return arr[2] + arr[0];
    case '-':
      return arr[2] - arr[0];
    case '*':
      return arr[2] * arr[0];
    case '/':
      return Math.floor(arr[2] / arr[0]);
    default:
      return 'inpropper middle function';
  }
}

// Operations
function plus(num){
  return [num, '+'];
}
function minus(num){
  return [num, '-'];
}
function times(num){
  return [num, '*'];
}
function dividedBy(num){
  return [num, '/'];
}

// Tests

console.log(seven(times(five())), 35)
console.log(four(plus(nine())), 13) // FOCUS
console.log(eight(minus(three())), 5)
console.log(six(dividedBy(two())), 3)
console.log(seven(times(five())), 35);
console.log(four(plus(nine())), 13);
console.log(eight(minus(three())), 5);
console.log(six(dividedBy(two())), 3);