'use strict';

let randomNumber = parseInt(Math.random() * 100);  
   
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
 
function tryToGame() {
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
tryToGame();


 

 



