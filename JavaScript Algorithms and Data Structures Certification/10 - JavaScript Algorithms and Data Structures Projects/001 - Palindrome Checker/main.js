function palindrome(str) {
  const alphaNumStr = str.replace(/\W|_/g, '').toLowerCase();
  const reverseStr = alphaNumStr
    .split('')
    .reverse()
    .join('');
  return alphaNumStr === reverseStr ? true : false;
}



palindrome("_eye");