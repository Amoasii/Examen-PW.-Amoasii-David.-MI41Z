let array = [
    {x: 1, y: 2},
    {x: 3, y: 4},
    {x: null, y: 4},
    {x: 3, y: undefined}
];

array = array.filter(item => typeof(item.x) === 'number' && typeof(item.y) === 'number');

console.log(array);