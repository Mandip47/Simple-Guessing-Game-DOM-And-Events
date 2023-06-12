// Implement a game rest functionality, so that the player can make a new guess!

// Your tasks:

// 1. Select the element with the 'again' class and attach a click event handler

// 2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables

// 3. Restore the initial conditions of the message, number, score and guess input fields

// 4. Also restore the original background color (#222) and number width (15rem)

let score = 20;
let highScore = 0;
document.querySelector('.highscore').textContent = highScore;

// secret Number
let secretNumber = Math.trunc(Math.random()*20 + 1);
// display message
function printMessage(message) {
document.querySelector('.message').textContent = message;
}

console.log(secretNumber);
//event listener 
document.querySelector('.check').addEventListener('click',function(){
  //guess number
  const guess = Number(document.querySelector('.guess').value);
  //no guess number
  if(!guess){
    // document.querySelector('.message').textContent = '⛔ No number!!';

printMessage('⛔ No number!!');
    // guess correct
  }else if(secretNumber === guess){
// document.querySelector('.message').textContent = '😎 You won!!';  
 printMessage('😎 You won!!');  document.querySelector('body').style.backgroundColor = '#60b347';
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.number').style.width = '30rem';
if(highScore <= score){
  highScore = score;
  document.querySelector('.highscore').textContent = highScore;
}
    //guess greater
  }else if(guess <=20 && guess > 0){
    if(score > 1){
    // document.querySelector('.message').textContent = '📈 Too High!!';
guess > secretNumber ? printMessage('📈 Too High!!') : printMessage('📉 Too Low!!');
score--;
document.querySelector('.score').textContent = score;
    }else{
      // document.querySelector('.message').textContent = '😵 You Lose !!';
     printMessage('😵 You Lose !!'); document.querySelector('.score').textContent = 0;
document.querySelector('.number').textContent = secretNumber;
    }}
    //guess less
//   }else if(guess < secretNumber && guess <=20 && guess > 0){
//     if(score > 1){ document.querySelector('.message').textContent = '📉 Too Low!!';
// score--;
// document.querySelector('.score').textContent = score;
//   }else{     document.querySelector('.message').textContent = '😵 You Lose !!';
//         document.querySelector('.score').textContent = 0;
//   }
//   }
  else{
    if(score > 1){
   printMessage('💥 Invalid Input');
   score--;
document.querySelector('.score').textContent = score;
    }
    else{
     printMessage('😵 You Lose !!'); document.querySelector('.score').textContent = 0;
document.querySelector('.number').textContent = secretNumber;
    }
  }
});
//again
document.querySelector('.again').addEventListener('click',function(){
score = 20;
   document.querySelector('.score').textContent = score;

// document.querySelector('.message').textContent = 'Start guessing...';  
   printMessage('Start guessing...'); document.querySelector('body').style.backgroundColor = '#222';
document.querySelector('.number').textContent = '?';
document.querySelector('.number').style.width = '15rem';
document.querySelector('.guess').value = '';

secretNumber = Math.trunc(Math.random()*20 + 1);
});


