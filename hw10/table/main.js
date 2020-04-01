var table = document.getElementById('table');
var addRow = document.getElementById('add-row');

addRow.addEventListener('click', getAddRow);

function getAddRow() {
    var row = document.getElementsByTagName('tr')[0];
    var newRow = document.createElement('tr');

    newRow.innerHTML = '<tr> <td class="td-input"></td> <td class="td-input"></td> <td class="td-input"></td> </tr>';
    table.insertBefore(newRow, row);
}

table.addEventListener('click', function addInput() {
    var target = event.target;

    if (target.className != 'td-input') return;

    var input = document.createElement('input');

    input.value = target.innerHTML;
    target.innerHTML = '';
    target.appendChild(input);
    input.focus();

    var self = this;

    input.addEventListener('blur', function() {
        target.innerHTML = this.value;
        table.addEventListener('click', addInput);
    });

    table.removeEventListener('click', addInput);
});


