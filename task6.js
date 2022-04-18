let buttonElement = document.getElementById('button');
let counterElement = document.getElementById('counter');

buttonElement.addEventListener('click', () => {
    counterElement.innerText = +counterElement.innerText + 1;
});

let button1Element = document.getElementById('button1');

button1Element.addEventListener('click', () => {
    counterElement.innerText = +counterElement.innerText - 1;
});