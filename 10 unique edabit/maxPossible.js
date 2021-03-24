function maxPossible(num1,num2){
    num1 = num1.toString().split("");
    num2 = num2.toString().split("").sort((a,b)=>b-a).join("").substr(0,num1.length).split("");
    res = [];
    for(i=0,j=0;i<num1.length;i++){
        if(num1[i] < num2[j]){
            res.push(num2[j]);
            j++;
        }
        else{
            res.push(num1[i]);
        }
    }
    return res;
}
console.log(maxPossible(523, 76));
console.log(maxPossible(9132, 5564));
console.log(maxPossible(8732, 91255));