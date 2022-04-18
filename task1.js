let number = prompt('Enter the number: ', 0);

let result = 0;

if (number > 0) {
    result = 1;
} else if (number < 0) {
    result = -1;
} else {
    result = 0;
}

alert('Result: ' + result);