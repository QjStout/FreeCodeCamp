function rangeOfNumbers(startNum, endNum) {
  if (startNum>endNum){
    return [];
  }
  else {
    const res = rangeOfNumbers(startNum+1, endNum);
    res.unshift(startNum);
    return res;
  }
};
