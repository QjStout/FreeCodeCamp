function sumFibs(num) {
  let prev = 1;
  let curr = 1;
  let acc = 1;

  while(curr<=num){
    [prev, curr] = [curr, prev];
    curr += prev;    
    
    if(prev%2 !== 0){
      acc += prev;
    }
  }

  return acc;
}

sumFibs(4);