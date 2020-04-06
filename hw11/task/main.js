var container = document.getElementById('container');
var button = document.getElementsByTagName('button')[0];

var firstPar = document.createElement('p');
var secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 1</a> and <a href="http://google.by">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="http://google.by">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

var firstTask = firstPar.querySelectorAll('a');
var secondTask = secondPar.querySelectorAll('a');

button.onclick = function() {
    for (var i = 0; i < firstTask.length; i++) {
        firstTask[i].classList.toggle('color');
    }
}

localStorage.clear();


secondPar.addEventListener('click', function() {
    event.preventDefault();
    var target = event.target;

    if (target.tagName !== 'A') return;

    if (localStorage.getItem(target.textContent) === null) {
        var obj = {};
        obj.path = target.getAttribute('href');
        localStorage.setItem(target.textContent, JSON.stringify(obj));
        alert('Ссылка сохранена');
    } else {
        alert(JSON.parse(localStorage.getItem(target.textContent)).path);
    }
});

