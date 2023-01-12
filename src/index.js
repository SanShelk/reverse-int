module.exports = function reverse (n) {
    let result
    if (n <= 0){
      return parseInt(n.toString().split("").reverse().join(""));
    }
       else if (!parseInt(n)) {
              return ('Need to write a number!')}
      
      else {
        return (n.toString().split("").reverse().join(""));}
      return result
}
