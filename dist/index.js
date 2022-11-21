"use strict";
function randColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const box = document.getElementById('color');
const btnDiv = document.getElementById('buttons');
const btns = btnDiv.getElementsByTagName('button');
function newColor() {
    const colors = [randColor(), randColor(), randColor()];
    const x = rand(0, 2);
    box.style.backgroundColor = colors[x];
    for (var i = 0; i < 3; i++) {
        btns[i].textContent = colors[i];
    }
    ;
    return x;
}
;
var answer = newColor();
const text = document.getElementById('text');
function colorGame(guess) {
    if (guess == answer) {
        text.style.color = 'green';
        text.innerHTML = 'Right!';
        answer = newColor();
    }
    else {
        text.style.color = 'red';
        text.innerHTML = 'Wrong. Next guess.';
    }
}
