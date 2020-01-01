function scramble(str1, str2) {
  const ob1={};
  const ob2={};
  for(char of str1){
    if(!ob1[char]){
      ob1[char] = 0
    }
    ob1[char] +=1
  }
  for(char of str2){
    if(!ob2[char]){
      ob2[char] = 0
    }
    ob2[char] +=1
  }
  for(key in ob2){
    if(!ob1[key] || ob2[key] > ob1[key]){
      return false;
    }
  }
  return true;
}

// Tests

console.log(scramble('rkqodlw', 'world'), true);
console.log(scramble('cedewaraaossoqqyt', 'codewars'), true);
console.log(scramble('katas', 'steak'), false);
console.log(scramble('scriptjava','javascript'),true);
console.log(scramble('scriptingjava','javascript'),true);
console.log(scramble('scriptsjava','javascripts'),true);
console.log(scramble('jscripts','javascript'),false);
console.log(scramble('aabbcamaomsccdd','commas'),true);