function addStrNums(s1,s2){
    if(s1 == ""){
        s1 = 0
    }
    if(s2 == ""){
        s2 = 0
    }
    s1 = parseInt(s1)
    s2 = parseInt(s2)
    if(isNaN(s1) || isNaN(s2)){
        return "-1"
    }
    res = s1+s2
    return res.toString();
}
console.log(addStrNums("4", "5")); 
console.log(addStrNums("abcdefg", "3"))
console.log(addStrNums("1", ""))
console.log(addStrNums("1874682736267235927359283579235789257", "32652983572985729"))