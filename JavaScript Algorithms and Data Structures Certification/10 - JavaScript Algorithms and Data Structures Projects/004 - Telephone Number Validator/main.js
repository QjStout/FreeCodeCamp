function telephoneCheck(str) {
  const strCopy = str.slice();
  
  if(RegExp(/[^0-9()-\s]/).test(strCopy)){
    return false;
  }

  if(strCopy.match(/^1?\s?(?:\d{3}|[(]\d{3}[)])\s?[-]?\d{3}\s?[-]?\d{4}$/) === null){
    return false;
  }
  return true;
}
telephoneCheck("1 555-555-5555");