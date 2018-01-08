var jokeHandler = require('./jokeHandler.js');
var flags = require('flags');
var utils = require('./utils.js');



flags.defineString('jokeType', 'oneliner', 'A joke for you!');
flags.defineBoolean('quotes', 'Add quotes around the joke');
flags.defineBoolean('uppercase', 'Make the joke uppercase');
flags.defineInteger('x', 1, 'Repeat the joke');
flags.parse();

var generatedJoke = jokeHandler.createKnockKnock();

if (flags.get('jokeType') == ('oneliner')) {
	generatedJoke = jokeHandler.createOneLiner();
}
if (flags.get('quotes')) {
	generatedJoke = utils.addQuotes(generatedJoke);
}
if (flags.get('uppercase')) {
	generatedJoke = utils.makeUpperCase(generatedJoke);
}
generatedJoke = utils.repeatXTimes(generatedJoke, flags.get('x'));

console.log(generatedJoke);
