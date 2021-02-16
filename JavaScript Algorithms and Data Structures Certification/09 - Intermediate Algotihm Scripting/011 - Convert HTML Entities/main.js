function convertHTML(str) {
  let strCpy = str.slice().split('');

  strCpy.forEach((char, index, arr) => {
    switch (char) {
      case '&':
        arr[index] = '&amp;';
        break;
      case '<':
        arr[index] = '&lt;';
        break;
      case '>':
        arr[index] = '&gt;';
        break;
      case '"':
        arr[index] = '&quot;';
        break;
      case "'":
        arr[index] = '&apos;';
        break;
    }
  });
  strCpy = strCpy.join('');

  return strCpy;
}

convertHTML("Dolce & Gabbana");