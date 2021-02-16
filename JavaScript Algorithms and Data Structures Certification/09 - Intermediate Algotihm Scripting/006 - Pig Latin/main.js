function translatePigLatin(str) {
  let strCopy = str.slice();

  if(strCopy.match(/^[aeiou]/) !== null) {
    strCopy = strCopy.concat("way");
  } else {
    strCopy = strCopy.split(/^([^aeiou]+)/);
    strCopy.shift();
    const consonant = strCopy.shift();
    strCopy.push(consonant, "ay");
    strCopy = strCopy.join('');
  }

  return strCopy;
}

console.log(translatePigLatin("consonant"));
