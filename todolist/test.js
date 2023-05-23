document.getElementById('button1').addEventListener('click', function () {
    var input = document.getElementById('Input');
    var newTask = input.value;

    if (newTask !== '') {
        var table = document.getElementById('table-list');
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        cell1.appendChild(checkbox);

        cell2.innerHTML = newTask;

        input.value = '';
    } else {
        alert("작업을 입력해주세요.");
    }
});
