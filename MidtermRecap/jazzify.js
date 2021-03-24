function jazzify(arr){
    if(arr.join('').lastIndexOf("7")==-1){
        return arr.map(x=>x+"7");
    }
    else{
        return arr;
    }
    
}
console.log(jazzify(["G","F","C"]));
console.log(jazzify(["Dm","G","E","A"]));
console.log(jazzify(["F7","E7","A7","Ab7","Gm7","C7"]));
console.log(jazzify([]));