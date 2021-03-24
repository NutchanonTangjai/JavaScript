function findNemo(sentence) {
	var arr=sentence.split(" ").indexOf("Nemo")+1;
    return arr ? `I found Nemo at ${arr}!` : "I can't find Nemo :(";
}
