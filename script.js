var selectedRow = null;

function onFormSubmit() {
    var formData = readFormData();
    if (selectedRow == null)
        insertNewRecord(formData);
    else
        updateRecord(formData);
    resetForm();
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["whatsappNumber"] = document.getElementById("whatsappNumber").value;
    formData["address"] = document.getElementById("address").value;
    formData["interests"] = document.getElementById("interests").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("whatsappList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.whatsappNumber;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.address;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.interests;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`; //"" '' 
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("whatsappNumber").value = "";
    document.getElementById("address").value = "";
    document.getElementById("interests").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("whatsappNumber").value = selectedRow.cells[1].innerHTML;
    document.getElementById("address").value = selectedRow.cells[2].innerHTML;
    document.getElementById("interests").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.whatsappNumber;
    selectedRow.cells[2].innerHTML = formData.address;
    selectedRow.cells[3].innerHTML = formData.interests;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("whatsappList").deleteRow(row.rowIndex);
        resetForm();
    }
}