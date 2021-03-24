function secoundLargest(arr){
    arr = arr.sort((a,b)=>b-a);
    return arr[1];
}
console.log(secoundLargest([10,40,30,20,50]))
console.log(secoundLargest([25,143,89,13,105]))
console.log(secoundLargest([54,23,11,17,10]))