function lessEqual(arr, k) {
  if (k == 0) {
    return 1;
  }
  arr = arr.sort((a, b) => a - b);
  res = [];
  for (i = 0; i < k; i++) {
    res.push(arr[i]);
  }
  arr = arr.slice(k);
  for(i = 0;i<res.length;i++){
      for(j=0;j<arr.length;j++){
          if(res[i] == arr[j])return null
      }
  }
  return res[res.length-1];
}
console.log(lessEqual([3, 7, 6, 1, 10, 3, 20], 4));
console.log(lessEqual([3, 7, 6, 1, 10, 3, 20], 2));
console.log(lessEqual([3, 7, 5, 1, 10, 3, 20], 4));
console.log(lessEqual([10, 15, 20, 25], 0));
