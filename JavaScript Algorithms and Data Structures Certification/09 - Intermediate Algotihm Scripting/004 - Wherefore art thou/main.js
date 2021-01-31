function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  const keys = Object.keys(source);

  arr = collection.filter(obj => {
    return keys.every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
  });

  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
