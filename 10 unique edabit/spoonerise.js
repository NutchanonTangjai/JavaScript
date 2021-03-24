function spoonerise(str){
    str = str.split(" ");
    var f1,f2,p1,p2
    for(i=0;i<str[0].length;i++){
        if(str[0][i].match(/[aeiou]/)){
            f1 = str[0].substr(0,i)
            p1 = i;
            break
        }
    }
    for(i=0;i<str[1].length;i++){
        if(str[1][i].match(/[aeiou]/)){
            f2 = str[1].substr(0,i)
            p2 = i;
            break
        }
    }
    return f2 + str[0].substr(p1,) + " " + f1 + str[1].substr(p2,)
}
console.log(spoonerise("history lecture"));
console.log(spoonerise("loud noises"));
console.log(spoonerise("chow mein"));
console.log(spoonerise("edabit rules!"));