function whoWon(b){
    t = b
    for(i=0;i<t.length;i++){
        if(t[i][0] == t[i][1] && t[i][1] == t[i][2]){return t[i][0]} 
        if(t[0][i] == t[1][i] && t[1][i] == t[2][i]){return t[0][i]} 
    }
    if(t[0][0] == t[1][1] && t[1][1] == t[2][2]){return t[0][0]} 
    if(t[0][2] == t[1][1] && t[1][1] == t[2][0]){return t[0][2]}
    return "Tie" 
}
console.log(whoWon([
    ["X","O","B"],
    ["O","X","B"],
    ["X","O","X"],
]));
console.log(whoWon([
    ["X","O","B"],
    ["O","O","B"],
    ["X","O","X"],
]));