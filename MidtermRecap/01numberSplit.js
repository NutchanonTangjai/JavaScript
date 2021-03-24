function numberSplit(num){
    let i = num;
    var arr = [];
    arr.push(Math.floor(num/2));
    arr.push(i-arr[0]);
    return arr;
}
console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));