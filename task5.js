let array = [
    {
        name: 'Student one',
        marks: [9, 5, 4, 2, 4]
    },
    {
        name: 'Student two',
        marks: [10, 2, 4, 10, 8]
    },
    {
        name: 'Student three',
        marks: [9, 6, 4, 2, 3]
    },
    {
        name: 'Student four',
        marks: [9, 8, 3, 2, 8]
    },
    {
        name: 'Student five',
        marks: [5, 6, 7, 2, 10]
    }
];

// 1
const calcAverage = (array) => {
    array.forEach(element => {
        let sumMarks = element.marks.reduce((a, b) => (a + b));
        element.average = sumMarks / element.marks.length;
    });
    return array;
}

console.log(calcAverage(array));


// 2
const showStudentsWithNegativeNotes = (array) => {
    let arrayWithAverage = calcAverage(array);

    arrayWithAverage.map(item => {
        if (item.average < 5) {
            console.log(`${item.name}: ${item.average}`);
        }
    });
}

showStudentsWithNegativeNotes(array);

// 3

const maxAndMinAverage = (array) => {
    let arrayWithAverage = calcAverage(array);

    arrayWithAverage.sort((a, b) => a.average - b.average);

    let min = arrayWithAverage[0];
    let max = arrayWithAverage[arrayWithAverage.length - 1];

    console.log('Min: ' + min.average);
    console.log('Max: ' + min.average);

    return {
        min,
        max 
    }
}

maxAndMinAverage(array);

// 4

const sortDesc = (array) => {
    let arrayWithAverage = calcAverage(array);

    return arrayWithAverage.sort((a, b) => b.average - a.average);
}

console.log(sortDesc(array));

// 5

const showSuperMaxMark = (array) => {
    let arrayWithAverage = calcAverage(array);

    let allAverage = 0;
    arrayWithAverage.forEach(item => allAverage += item.average);
    
    let generalAverage = allAverage / arrayWithAverage.length;
    
    let minMax = maxAndMinAverage(array);
    
    if (minMax.max.average > generalAverage) {
        console.log(minMax.max.name);
    }
}

showSuperMaxMark(array);