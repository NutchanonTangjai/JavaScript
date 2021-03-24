function capToFront(str){
    var txt="";
    var ltxt="";
    for(let i =0;i<str.length;i++){
        var temp = str.charAt(i);
        if(temp==temp.toUpperCase()){
            txt+=temp;
        }
        else {
            ltxt+=temp;
        }
    }
    return(txt+ltxt);
}
console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));