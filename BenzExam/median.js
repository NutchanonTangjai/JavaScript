function median (arr){
    if(arr.length % 2 == 0){
        return (arr[(arr.length/2)-1]+arr[(arr.length/2)])/2
    }
    else{
        return (arr[(Math.floor(arr.length/2))]);
    }
}
console.log(median([1,2,4,5,6,8,8,8,10]))
console.log(median([2,2,6,8,8,10,10]))
console.log(median([1,2,2,4,7,8,9,10]))