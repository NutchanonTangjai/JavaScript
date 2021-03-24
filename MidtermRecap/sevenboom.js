function sevenBoom(arr){
    arr = arr.join("")
    if(arr.indexOf("7"!=-1)){
        return "Boom"
    }
    else{
        return "no 7"
    }
}
console.log(sevenBoom([545614,13217]));