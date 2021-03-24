function removeDups(arr){
    res = [];
    for(i=0;i<arr.length;i++){
        if(!res.includes(arr[i])){
            res.push(arr[i]);
        }    
    }
    return res;

}
console.log(removeDups([1,0,1,0]))
console.log(removeDups(["The","big","cat"]))
console.log(removeDups(["John","Taylor","John"]))