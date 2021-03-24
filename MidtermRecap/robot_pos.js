function robot_pos(step){
    var robot = 31;
    arr = []
    for(i=0;i<49;i++){
        if(i+1==14){
            arr.push("TG-1")
        }
        else if(i+1==15){
            arr.push("TG-2")
        }
        else{
            arr.push("")
        }
    }
    for(i=0;i<step.length;i++){
        if(step[i] == "n"){
            robot -= 7
        }
        if(step[i] == "s"){
            robot += 7
        }
        if(step[i] == "w"){
            robot -= 1
        }
        if(step[i] == "e"){
            robot += 1
        }
    }
    return arr[robot]
}
console.log(robot_pos());