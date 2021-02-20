function sumPrimes(num) {
  let result = 0;

  for(let i = 2; i<=num; i++ ){
    if(isPrime(i)){result+=i;}
  }
  return result;
}

function isPrime(num) {
  for(let i=2; i<=num/2; i++){
    if(num%i === 0){return false;}
  }
  return true;
}

sumPrimes(10);