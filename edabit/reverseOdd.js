function reverseOdd(str) {
	var rspl = str.split(" ");
    var result='';
    for(var spl of rspl){
        if(spl.length % 2 == 1){
            j += spl.split('').reverse().join('')+" "; 
        } 
        else{
            result+=spl+" ";
        }
    }
    return result.substr(0,j.length-1);
}
