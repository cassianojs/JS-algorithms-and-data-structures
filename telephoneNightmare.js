/*code explanation
  ^1?\s? checks if the number starts with 1 and if there's a space right after it
  (\(\d{3}\)|\d{3}) checks if there are parentheses or not in the area code
  also it forces area code to be only 3 numbers
  (-|\s)? checks for '-' or space
  (\d{3}) check if they are followed by 3 digits 
  (-|\s)? after a last test between hyphen and space 
  (\d{4})$  forces the last 4 characters to be digits
*/

function telephoneCheck(str) {
  const regex = /^1?\s?(\(\d{3}\)|\d{3})(-|\s)?(\d{3})(-|\s)?(\d{4})$/
  return regex.test(str);

}
telephoneCheck("555-555-5555");

  //previous discarded tries below
  //regex for parentheses = ^1?(?=\(\d{3})\)|(\d{3}))
  //const regex = /^1?\s?\(?(\d{3})\)?[- ]?(\d{3})[- ]?\d{4}$/;
  //const regex = /^[1 ]?(?=(\(\d{3}\))|(\d{3}))[- ]?(\d{3})[- ]?\d{4}$/;
  //const regex = /^[1 ]?(?=\(\d{3}\)|\d{3})/
