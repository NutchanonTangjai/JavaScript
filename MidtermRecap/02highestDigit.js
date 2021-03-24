function highestDigit(num){
    check = num.toString();
    let max = 0;
    for(let i=0;i<check.length;i++){
        if(max<parseInt(check[i])){
            max = check[i];
        }
    }
    return max;
}
console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));