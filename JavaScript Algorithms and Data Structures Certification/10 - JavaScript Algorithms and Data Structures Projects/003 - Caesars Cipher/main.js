function rot13(str) {
  const rotNum = 13;

  function rotateChar(rotNum){
    return (char) => {
      const charCode = char.charCodeAt();
      if(charCode < 65 || charCode > 90){
        return char;
      }
      if(charCode <= 77){
        return String.fromCharCode(charCode + rotNum);
      } else {
        return String.fromCharCode(charCode - rotNum);
      }
    }
  }
  
  return str.split('').map(rotateChar(rotNum)).join('');
}

rot13("ABOBQL");