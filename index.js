var readlineSync = require("readline-sync")
const chalk = require('chalk');

var score = 0

var question = [{
  question: `
	What do I like eating?
	a: Ice-cream
	b: Pizza
	c: Momos\n`,
  answer: "b"
}, {
  question: `
	What makes me happy?
	a: Sleep
	b: Memes
	c: Random stuff\n`,
  answer: "c"
}, {
  question: `
	How many girlfriends I had?
	a: 3
	b: 2
	c: 0\n`,
  answer: "c"
}, {
  question: `
	Which is my favouite place?
	a: Butterfly beach
	b: Surla Waterfall
	c: Sunset point\n`,
  answer: "b"
}, {
  question: `
	My favouite thing to everyday?
	a: Talk to loved ones
	b: Playing the guitar
	c: Working out\n`,
  answer: "b"
},]

var questionLevelTwo = [{
  question: `
	Which movie I am fond of?
	a: Starwars
	b: Fast and furious
	c: American Pie\n`,
  answer: "a"
}, {
  question: `
	My current favourite anime?
	a: Jujustu Kaisen
	b: Demon Slayer
	c: Attack on titan\n`,
  answer: "a"
}, {
  question: `
	When I am sad I?
	a: Eat
	b: Sleep
	c: Talk to someone\n`,
  answer: "b"
}, {
  question: `
	Which game I play the most?
	a: Football
	b: Taekwondo
	c: Chess\n`,
  answer: "c"
}, {
  question: `
	I wanna be a?
	a: Happy person
	b: Millionaire
	c: Engineer\n`,
  answer: "b"
},]

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() === answer) {
    console.log(chalk.green("Right!"))
    score++;
  } else {
    console.log(chalk.red("Wrong!"))
  }

  console.log("Current score: " + score)
}

var userName = readlineSync.question("Whats your name?");

console.log(chalk.cyan("Welcome ") + chalk.greenBright(userName) + " to Do you know Carson?")

for (var i = 0; i < question.length; i++) {
  play(question[i].question, question[i].answer)
}

if (score == question.length) {
  console.log(chalk.bgGreen("Congratulations") + chalk.bgGreen(userName) + chalk.bgGreen(" , You made it to level 2"))

  for (var i = 0; i < questionLevelTwo.length; i++) {
    play(questionLevelTwo[i].question, questionLevelTwo[i].answer)
  }

  if(score==questionLevelTwo.length+question.length){
    console.log(chalk.bgBlueBright("Perfect score, you are my bestie!!!"))
  }else{
    console.log(chalk.bgBlueBright("Its fine, we can know eachother more"))
  }

} else {
  console.log(chalk.yellow("Sad!!") + chalk.cyan(userName) + chalk.yellow(" , you don't know Carson that well! Hangout with him more"))
}