let addBtn = document.getElementById("addBtn");
let list = document.getElementById("list");
let filter = document.getElementById("filter");
function initializeData() {
    let initialItems = [
        { name: "Dr. Vanshree", location: "Blood Bank Indian Red Cross Society, 1, Red Cross Road, New Delhi 110 001", need: "New Delhi" },
        { name: "Dr. Meenakshi Sidhar", location: "Blood Bank Dr. BSA Hospital, Sector-6, Rohini, Delhi-85", need: "Rohini" },
        { name: "Dr. N. Parkash", location: "Rajiv Gandhi Cancer Institute, Sector-5, Rohini, ND-85", need: "Rohini" }
    ];
    localStorage.setItem("items", JSON.stringify(initialItems));
}
// Load items from local storage and display them on the page
function loadItems() {
    let items = JSON.parse(localStorage.getItem("items")) || [];
    items.forEach(item => {
        addItemToList(item.name, item.location, item.need);
    });
}initializeData();

// Save items to local storage
function saveItems(items) {
    localStorage.setItem("items", JSON.stringify(items));
}

// Function to add an item to the storage
function addItemToStorage(name, location, need) {
    let items = JSON.parse(localStorage.getItem("items")) || [];
    items.push({ name, location, need });
    saveItems(items);
}

// Function to add an item to the displayed list
function addItemToList(name, location, need) {
    let liElement = document.createElement("li");
    liElement.className = "list-group-item";
    liElement.innerText = `${name}, ${location}, ${need}`;

    let anchorElement = document.createElement("a");
    anchorElement.innerText = "Remove";
    anchorElement.className = "btn btn-danger float-right";
    liElement.appendChild(anchorElement);

    list.appendChild(liElement);

    // Event listener for removing items from the list and local storage
    anchorElement.addEventListener("click", function () {
        list.removeChild(liElement);
        removeItemFromStorage(name, location, need);
    });
}

// Function to remove an item from local storage
function removeItemFromStorage(name, location, need) {
    let items = JSON.parse(localStorage.getItem("items")) || [];
    items = items.filter(item => item.name !== name || item.location !== location || item.need !== need);
    saveItems(items);
}

// Event listener for adding new items to the storage and displaying them
addBtn.addEventListener("click", function () {
    let name = document.getElementById("nameInput").value;
    let location = document.getElementById("locationInput").value;
    let need = document.getElementById("needInput").value;

    if (name.trim() === "" || location.trim() === "" || need.trim() === "") return; // Prevent adding empty items

    addItemToStorage(name, location, need);
    addItemToList(name, location, need);

    // Clear input fields after adding
    document.getElementById("nameInput").value = "";
    document.getElementById("locationInput").value = "";
    document.getElementById("needInput").value = "";

    alert("Information saved and displayed successfully!");
});

// Load items on page load and display them
loadItems();


// Call this function once during the initial setup

