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

// задание 4

function areAnagrams(str1, str2) {

    var firstStr = str1.toLowerCase().split('').sort().join('');
    var secondStr = str2.toLowerCase().split('').sort().join('');
    if (firstStr == secondStr) {
        return true;
    } else {
        return false;
    }
}

areAnagrams('кот', 'отк');
areAnagrams('кот', 'атк');
areAnagrams('кот', 'отко');

// задание 5

function divideArr(array, size) {
    var newArr = [];

    for (var i = 0; i < array.length; i += size) {
        newArr.push(array.slice(i, i + size));
    }

    return newArr;
}

divideArr([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]
divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3); // [[1, 2, 3], [4, 5, 6], [7, 8]]