
window.onload=function(){
    document.getElementById("addButton").addEventListener("click", newElement, false);
}

function newElement() {
    var list = document.getElementById('listItems');
    var itemInput = document.getElementById('itemInput').value;
    var entry = document.createElement("LI");
    entry.appendChild(document.createTextNode(itemInput));
    list.appendChild(entry);
}

