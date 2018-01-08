var knockKnockJoke = require('knock-knock-jokes');
var oneLineJoke = require('one-liner-joke');

function createKnockKnock() {
	return knockKnockJoke();
}

function createOneLiner() {
	return oneLineJoke.getRandomJoke().body;
}

module.exports = {
	createKnockKnock: createKnockKnock,
	createOneLiner: createOneLiner
}