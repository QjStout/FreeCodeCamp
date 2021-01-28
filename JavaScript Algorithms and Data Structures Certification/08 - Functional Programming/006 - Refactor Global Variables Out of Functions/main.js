// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (list, name) {
  let copyList = [...list];
  copyList.push(name);
  return copyList;  
  // Change code above this line
}

// Change code below this line
function remove (list, name) {
  let copyList = [...list];
  const index = copyList.indexOf(name);
  copyList.splice(index, 1);
  return copyList;

    // Change code above this line
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);