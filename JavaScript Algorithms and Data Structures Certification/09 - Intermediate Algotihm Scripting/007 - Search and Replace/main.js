function myReplace(str, before, after) {
  let resStr = str.slice();
  let afterCopy = after.slice();
  
  if(before.match(/^[A-Z]/)){
    afterCopy = afterCopy.charAt(0).toUpperCase() + afterCopy.slice(1);
  } else {
    afterCopy = afterCopy.charAt(0).toLowerCase() + afterCopy.slice(1);
  }
  
  resStr = resStr.replace(before, afterCopy);
  
  return resStr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");