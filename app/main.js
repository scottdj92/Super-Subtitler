//set up voice recognition
var julius = new Julius();
console.log('julius added');

julius.onrecognition = function(sentence, score) {
	console.log(sentence);
};