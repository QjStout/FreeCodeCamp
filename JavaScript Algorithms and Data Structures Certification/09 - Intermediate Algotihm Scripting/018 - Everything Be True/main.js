function truthCheck(collection, pre) {
  const res = collection.find(arr => {
    if(!arr[pre]){
      return true;
    };
  });
  
  return res === undefined ? true : false;
}

truthCheck(
  [
    {"user": "Tinky-Winky", "sex": "male"},
    {"user": "Dipsy", "sex": "male"},
    {"user": "Laa-Laa", "sex": "female"},
    {"user": "Po", "sex": "female"}
  ], "sex");