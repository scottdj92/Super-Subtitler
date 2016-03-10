//set up voice recognition
var julius = new Julius();

julius.onrecognition = function(sentence, score) {
	console.log(sentence);
}