function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs: 4,
  eat: () => true,
  describe: () => {console.log("This is a dog. The dog has " + Dog.numLegs + " legs.")}
};