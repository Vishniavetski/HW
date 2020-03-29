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

// задание 3

var phrase = 'тут много гласных';
function vowels(phrase) {
    var word = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'ю', 'я', 'э'];
    var newPhrase = phrase.toLowerCase().split('')
    return  newPhrase.reduce(function (a, b) {
       return (word.includes(b)) ? a + 1 : a
    }, 0)

}
vowels(phrase);

// задание 4

countSentencesLetters(str);

var str = 'Привет, студент! Студент... Как дела, студент?';

function countSentencesLetters(str) {
    var arr = str.split(/[.!?]/);
    var rezult = '';

    for (var i = 0; i < arr.length; i++) {
        if(arr[i].length > 1 ) {

            rezult += arr[i].trim() + ': Letters quantiti is: ' + arr[i].trim().split(/[,' ']/).join('').length + '\n';
        }
    };

    return rezult;
}

countSentencesLetters(str);