'use strict';

let randomNumber = parseInt(Math.random() * 100);  
   
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
 
/* function tryToGame() {
    let input = prompt('Введи число от 1 до 100!');   
    if (isNumber(input)) {   
    input = +input;

      if (input > randomNumber) {
        alert('Загаданное число меньше ', 'Введи другое число!');
      } else if (input < randomNumber) {
        alert('Загаданное число больше ', 'Введи другое число!');
      } else if (input === randomNumber) {
        alert('Поздравляю, Вы угадали!!!');
        return input;
      }
   } else {
    return alert('Можно вводить только числа');
  }tryToGame();
}
tryToGame(); */


const tryToGame = function() {
    let ranNumber = randomNumber;
    console.log('rNumber: ', ranNumber);
    const getTryToGame = function () {   
        const input = prompt('"Угадай число от 1 до 100"');
        if (input === null) {
            alert('Игра Окончена!');
            return;
        }
        if (isNumber(input)) {
            const userNum = +input;
            if (userNum > randomNumber) {
                alert('Загаданное число меньше');
                getTryToGame();
            } else if (userNum < randomNumber) {
                alert('Загаданное число больше');
                getTryToGame();
            } else {
                alert('Поздравляю, Вы угадали!!!');
              return;
             
            }
          } else {
            alert('Введите число');
            getTryToGame();
        }
    };
  getTryToGame();
 
};

tryToGame();


 



