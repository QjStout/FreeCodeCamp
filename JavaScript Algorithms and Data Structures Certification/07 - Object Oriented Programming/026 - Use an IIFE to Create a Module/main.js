const funModule = ((obj) => {
  return {
    isCuteMixin: (obj) => {return true;},
    singMixin: (obj) => {console.log("Singing to an awesome tune");}
  };
})();
