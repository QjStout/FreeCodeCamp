function diffArray(arr1, arr2) {
  const newArr = arr1.concat(arr2)
    .filter(e => !arr1.includes(e) || !arr2.includes(e));

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);