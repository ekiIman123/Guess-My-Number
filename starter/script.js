'use strict';

/*
document.querySelector('.message');
document.querySelector('.message').textContent = 'Correct number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
*/

document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
});
