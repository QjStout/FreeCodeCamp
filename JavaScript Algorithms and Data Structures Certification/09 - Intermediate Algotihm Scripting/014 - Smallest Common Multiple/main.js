function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b);
  let curr = max;

  for(let i = max; i>= min; i--){
    if(curr % i !== 0){
      curr += max;
      i = max;
    }
  }
  return curr;
}

smallestCommons([1,5]);