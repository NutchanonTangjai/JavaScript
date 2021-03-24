function whoWon(b){
    for(i=0;i<b.length;i++){
        for(j=0;j<b.length;j++){
            if(b[i][j] == b[i][j+1] && b[i][j+1] == b[i][j+2]){
                return b[i][j]
            }
            if(b[i][j] == b[i+1][j] && b[i+1][j] == b[i+2][j]){
                return b[i][j]
            }
            if(b[i][j] == b[i+1][j+1] && b[i+1][j+1] == b[i+2][j+2]){
                return b[i][j]
            }
            if(b[i+2][j+2] == b[i+1][j+1] && b[i+1][j+1] == b[i][j+2]){
                return b[i][j]
            }
        }
    }
    return "Tie"
}
console.log(whoWon([
    ["X","O","B"],
    ["O","X","B"],
    ["X","O","X"],
]));