function repeatStringNumTimes(str, num) {
  if(num <= 0){
    return '';
  }
  
  let result = '';
  
  for(let i=0; i<num; i++) {
    result = result.concat(str);
  }

  return result;
}

repeatStringNumTimes("abc", 3);