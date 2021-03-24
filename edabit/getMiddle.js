function getMiddle(str) {
    var cnt = str.length;
  var c = parseInt(str.length / 2);
    return cnt % 2 == 0 ? str.slice(c - 1, c + 1) : str[c];
}
console.log(getMiddle("e"));