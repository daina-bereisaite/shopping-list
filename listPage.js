
window.onload = function () {
    document.getElementById("addButton").addEventListener("click", newElement, false);
}

function newElement() {
    var itemInput = document.getElementById('itemInput').value;
    if (itemInput === '') {
        alert("Write something");
        return;
    }

    var list = document.getElementById('listItems');

    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    span.onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }

    var textNode = document.createTextNode(itemInput);

    var entry = document.createElement("li");

    entry.appendChild(textNode);
    entry.appendChild(span);

    list.appendChild(entry);
}