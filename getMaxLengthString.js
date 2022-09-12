const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  //code here
  if(arrayOfString == undefined || null) return undefined
  else {
    var max_str = arrayOfString[0].length
    var ans = arrayOfString[0]
    for (i=1; i<arrayOfString.length; i++) {
      var maxi = arrayOfString[i].length
      if (maxi > max_str) {
        ans = arrayOfString[i]
        max_str = maxi
      }
      else if (maxi == max_str) {
        ans = [`${ans}`,`${arrayOfString[i]}`]
      }
    }
  }
  return ans = [ans_max]
}
module.exports = getMaxLengthString
