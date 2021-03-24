function reversecamelCase(str){
    res = []
    for(i=0;i<str.length;i++){
        if(str[i] == "_"){
            res.push(str[i+1].toUpperCase())
            i++;
        }
        else if(str[i] == str[i].toUpperCase()){
            res.push("_",str[i].toLowerCase())
        }
        else{
            res.push(str[i]);
        }
    }
    return res.join('');
}
console.log(reversecamelCase("hello_nutchanon"));
console.log(reversecamelCase("helloNutchanon"));
console.log(reversecamelCase("getColor"));