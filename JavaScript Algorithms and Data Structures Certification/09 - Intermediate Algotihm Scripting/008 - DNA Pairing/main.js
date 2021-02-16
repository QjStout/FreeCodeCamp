function pairElement(str) {
  let resStr = str.slice().split('');
  
  resStr.forEach((element, index) => {
    let pairEl = '';
    switch (element) {
      case 'G':
        pairEl = 'C';
        break;
      case 'C':
        pairEl = 'G';
        break
      case 'A':
        pairEl = 'T';
        break;
      case 'T':
        pairEl = 'A';
        break;
    }
    resStr[index] = [element, pairEl];
  });
  return resStr;
}

pairElement("GCG");