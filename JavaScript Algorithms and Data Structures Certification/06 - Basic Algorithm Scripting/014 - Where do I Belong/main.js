function getIndexToIns(arr, num) {
  const arrCopy = arr.slice(0);
  arrCopy.push(num);
  arrCopy.sort((a,b) => a-b)
  
  return arrCopy.indexOf(num);
}

getIndexToIns([40, 60], 50);