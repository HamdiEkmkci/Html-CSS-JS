// ToDo Add Element

const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnAddNewTask = document.querySelector("#btnAddNewTask");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
let todos;


// load items
loadItems();



eventListeners();

function eventListeners() {
    // submit event
    form.addEventListener("submit", addNewItem);
    // delete an item
    taskList.addEventListener("click", deleteItem);
    // delete all
    btnDeleteAll.addEventListener("click", deleteAllItems);
}



// get items from Local Storage
function getItemsFromLS(){
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

//  set Item to Local Storage
function setItemToLS (newToDo){
    todos = getItemsFromLS();
    todos.push(newToDo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function loadItems() {
    todos = getItemsFromLS();
    todos.forEach(function(item){
        createItem(item);
    });
}


function createItem(newToDo) {
    const li = document.createElement("li");
    const a = document.createElement("a");

    li.className = "list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(newToDo));
    a.className = "delete-item float-right";
    a.setAttribute("href", "#");
    a.innerHTML = '<i class="fas fa-times"></i>';
    li.appendChild(a);

    taskList.appendChild(li);
}


function addNewItem(e) {
    if (input.value === '') {
        alert("add new item");
    }
    else
    {
    createItem(input.value);
    setItemToLS(input.value);
    }
    


    input.value = '';

    e.preventDefault();
}


function deleteItem(e) {

    if (e.target.className === "fas fa-times") {
        if (confirm("are you sure you want to delete this item")) {
            e.target.parentElement.parentElement.remove();
            deleteTodoFromStorageLS(e.target.parentElement.parentElement.textContent);
        }
    }
    e.preventDefault();
}



function deleteTodoFromStorageLS(deletetodo){
    getItemsFromLS();

    todos.forEach(function(todo,index){
        if(todo === deletetodo){
            todos.splice(index,1);
        }
    });

    localStorage.setItem("todos",JSON.stringify(todos));
}



function deleteAllItems(e) {

    if (confirm("are you sure you want to delete all ?")) {
        
        while(taskList.firstChild){
            taskList.removeChild(taskList.firstChild);
        }
        localStorage.clear();
    }
    e.preventDefault();
    // Alternative
    // taskList.innerHTML = "";
}