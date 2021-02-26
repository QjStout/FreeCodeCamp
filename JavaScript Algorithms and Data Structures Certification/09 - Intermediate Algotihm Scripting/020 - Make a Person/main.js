var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let _first = firstAndLast.split(' ')[0];
  let _last = firstAndLast.split(' ')[1];

  this.getFirstName = () => {return _first;};
  this.getLastName = () => {return _last;};
  this.getFullName = function() {
    return _first + ' ' + _last;
  };
  this.setFirstName = (first) => {_first = first;};
  this.setLastName = (last) => {_last = last;};
  this.setFullName = (firstAndLast) => {
    const words = firstAndLast.split(' ');
    _first = words[0];
    _last = words[1];
  };

  return firstAndLast;
};

var bob = new Person('Bob Ross');