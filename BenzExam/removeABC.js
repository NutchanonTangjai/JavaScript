function removeABC(str){
    res = "";
    count = 0;
    for(i=0;i<str.length;i++){
        if(str[i] == "a" || str[i] == "b" || str[i] == "c"){
            res+=" ";
            count++;
        }
        else{
            res+=str[i]
        }
    }
    if(count != 0){
        return (res);
    }
    else{
        return null;
    }
}
console.log(removeABC("This might be a bit hard"));
console.log(removeABC("Hello world!"));
console.log(removeABC(""));

