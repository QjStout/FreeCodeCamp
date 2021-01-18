function chunkArrayInGroups(arr, size) {
  const arrCopy = arr.splice(0);
  const result = [];

  while(arrCopy.length > 0) {
    result.push(arrCopy.splice(0, size));
  }
  
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);