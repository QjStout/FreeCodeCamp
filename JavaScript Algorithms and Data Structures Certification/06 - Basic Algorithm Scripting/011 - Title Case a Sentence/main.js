function titleCase(str) {
  let titleCaseArr = str.toLowerCase().split(' ');

  for(const word in titleCaseArr) {
    titleCaseArr[word] = titleCaseArr[word].split('');
    titleCaseArr[word][0] = titleCaseArr[word][0].toUpperCase();
    titleCaseArr[word] = titleCaseArr[word].join('');
  }

  return titleCaseArr.join(' ');
}

titleCase("I'm a little tea pot");