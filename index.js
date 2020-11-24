var readlineSync = require('readline-sync');
var chalk = require('chalk');

console.log(chalk.bgBlue("Welcome"));
var username = readlineSync.question(chalk.blueBright("Your Good Name please: "));
console.log(chalk.greenBright('\nHello',username,",Buckle UP! Get Ready to play the Bahubali quiz and find out the Bahubali's Killer"));

console.log(chalk.whiteBright.bgRedBright.bold.underline('\nRules & Instructions: '));
console.log(chalk.yellowBright('\n1. There are 5 Questions on Bahubali and all are Compulsory.\n2. You will rewarded 2 points on each Right Answer and -1 for each wrong answer.\n3. In these MCQ based questions you have to type the Index Value.'));

var scoreboard = [
  {
    name:'Raj',
    score: '10'
  },
  {
    name:'Saurav',
    score: '7'
  },
  {
    name:'Tanush',
    score: '5'
  }
];

var score = 0;
function quiz(question,answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toLowerCase() == answer.toLowerCase()){
    console.log(chalk.green('You are Right.'));
    score = score + 2;
  }else{
    console.log(chalk.red('You are Wrong.'));
    console.log(chalk.yellow('The Correct Answer is: ',chalk.red(answer)));
    score = score - 1;
  }
  if(score < 0){
    score = 0;
  }
  console.log(chalk.cyanBright('Score is: ',score));
}

function quizMcq(listOfAnswers,question,answer){
  var userAnswer = readlineSync.keyInSelect(listOfAnswers, question);
  console.log('\n');
  if(listOfAnswers[userAnswer] === answer){
    console.log(chalk.green('You are Right.'));
    score = score + 2;
  }else{
    console.log(chalk.red('You are Wrong.'));
    console.log(chalk.blue('The Correct Answer is: ',answer));
    score = score - 1;
  }
  if(score < 0){
    score = 0;
  }
  console.log(chalk.cyan('Score is: ',score));
}

var mcqList = [
  {
    options : ['Avantika', 'Vantika', 'Tamnnah', 'Devasena'],
    question : 'What was the name of character of Anushka in Bahubali ? ',
    answer : 'Devasena'
  },
  {
    options : ['SS Rajamouli', 'Raghavendar Rao', 'Karan Johar', 'RGV'],
    question : 'Who is the director of Bahubali?',
    answer : 'SS Rajamouli'
  },
  {
    options : ['Lion', 'Horse', 'Elephant', 'Tiger'],
    question : 'What animal sigil is inscribed on Amarendra bahubali\'s armour ',
    answer : 'Horse'
  },
  {
    options : ['Kilbil', 'Kalibali', 'Kilkil', 'Chulbul'],
    question : 'What is the language used by kalakeyas in the film?  ',
    answer : 'Kilkil'
  },
  {
    options : ['Because bhallaladeva wanted to kill Bahubali', 'Because Bijjaldeva told to kill Bahubali', 'Because he himself wanted to kill Bahubali', 'Because sivagami told him'],
    question : 'Why did Katappa killed Bahubali? ',
    answer : 'Because sivagami told him'
  },
];

for(var i = 0;i < mcqList.length; i++){
  console.log('\n');
  console.log(chalk.cyanBright('Question',i+1));
  quizMcq(mcqList[i].options,mcqList[i].question,mcqList[i].answer);
  console.log('------------------------------');
}

console.log('\n');
console.log(chalk.cyanBright.underline('Congratulations',username,'! Your Total Score is: ',score));

scoreboard.push({'name': username,'score': score})
console.log(chalk.bgBlack.bold.whiteBright.underline('\nScoreboard:\n'));
console.log(chalk.cyanBright('Name\t\tScore\n'));

for(var i = 0;i<scoreboard.length;i++){
  console.log(chalk.magentaBright(scoreboard[i].name,'\t\t',scoreboard[i].score));
}

if(score == 10){
  console.log('You just found out who killed Bahubali!!!  Congratulations! You are a HIGH SCORER!!! Please send me the screenshot of your score!')
}

console.log(chalk.yellow('\nHope you enjoyed the Quiz!'));