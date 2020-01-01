function scramble(str1, str2) {
  const arr = str1.split('');
  for(char of str2){
    if(arr.indexOf(char)>=0){
      arr.splice(arr.indexOf(char),1);
    } else{
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