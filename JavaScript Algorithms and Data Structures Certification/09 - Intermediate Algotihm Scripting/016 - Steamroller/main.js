function steamrollArray(arr) {
  const flatArray = [];

  const flatten = (el) => {
    if(Array.isArray(el)){
      el.forEach(flatten);
    } else {
      flatArray.push(el);
    }
  }
  arr.forEach(flatten);
  
  return flatArray;
}

steamrollArray([1, [2], [3, [[4]]]]);