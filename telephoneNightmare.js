/* CHALLENGE
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. 
The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf.
Your job is to validate or reject the US phone number based on any combination of the formats provided above. 
The area code is required. If the country code is provided, you must confirm that the country code is 1.
Return true if the string is a valid US phone number; otherwise return false.
---------------------------------------------------------

  CODE EXPLANATION
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

export default telephoneCheck
  //previous discarded tries below
  //regex for parentheses = ^1?(?=\(\d{3})\)|(\d{3}))
  //const regex = /^1?\s?\(?(\d{3})\)?[- ]?(\d{3})[- ]?\d{4}$/;
  //const regex = /^[1 ]?(?=(\(\d{3}\))|(\d{3}))[- ]?(\d{3})[- ]?\d{4}$/;
  //const regex = /^[1 ]?(?=\(\d{3}\)|\d{3})/
