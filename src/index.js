module.exports = function check(str, bracketsConfig) {
    let arr = [];
      for (let i = 0; i < bracketsConfig.length; i++) {
         arr.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
      }
      
      for (l = 0; l < 5; l++) {
        for (let j = 0; j < arr.length; j++) {
          while (str.indexOf(arr[j]) >= 0) {
            str = str.replace(arr[j], '');
          }
        }
      }
       
      if (str.length == 0) {
        return true;
      } else {
         return false;
      }
  }
