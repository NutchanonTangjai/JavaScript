function arrayValuesTypes(arr){
    res = []
    for(i=0;i<arr.length;i++){
        res.push( typeof(arr[i]))
    }
    return res;
}
console.log(arrayValuesTypes([1,2,"null",[]]))