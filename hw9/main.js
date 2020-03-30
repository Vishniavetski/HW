// задание 1
var arr = ['Вася' , 'Петя' , 'Вова'];

function keyValye(arr) {
    return arr.map(function(el) {
        return {name : el};
    });
}

keyValye(arr);

// задание 2

var arr = ['00', '13', '24'];

function time(arr) {

    return arr.reduce(function (a, b) {

        return a + ' : ' + b;
    }, 'Текущее время');
}
time(arr);

// задание 3

var phrase = 'тут не очень много гласных';

function vowels(phrase) {
    var word = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'ю', 'я', 'э'],
        newPhrase = phrase.toLowerCase().split(''),
        rezault = 0;

    newPhrase.forEach(function (el) {
        word.forEach(function (item) {
            if (el === item) {
                rezault += 1;
            }
        });
    });

    return rezault;

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