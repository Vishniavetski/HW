var table = document.getElementById('table');
var addRow = document.getElementById('add-row');

addRow.addEventListener('click', getAddRow);

function getAddRow() {
    var row = document.getElementsByTagName('tr')[0];
    var newRow = document.createElement('tr');
    newRow.innerHTML = '<td></td><td></td><td></td>';
    table.insertBefore(newRow, row);
}

