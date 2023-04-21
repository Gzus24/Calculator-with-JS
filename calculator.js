let display = document.getElementById('display');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let divide = document.getElementById('divide');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let multiply = document.getElementById('multiply');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let minus = document.getElementById('minus');
let zero = document.getElementById('zero');
let decimal = document.getElementById('decimal');
let plus = document.getElementById('plus');
let equal = document.getElementById('equal');
let clear = document.getElementById('clear'); 

seven.onclick = () => {
    display.innerHTML += 7;
}
eight.onclick = () => {
    display.innerHTML += 8;
}
nine.onclick = () => {
    display.innerHTML += 9;
}
divide.onclick = () => {
    display.innerHTML += '/';
}
four.onclick = () => {
    display.innerHTML += 4;
}
five.onclick = () => {
    display.innerHTML += 5;
}
six.onclick = () => {
    display.innerHTML += 6;
}
multiply.onclick = () => {
    display.innerHTML += '*';
}
one.onclick = () => {
    display.innerHTML += 1;
}
two.onclick = () => {
    display.innerHTML += 2;
}
three.onclick = () => {
    display.innerHTML += 3;
}
minus.onclick = () => {
    display.innerHTML += '-';
}
zero.onclick = () => {
    display.innerHTML += 0;
}
decimal.onclick = () => {
    display.innerHTML += '.';
}
plus.onclick = () => {
    display.innerHTML += '+';
}
equal.onclick = () => {
    display.innerHTML = eval(display.innerHTML);
}
clear.onclick = () => {
    display.innerHTML = '';
}
