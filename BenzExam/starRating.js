function starRating(arr){
    res = ((arr[0]+(arr[1]*2)+(arr[2]*3)+(arr[3]*4)+(arr[4]*5))/(arr[0]+arr[1]+arr[2]+arr[3]+arr[4]))
    star = ""
    for(i=0;i<Math.round(res);i++){
        star+="*"
    }  
    return "["+res.toFixed(2)+"] "+star;
}
console.log(starRating([55,67,98,115,61]))