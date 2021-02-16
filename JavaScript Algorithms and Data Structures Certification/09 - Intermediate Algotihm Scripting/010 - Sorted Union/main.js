function uniteUnique(...arr) {
  const arrCopy = arr.
    slice()
    .flat()
    .reduce((acc, curr) => {
      if(!acc.includes(curr)) { acc.push(curr); }
      return acc;
    }, []);

  return arrCopy;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);