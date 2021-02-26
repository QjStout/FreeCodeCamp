function addTogether() {
  const args = [...arguments];

  function isNumber(num){
    if(typeof num === 'number'){
      return true;
    }
    return false;
  }

  if(!args.every(arg => isNumber(arg))){
    return undefined;
  }

  if(arguments.length === 1){
    return (num) => {
      if(isNumber(num)){
        return args[0] + num;
      }
      return undefined;
    };
  }

  return args[0] + args[1];
}

addTogether(2,3);