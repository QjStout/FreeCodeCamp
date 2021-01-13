function reverseString(str) {
  let res = [];

  for(let i=str.length-1; i>=0; i--){
    res.push(str[i]);
  }
  res = res.join('');

  return res;
}

reverseString("hello");