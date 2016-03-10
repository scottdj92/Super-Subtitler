//set up voice recognition
var julius = new Julius('path/to/dfa', 'path/to/dict');
console.log('julius added');

julius.onrecognition = function(sentence, score) {
	console.log(sentence);
};