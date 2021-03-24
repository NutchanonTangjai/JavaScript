function additivePersistence(num,count=0){
    num=num.toString();
    total = 0;
    if(num.length>1){
        count++
        
        for(i =0;i< num.length;i++){
            total+=parseInt(num[i]);
        }
        return additivePersistence(total,count)
    }
    else{
        return(count);
    }

}
console.log(additivePersistence(1679583));