function spinalCase(str) {
  const strCopy = str
    .split(/\s|_|(?=[A-Z])/)
    .join('-')
    .toLowerCase();

  return strCopy;
}

spinalCase('This Is Spinal Tap');