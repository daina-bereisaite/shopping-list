// Enumeration for keyboard buttons
const Keyboard = {
    ENTER: 13
}

// This gets fired when window loads
window.onload = function () {
    // Set event listeners
    setEventListeners();

    // Load items
    loadItemsIntoUI();
}

// Method to set event listeners
function setEventListeners() {
    // Get UI elements that we need to set event listeners to
    var addButton = document.getElementById("addButton");
    var inputField = document.getElementById("itemInput");

    // Start setting event listeners

    // Event listener for button for mouse click
    addButton.addEventListener("click", function(event) {
        buttonClick();
    });

    // Event listener for input field for Enter key
    inputField.addEventListener("keydown", function(event) {
        enterPressed();
    });
}

// This function loads saved items into UI
function loadItemsIntoUI() {
    // Get all items
    var items = getAllItems();

    // Loop through all items
    for (i = 0; i < items.length; i++) {
        // Create new UI element for each of the items
        newElement(items[i]);
    }
}

// Event listener functions

// Event listener for button click
function buttonClick() {
    var inputField = document.getElementById("itemInput");

    var input = inputField.value;
    if (input === '') {
        alert("Write something");
        return;
    }

    inputField.value = "";
    inputField.focus();
    newElement(input);
    addItem(input);
}

// Event listener for enter press
function enterPressed() {
    if(event.keyCode == Keyboard.ENTER) {
        document.getElementById("addButton").click();            
        return; 
    }
}

// Method for creating UI shopping list elements
function newElement(input) {
    var list = document.getElementById("listItems");

    // Create span for delet (dis) button
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    span.onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
        var value = div.childNodes[0].nodeValue;
        deleteItem(value);
    }   

    var textNode = document.createTextNode(input);

    var entry = document.createElement("li");

    entry.appendChild(textNode);
    entry.appendChild(span);

    list.appendChild(entry);
}

function addItem(value) {
    var json = localStorage.getItem('items')
    var items = JSON.parse(json);
    if (items == null) {
        items = [];
    }

    items.push(value);

    var json = JSON.stringify(items);
    localStorage.setItem('items', json);
}

function deleteItem(value) {
    var items = JSON.parse(localStorage.getItem('items'));
    var newItems = removeItemOnce(items, value);
    localStorage.setItem('items', JSON.stringify(newItems));
}

function getAllItems() {
    return JSON.parse(localStorage.getItem('items'));
}

function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}

function removeItemAll(arr, value) {
    var i = 0;
    while (i < arr.length) {
        if (arr[i] === value) {
            arr.splice(i, 1);
        } else {
            ++i;
        }
    }
    return arr;
}