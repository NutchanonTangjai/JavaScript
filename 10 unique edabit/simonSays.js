function simonSays(arr) {
  var res = 0;
  for (i = 0; i < arr.length; i++) {
    temp = arr[i].split(" ");
    for (j = 0; j < temp.length; j++) {
      if(temp[j] == "Simon"){
          if(temp[j+2] == "add")res+=parseInt(temp[j+3])
          if(temp[j+2] == "subtract")res-=parseInt(temp[j+3])
          if(temp[j+2] == "multiply")res*=parseInt(temp[j+4])
          if(temp[j+2] == "divide")res/=parseInt(temp[j+4])
      }
    }
  }
  return res;
}
console.log(simonSays(["Simon says add 4", "Simon says add 6", "Then add 5"]));
console.log(simonSays(["Susan says add 10","Simon says add 3","Simon says multiply by 8",]));
console.log(simonSays(["Firstly, add 4", "Simeon says subtract 100"]));
