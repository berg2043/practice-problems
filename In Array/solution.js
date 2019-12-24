function inArray(array1, array2){
  let holder = [];
  for(str of array1){
    for(str2 of array2)
      if(str2.includes(str)){
        holder.push(str);
        break;
    }
  }
  holder.sort();
  return holder;
}

// TESTS

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

a1 = ["xyz", "live", "strong"]
console.log(inArray(a1, a2), ["live", "strong"])
a1 = ["live", "strong", "arp"]
console.log(inArray(a1, a2), ["arp", "live", "strong"])
a1 = ["tarp", "mice", "bull"]
console.log(inArray(a1, a2), [])