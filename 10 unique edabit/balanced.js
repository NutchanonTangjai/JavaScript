function balanced(str) {
  fst = "";
  lst = "";
  if (str.length % 2 != 0) {
    fst += str.substr(0, str.length / 2);
    lst += str.substr(str.length / 2 + 1);
  } else {
    fst += str.substr(0, str.length / 2);
    lst += str.substr(str.length / 2);
  }
  fstcnt = 0;
  for (i = 0; i < fst.length; i++) {
    fstcnt += fst.charCodeAt(i) - 96;
  }
  lstcnt = 0;
  for (i = 0; i < lst.length; i++) {
    lstcnt += lst.charCodeAt(i) - 96;
  }
  if (fstcnt == lstcnt) {
    return true;
  } else {
    return false;
  }
}
console.log(balanced("zips"));
console.log(balanced("brake"));
