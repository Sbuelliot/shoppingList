// Create an array and initialise it with at least four grocery items
let groceries = ["Milk", "Sugar", "Bread", "Snacks"];
// Create a function which will display each item in the array as list elements in the <ul> tag
function displayList() {
    // Get the <ul> element by its ID
    let list = document.getElementById("grocery-list");
    // Loop through the array and create a new <li> element for each item
    for (let i = 0; i < groceries.length; i++) {
        let item = document.createElement("li");
        // Set the text content of the <li> element to the item name
        item.textContent = groceries[i];
        // Create a checkbox and add an event listener to toggle the checked class on click
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("click", () => {
            item.classList.toggle("checked");
        });
        // Append the checkbox and the <li> element to the <ul> element
        item.appendChild(checkbox);
        list.appendChild(item);
        // Call the function to add a close button to each list item
        addCloseButton();
    }
}
// Call the displayList function when the page loads
displayList();
// Create a function which will add a close button to each list item
// Create a function which will add a close button to each list item
function addCloseButton() {
    // Get the <ul> element by its ID
    let list = document.getElementById("grocery-list");
    // Get the last list item in the <ul> element
    let listItem = list.lastChild;
    // Create a span element with a class named close and a value of 'x' in unicode
    let close = document.createElement("span");
    close.className = "close";
    close.textContent = "\u00D7";
    // Append the span element to the list item
    listItem.appendChild(close);
    // Add a click event listener to the span element
    close.onclick = function () {
      // Get the parent element of the span element
      let li = this.parentElement;
      // Set the display style of the parent element to none
      li.style.display = "none";
    };
    // Set the cursor style of the span element to pointer
    close.style.cursor = "pointer";
  }
  
// Create a function which will add a new item to the array and display it as a list element in the <ul> tag
function addItem() {
    // Get the input element by its ID
    const itemInput = document.getElementById("item");
    // Get the value of the input element
    const newItem = itemInput.value;
    // If the input text field is empty, display an alert to the user indicating that they should insert an item
    if (newItem === "") {
        alert("Please enter an item");
    } else {
        // Else, add the input text to the array
        groceries.push(newItem);
        // Clear the input element
        itemInput.value = "";
        // Get the <ul> element by its ID
        const groceryListElement = document.getElementById("grocery-list");
        // Create a new <li> element for the new item
        const listItem = document.createElement("li");
        // Set the text content of the <li> element to the new item name
        listItem.textContent = newItem;
        // Create a checkbox and add an event listener to toggle the checked class on click
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("click", () => {
            listItem.classList.toggle("checked");
        });
        // Append the checkbox and the <li> element to the <ul> element
        listItem.appendChild(checkbox);
        groceryListElement.appendChild(listItem);
        // Call the function to add a close button to the new list item
        addCloseButton();
    }
}
// Get the input element by its ID
const input = document.getElementById("item");
// Get the add button element by its ID
const addButton = document.getElementById("addButton");
// Add an event listener to the input element to trigger the addItem function when the enter key is pressed
document.getElementById("item").addEventListener("keyup", (event) => {
    // If the event key is equal to 'Enter', trigger a click() function on the element with an addButton ID
    if (event.key === "Enter") {
      document.getElementById("addButton").click();
    }
});
  
// Add an event listener to the add button element to trigger the addItem function when it is clicked
addButton.addEventListener("click", addItem);
// Create a function to delete items from both the array and the Shopping List display
function deleteItem() {
    // Get all the span elements with a close class
let closeButtons = document.querySelectorAll(".close");
// Loop through them and add a click event listener to each one
for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", () => {
        // Get the parent element of the span element, which is the list item
        let listItem = closeButtons[i].parentElement;
        // Call the deleteItem function and pass the list item as an argument
        deleteItem(listItem);
    });
}
}
// Get the HTML elements by the ID
const dateTimeElement = document.getElementById("date-time");
// Define a function to display the current date and time
function displayDateTime() {
    // Create a new Date object
    const currentDate = new Date();
    // Get the date and time components
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-based
    const day = currentDate.getDate();
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
    // Format the date and time as YYYY-MM-DD HH:MM:SS
    const dateTime = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    // Set the text content of the date-time element
    dateTimeElement.textContent = dateTime;
}
// Call the displayDateTime function when the page loads
displayDateTime();
// Call the displayDateTime function every second using setInterval
setInterval(displayDateTime, 1000);