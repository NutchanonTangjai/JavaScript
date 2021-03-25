function calculateScore(arr) {
  let check = 0;
  for (i = 0; i < arr.length; i++) {
    p1 = arr[i][0];
    p2 = arr[i][1];
    if (p1 == "R") {
      if (p2 == "R") {
        return "Tie";
      }
      if (p2 == "P") {
        check--;
      }
      if (p2 == "S") {
        check++;
      }
    } else if (p1 == "P") {
      if (p2 == "R") {
        check++;
      }
      if (p2 == "P") {
        return "Tie";
      }
      if (p2 == "S") {
        check--;
      }
    } else if (p1 == "S") {
      if (p2 == "R") {
        check--;
      }
      if (p2 == "P") {
        check++;
      }
      if (p2 == "S") {
        return "Tie";
      }
    }
  }
  if (check > 0) {
    return "Abigail";
  } else {
    return "Benson";
  }
}
console.log(
  calculateScore([
    ["R", "P"],
    ["R", "S"],
    ["S", "P"],
  ])
);
console.log(
  calculateScore([
    ["R", "R"],
    ["S", "S"],
  ])
);
console.log(
  calculateScore([
    ["S", "R"],
    ["R", "S"],
    ["R", "R"],
  ])
);
