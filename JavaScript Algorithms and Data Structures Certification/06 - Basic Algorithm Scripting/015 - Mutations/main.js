function mutation(arr) {
  const arrCopy = arr.slice(0).map(e => e.toLowerCase());

  for(const letter in arrCopy[1]){
    if(arrCopy[0].includes(arrCopy[1][letter]) === false){
      return false;
    }
  }

  return true;
}

mutation(["hello", "Hey"]);