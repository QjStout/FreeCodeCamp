function countOnline(usersObj) {
  // Only change code below this line
  let numOnline = 0;

  for(let user in usersObj){
    if(usersObj[user].online){
      numOnline += 1;
    }
  }

  console.log(numOnline);

  return numOnline;
  // Only change code above this line
}