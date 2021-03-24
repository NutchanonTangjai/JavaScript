function pigLatinSentence(str){
    arr = str.split(" ")
    res = [];
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr[i].length;j++){
            if(arr[i][0].match(/[aeiou]/)){
                res.push(arr[i]+"way");
                break;
            }else if(arr[i][j].match(/[aeiou]/)){
                mes = arr[i].substr(j,) + arr[i].substr(0,j) + "ay" 
                res.push(mes)
                break;
            }
        }
        
    }
    return res;
}
console.log(pigLatinSentence("this is pig latin"));
console.log(pigLatinSentence("wall street journal"));