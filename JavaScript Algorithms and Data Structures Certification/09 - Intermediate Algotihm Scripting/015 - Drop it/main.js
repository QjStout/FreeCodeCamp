function dropElements(arr, func) {
  const resArr = arr.slice();

  while(!func(resArr[0])){
    resArr.shift();
  }

  return resArr;
}

dropElements([0, 1, 0, 1], function(n) {return n === 1; });