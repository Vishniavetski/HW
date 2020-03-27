// задание 1
var arr = ['Вася' , 'Петя' , 'Вова'];

function keyValye(arr) {
    return arr.map(function(el) {
        var newObj = {};
        newObj.name = el;
        return newObj;
    });

}

keyValye(arr);

// задание 2

var arr = ['00', '13', '24'];

function time(arr) {

    return arr.reduce(function (a, b, i) {

        return (i === 0) ? "Текущае время: " + b : a + ' : ' + b;
    }, '0');
}
time(arr);


