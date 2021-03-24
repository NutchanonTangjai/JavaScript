function totalVolume(){
    let total=0;
    for(let i =0;i<arguments.length;i++){
        let temp = 1;
        for(let j=0;j<arguments[i].length;j++){
            temp*=arguments[i][j];
        }
        total+=temp;
    }
    return total;
}
console.log(totalVolume([4,2,4],[3,3,3],[1,1,2],[2,1,1]));
console.log(totalVolume([2,2,2],[2,1,1]));
console.log(totalVolume([1,1,1]));