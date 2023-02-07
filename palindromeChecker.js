function palindrome(str) {
  let arr = str.replace(/[_\W]/g, '')
  .toLowerCase()
  .split('');
  str = arr.join('');
  return str === arr.reverse().join('');
}

console.log(palindrome("$%  _ 5sEyeS5"));

export as default palindrome
