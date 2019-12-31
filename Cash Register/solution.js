function tickets(peopleInLine){
  const register = {
    '25': 0,
    '50': 0,
    '100': 0
  }
  for(person of peopleInLine){
    register[person]+=1
    if(50 === person){
      register['25']-=1
      if(register['25'] < 0){
        return 'NO';
      }
    } else if (100 === person){
      if(register['50'] >= 1 && register['25'] >= 1){
        register['50']-=1;
        register['25']-=1;
      } else if (register['25']>=3){
        register['25']-=3;
      } else {
        return 'NO';
      }
    }
  }
  return 'YES';
}


// Tests
console.log(tickets([25, 25, 50]), "YES");
console.log(tickets([25, 100]), "NO");
console.log(tickets([25, 25, 50, 50, 100]), "NO");
console.log(tickets([25, 25, 50, 50]), "YES");
console.log(tickets([25, 100]), "NO");
console.log(tickets([ 25, 25, 25, 25, 25, 100, 100 ]), "NO");
console.log(tickets([ 25, 25, 25, 100, 25, 25, 25, 100, 25, 50, 25, 100, 25, 100, 25 ]), "NO");
console.log(tickets([ 25, 50, 25, 100, 25, 50, 25, 100, 25, 25, 50, 100, 25, 25, 25, 100, 50, 25 ]), "NO");