function find(arr,count=0,cnt = []){
    if(cnt.length != 10){
        let val = arr[count].toString().split('').map((value)=>parseInt(value));
        for (const data of val) {
            if(!cnt.includes(data)){
                cnt.push(data);
            }
        }
        ++count;
        console.log(count);
        return find(arr,count,cnt);
    }
    else {
        return arr[count];
    }

}
console.log(find([5175,4538,2926,5057,6401,4376,2280,6137,8798,9083]));
console.log(find([5719,7218,3989,8161,2676,3847,6890,3370,2363,1681]));
