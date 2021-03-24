function countTrue(arr) {
  count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i]) {
      count++;
    }
  }
  return count;
}
console.log(countTrue([true,false,false,true,false]))
console.log(countTrue([false,false,false,false]))
console.log(countTrue([]))