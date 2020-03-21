/// задание 1способ1

var arr = [-1, 0, 2, 34, -2],
    filterNumbersArr = arr.filter(function(a) {
    return a [0] > 0;
});

console.log(filterNumbersArr);

/// задание 1.2

var arr = [-1, 0, 2, 34, -2];

function filterNumbersArr(v,i,a){
        return v > 0;
    };

console.log(arr.filter(filterNumbersArr));


/// задание 2

var arr = [-1, 0, 2, 34, -2];

arr.find(function firstPositivenNamber ( number) {
        return number > 0;
    }
);


var arr = [-1, 0, 2, 34, -2];

function firstPositivenNamber ( number) {
        return number > 0;
    };
console.log(arr.find(firstPositivenNamber));

// задание 3

function isPalindrome(word) {
    var word = word.toLowerCase();
    var wordRevers = word.split('').reverse().join('');

    if (wordRevers == word) {
        return true;
    } else {
        return false
    }
}
console.log (isPalindrome ('Шалаш'));