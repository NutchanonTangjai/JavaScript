function isValidIP(str){
    str =str.split(".");
    if(str.length == 4){
        for(i = 0;i<4;i++){
            if(parseInt(str[i])>255){
                return false;
            }
            if(str[i][0] == "0" && str[i].length > 1){
                return false;
            }    
        }
        return true;
    }
    else{
        return false;
    }
}

console.log(isValidIP("1.2.3.4"));
console.log(isValidIP("1.2.3"));
console.log(isValidIP("1.2.3.4.5"));
console.log(isValidIP("123.45.67.89"));
console.log(isValidIP("123.456.78.090"));
console.log(isValidIP("123.045.067.089"));