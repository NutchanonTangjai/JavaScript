function reverseCase(str) {
    var mes="";
	for(i=0;i<str.length;i++){
        var c=str.charAt(i);
        if(c == c.toUpperCase()){
            mes+=c.toLowerCase();
        }
        else {
            mes+=c.toUpperCase();
        }
    }
    return mes;
}
console.log(reverseCase("BubuN"));