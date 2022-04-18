let array = [1, 2, 3, 4, 5];

// Classic for
console.log('Classic for');

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// While
console.log('While');

let index1 = 0;
while (index1 < array.length) {
    console.log(array[index1]);
    index1++;
}

// do while
console.log('Do while');

let index2 = 0;
do {
    console.log(array[index2]);
    index2++;
} while (index2 < array.length)

// For in
console.log('For in');

for (let index in array) {
    console.log(array[index]);
}

// For of
console.log('For of');

for (let item in array) {
    console.log(item);
}

// Foreach
console.log('Foreach');
array.forEach(item => console.log(item));

// Map
console.log('Map');
array.map(item => console.log(item));