function convertToRoman(num) {
  const numerals = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    100: 'C',
    90: 'XC',
    50: 'L',
    10: 'X',
    9: 'IX',
    5: 'V',
    1: 'I'
  }

  const numbers = [1000, 900, 500, 100, 90, 50, 10, 9, 5, 1];

  let str = '';
  for(let i=0; i<numbers.length; i++){
    let unit = numbers[i];
    let quotient = Math.floor(num/unit);
    if(quotient>=1){
      num = num%unit;
      switch (quotient) {
        case 4:
          str = str + numerals[unit] + numerals[numbers[i-1]];
          break;
        default:
          str = str + numerals[unit].repeat(quotient);
          break;
      }
    }
  }

  return str;
}
 
convertToRoman(36);
