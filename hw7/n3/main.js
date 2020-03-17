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
    method: function() {
        alert('Hello');
    }
};

var initialObj2 = {
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
    method: function() {
        alert('Hello');
    }
};

function compare(obj1, obj2) {

    if (typeof (obj1) !== 'object') {
        if (obj1 != obj2) return false;
    }

    if (obj1 !== null && obj2 !== null && Object.keys(obj1).length != Object.keys(obj2).length) {
        return false;
    }

    for (var k in obj1) {
        if (typeof (obj1[k]) == 'object') {
            if (!compare(obj1[k], obj2[k])) return false;
        } else if (typeof (obj1[k]) == 'function') {
            if (obj1[k].toString() != obj2[k].toString()) return false;
        } else {
            if (obj1[k] != obj2[k]) return false;
        }
    }

    return true;
}

console.log(compare(initialObj, initialObj2))
