function ispanDigital(num) {
    arr = []
    num = num.toString();
    for(i=0;i<num.length;i++){
        if(!arr.includes(num[i])){
            arr.push(num[i]);
        }
    }
    for(i=0;i<10;i++){
        if(!arr.includes(i.toString())){
            return false;
        }
    }
    return true;
}
console.log(ispanDigital(98140723568910));
console.log(ispanDigital(90864523148909));
console.log(ispanDigital(112233445566778899n));
