function destroyer(arr) {
  let arrCopy = arr.slice();

  for(let i=1; i<arguments.length; i++){
    arrCopy = arrCopy.filter(e => e !== arguments[i]);
  }

  return arrCopy;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);