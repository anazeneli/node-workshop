
function makeUpperCase(joke) {
	return (joke.toUpperCase());
}

function repeatXTimes(joke, repetitions) {
	var answer = ""
	for (var i = 0; i < repetitions; i++) {
		answer += (joke + "\n");
	}
	return answer;
}

function addQuotes(joke) {
	return ("\"" + joke.split("\n").join("\"\n\"") + "\"");
}

module.exports = {
	makeUpperCase: makeUpperCase,
	repeatXTimes: repeatXTimes,
	addQuotes: addQuotes
}