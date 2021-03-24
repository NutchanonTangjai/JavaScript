function dropright(arr,del=1){
    return arr.splice(0,arr.length-del);
}
console.log(dropright([1,2,3],5))