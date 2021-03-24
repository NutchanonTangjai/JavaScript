function time_sum(arr) {
  var h = 0;
  var m = 0;
  var s = 0;
  res = [];
  if (arr == []) {
    return [0, 0, 0];
  }
  for (i = 0; i < arr.length; i++) {
    temp = arr[i].split(":");
    temp = temp.map((x) => parseInt(x));
    s += temp[2];
    m += temp[1];
    h += temp[0];
    if (s > 60) {
      s -= 60;
      m++;
    }
    if (m > 60) {
      m -= 60;
      h++;
    }
  }
  res.push(h, m, s);
  return res;
}
console.log(time_sum(["1:23:45"]));
console.log(time_sum(["1:03:45", "1:23:05"]));
console.log(time_sum(["5:39:42", "10:02:08", "8:26:33"]));
console.log(time_sum([]));
