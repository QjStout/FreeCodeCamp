function sumAll(arr) {
  arr.sort((a, b) => a - b)

  let res = 0;
  
  for(let i = arr[0]; i<=arr[1]; i++){
    res += i;
  }

  return res;
}

sumAll([1, 4]);