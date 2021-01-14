function findElement(arr, func) {
  for(const e in arr) {
    if(func(arr[e])){return arr[e]};
  }
}

findElement([1, 2, 3, 4], num => num % 2 === 0);