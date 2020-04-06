var button = document.getElementById('button'),
    input = document.querySelectorAll('input'),
    x = document.getElementById('x'),
    y = document.getElementById('y'),
    container = document.getElementById('container');
button.setAttribute('disabled', 'disabled');


input.forEach(function (item, i) {
    input[i].addEventListener('keyup', function () {
        if (event.key !== undefined) {
            button.removeAttribute('disabled');

            if((x.value.trim() === '') || (y.value.trim() === '')) {
                button.setAttribute('disabled', 'disabled');
            }
        }
    });
});

button.addEventListener('click', function() {
    var lastEl = container.lastElementChild;

    if (lastEl.classList.contains('table')) {
        lastEl.remove();
    }

    if (!(x.value > 0 && x.value < 11) || !(y.value > 0 && y.value < 11)) {
        alert('Введите число от 1 до 10');
    } else {
        var rows = x.value,
            columns = y.value,
            table = document.createElement('div');

        table.className = 'table';
        container.appendChild(table);

        for (var i = 0; i < columns; i++) {
            var newY = document.createElement('tr');
            table.appendChild(newY);

            for (var j = 0; j < rows; j++) {
                var newX = document.createElement('td');
                newY.appendChild(newX);

                if (i % 2 !== j % 2) {
                    newX.classList.add('black');
                }

                newY.appendChild(newX);
            }
        }
    }
});


