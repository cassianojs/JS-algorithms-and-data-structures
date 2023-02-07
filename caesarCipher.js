// Caesar's Cipher

const rot13 = (str) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const cipher = "NOPQRSTUVWXYZABCDEFGHIJKLM"
  return str.replace(/[A-Z]/g, function (letter){
   return cipher[alphabet.indexOf(letter)]
  })
}



/*Cute solution

const rot13 = (str) => {

  return str.replace(/[A-Z]/g, function (letter) { 
    String.fromCharCode(letter.charCodeAt(0) + (letter <= 'M' ? 13 : -13))})
}
*/
