function fearNotLetter(str) {
  let targetCharCode = str.charCodeAt(0) + 1;

  for(let i = 1; i<str.length; i++){
    let currChar = str.charCodeAt(i);

    if(currChar === targetCharCode){
      targetCharCode = currChar+1;
    } else {
      return String.fromCharCode(targetCharCode);
    }
  }

  return undefined;
}

fearNotLetter("abce");