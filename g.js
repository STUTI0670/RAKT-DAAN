let btn = document.getElementById("btn");
let list = document.getElementById("list");
let filter = document.getElementById("filter");

//
filter.addEventListener("input", function (e) {
    let searchItem = e.target.value.toLowerCase();
    let listItems = document.querySelectorAll(".list-group-item");
    
    listItems.forEach(function (item) {
        let text = item.textContent.toLowerCase();
        if (text.includes(searchItem)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});
btn.addEventListener("click", function () {
    let name = document.getElementById("taskbox").value.trim();
    if (name === "") return; // Prevent adding empty items
    
    let liElement = document.createElement("li");
    liElement.className = "list-group-item";
    liElement.innerText = name;
    
    let anchorElement = document.createElement("a");
    anchorElement.innerText = "X";
    anchorElement.className = "btn btn-danger float-right";
    liElement.appendChild(anchorElement);
    
    list.appendChild(liElement);
    document.getElementById("taskbox").value = ""; // Clear the input box

    // Event listener for removing items from the list
    anchorElement.addEventListener("click", function () {
        list.removeChild(liElement);
    });
});
