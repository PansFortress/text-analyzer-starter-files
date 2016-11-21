// your code here!
$("form").submit(function(event){
	//grab all the text
	//run the text through a few analyzers for
	//1. Word Count
	//2. Unique Word Count
	//3. Average Word Length
	//4. Average Sentence Length
	var userInput = $(this).find('#user-text').val();
	//console.log(getUniqueWordCount(userInput));
	console.log(getAvgWordLength(userInput));
});

function getWordCount(someText){
	return someText.split(" ").length;
};

function getUniqueWordCount(someText){
	var someArray = [];
	someText = someText.split(" ");
	//console.log(someText.length);

	for(var i = 0; i < someText.length; i++){
		var word = someText[i];

	//	console.log(word + " : " + someArray.indexOf(word));
		if(someArray.indexOf(word) < 0){
			someArray.push(word);
		}
	}
	return someArray.length;
};

function getAvgWordLength(someText){
	someText = someText.split(" ");
	var totalWordLength = 0;

	for(var i = 0; i < someText.length; i++){
		totalWordLength+=someText[i].length;
	}

	return (totalWordLength/someText.length);
};