// Selt-explanatory challenge, convert numbers to roman numerals
// I could have used a dictionary (or object if you prefer) but I decided to try something different and the >> operator

function convertToRoman(num) {
    let romanNum = "";
    console.log(num);
  //checks if the number is higher than 1000
    let result = num / 1000 >> 0;
    num = num - (result * 1000);
    if (result >= 1) {
  
      if (result <=3) {
        for (let i=1; i<=result ;i++) {
          romanNum += "M";
        }
      } else if (result == 4) {
          romanNum += "MV";
      } else if (result <= 8) {
          romanNum += "V";
          for (let i=5; i<result ;i++) {
            romanNum += "I";
          }
      } else {
          romanNum +="MX";
      } 
    }
    
    //checks if the number is higher than 100
    result = num / 100 >> 0;
    num = num - (result * 100);
    if (result >= 1) {
  
      if (result <=3) {
        for (let i=1; i<=result ;i++) {
          romanNum += "C";
        }
      } else if (result == 4) {
          romanNum += "CD";
      } else if (result <= 8) {
          romanNum += "D";
          for (let i=5; i<result ;i++) {
            romanNum += "C";
          }
      } else {
          romanNum +="CM";
      } 
    }
    
    //checks if the number is higher than 10
    result = num / 10 >> 0;
    num = num - (result * 10);
    if (result >= 1) {
  
      if (result <=3) {
        for (let i=1; i<=result ;i++) {
          romanNum += "X";
        }
      } else if (result == 4) {
          romanNum += "XL";
      } else if (result <= 8) {
          romanNum += "L";
          for (let i=5; i<result ;i++) {
            romanNum += "X";
          }
      } else {
          romanNum +="XC";
      } 
    }
   
      

    if (num <=3){
      for (let i=1; i<=num ;i++) {
        romanNum += "I";
      }
    } else if (num == 4) {
        romanNum += "IV";
    } else if (num <= 8) {
        romanNum += "V";
        for (let i=5; i<num ;i++) {
          romanNum += "I";
        }
      } else {
          romanNum +="IX";
    }
    console.log(romanNum);
    return romanNum;
    }
  
  convertToRoman(512);
  console.log(num / 10 >> 0)

export default convertToRoman
