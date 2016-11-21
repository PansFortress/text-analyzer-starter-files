$("form").submit(function(event){
	//grab all the text
	//run the text through a few analyzers for
	//1. Word Count
	//2. Unique Word Count
	//3. Average Word Length
	//4. Average Sentence Length
	var userInput = $(this).find('#user-text').val();
	//console.log(getUniqueWordCount(userInput));
	console.log(getAvgSentenceLength(userInput));
});

function getWordCount(someText){
	return someText.split(" ").length;
};

function getUniqueWordCount(someText){
	var someArray = [];
	someText = someText.trim().split(" ");
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
	someText = someText.trim().split(" ");
	var totalWordLength = 0;

	for(var i = 0; i < someText.length; i++){
		totalWordLength+=someText[i].length;
	}

	return (totalWordLength/someText.length);
};

//Something weird is happening here with what I assume is newline
function getAvgSentenceLength(someText){
	someText = someText.trim().split(".");
	console.log(someText);
	var totalWordCount = 0;

	for(var i = 0; i < someText.length-1; i++){
		totalWordCount += someText[i].trim().split(" ").length;
	}

	return (totalWordCount/someText.length-1);
};