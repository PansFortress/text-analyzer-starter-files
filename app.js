$("form").submit(function(event){
	//grab all the text
	//run the text through a few analyzers for
	//1. Word Count
	//2. Unique Word Count
	//3. Average Word Length
	//4. Average Sentence Length
	event.preventDefault();
	var userInput = $('#user-text').val();
	$(".text-report").removeClass("hidden");
	$(".js-wordcount").text(getWordCount(userInput));
	$(".js-u-wordcount").text(getUniqueWordCount(userInput));
	$(".js-avg-wordlength").text(getAvgWordLength(userInput));
	$(".js-avg-sentencelength").text(getAvgSentenceLength(userInput));
	//console.log(getUniqueWordCount(userInput));
	console.log(getAvgWordLength(userInput));
});

//TODO: ipsum.↵↵Morbi is counted as one word and not two
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

//TODO: Cleanup periods
function getAvgWordLength(someText){
	someText = someText.trim().split(" ");
	console.log(someText);
	var totalWordLength = 0;

	for(var i = 0; i < someText.length; i++){
		totalWordLength+=someText[i].length;
	}

	return (totalWordLength/someText.length);
};

function getAvgSentenceLength(someText){
	someText = someText.trim().split(".");
	someText = someText.filter(function(sentence){
		if(sentence !== ""){
			return true;
		}
		return false;
	});

	console.log(someText);
	var totalWordCount = 0;

	for(var i = 0; i < someText.length; i++){
		totalWordCount += someText[i].trim().split(" ").length;
	}

	return (totalWordCount/someText.length);
};