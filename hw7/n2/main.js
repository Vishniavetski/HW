var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello');
    }
};

function deepClone(obj) {
    var newObject = {};

    if (Array.isArray(obj)) {
        newObject = [];
    }

    for (var k in obj) {
        if (typeof obj[k] === 'object' && obj[k] !== null) {
            newObject[k] = deepClone(obj[k])
        } else {
            newObject[k] = obj[k];
        }
    }

    return newObject;
}

var clonedObj = deepClone(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);