// let veri;


// // veri = window.document;
// veri = window.document.head;
// veri = window.document.body;
// veri = window.document.URL;
// veri = window.document.domain;
// veri = window.document.images;
// veri = window.document.forms;
// veri = window.document.forms[0].id;
// veri = window.document.forms[0].method;
// veri = window.document.forms[0].action;
// veri = window.document.scripts;
// veri = window.document.scripts[2];


// console.log(veri);



// *****************************//
// Elementlerin Seçilmesi 

//   -- Tek element Seçimi --

//////////////
// document.getElementById() metodu


// let veri;

// veri = document.getElementById("header");
// veri = document.getElementById("header").id;

// veri = document.getElementById("header");

// // veri = veri.id;
// // veri = veri.className;


// veri.style.color = "blue";
// veri.style.fontSize = "40px";
// veri.style.fontWeight = "bold";
// //veri.style.display = "none";

// document.getElementById("header").innerText = "Do these";
// document.getElementById("header").innerText = "<b>ToDo List</b>";
// document.getElementById("header").innerHTML = "<b> ToDo List </b>";



// console.log(veri);

///////////////////////////////////
// document.querySelector() Method


// console.log(document.querySelector("#header"));
// console.log(document.querySelector(".card-header"));
// console.log(document.querySelector("div"));


// document.querySelector("li").style.color = "blue";
// document.querySelector("li:last-child").style.color = "red";
// document.querySelector("li:nth-child(2)").style.color = "green";


// document.querySelector("li").className = "list-group-item list-group-item-primary";
// document.querySelector("li:nth-child(3)").classList.add("active");





// ******************************
// --   Multiple Choising -- ///


/////////////////////////////////
// document.getElementsByClassName()


// veri = document.getElementsByClassName("list-group-item");


// veri = document.getElementsByClassName("list-group-item")[1];

//veri = veri[2];

// veri[1].style.fontSize = "30px";
// veri[2].textContent = "new item";


// for(let i = 0;i<veri.length;i++){
//     veri[i].style.color = "orange"
//     veri[i].style.textContent = "new item"
// }

/////////////////////////////////
// document.getElementsByTagName()


// veri = document.getElementsByTagName("li");
// veri = document.getElementsByTagName("a");

//veri = document.getElementById("task-list").getElementsByTagName("a");

//////////////////////////////////
// document.querySelectorAll()

// veri = document.querySelectorAll("li");

// veri.forEach(function(item, index){
//     item.textContent = `${index} - item`;
// });
// console.log(veri);

//*****************************
//  Navigate on Elements


//  let value;

//  const todoList = document.querySelector(".list-group");
//  const todo = document.querySelector(".list-group-item:nth-child(2)");
//  const card = document.querySelector(".card");


// value = todoList ;
//  value = todo;
// value = card;

// /////////////////////////
// // Child Nodes

// value = todoList.childNodes; //tüm elementleri alıyor </...> kapatmalar dahil.

// value = todoList.children;
// value = todoList.children[0];
// value = todoList.children[todoList.children.length - 1];
// value = todoList.children[1].textContent = "Modified";

// value = card;
// value = card.children;
// value = card.children[1].children[0].textContent = "Hello";

// value = todoList;
// //value = todoList.children[0];
// value = todoList.firstElementChild;
// value = todoList.lastElementChild;

// value = todoList.children.length;
// value = todoList.childElementCount;

// value = card;
// value = card.parentElement;
// value = card.parentElement.parentElement;

// value = todo;
//  value = todo.previousElementSibling;
//  value = todo.nextElementSibling;

//   value = todo.nextElementSibling;
//   value = todo.previousElementSibling;

// value = todo.previousElementSibling.previousElementSibling; // this is not posible because result will be null 



//  console.log(value);





// *************************
//    --  Create Element --


// const li = document.createElement("li");


//////////////////////
// ADD CLASS

// li.className = "list-group-item list-group-item-secondary";



///////////////////////
//   ATTRIBUTE

// li.setAttribute("title","new item");
// li.setAttribute("data-id","5");

// const text = document.createTextNode("Todo 5");

// li.appendChild(text);

// const a = document.createElement("a");
// a.setAttribute("href","#");  // (key , value)
// a.className = "delete-item float-right";
// a.innerHTML = '<i class="fas fa-times"></i>';

// li.appendChild (a);

// document.querySelector("#task-list").appendChild(li);




// console.log(li);





// *************************
//   --  Delete Element ---


// const taskList = document.querySelector("#task-list");

// taskList.remove(); //delete all nodes.

// taskList.childNodes[7].remove();

// taskList.children[3].remove();
// taskList.removeChild(taskList.children[3]);

/////////////////////
// Delete Attribute

//taskList.children[0].removeAttribute("class");

// for(let i=0;i<taskList.children.length;i++){
//     taskList.children[i].removeAttribute("class");
// }


// console.log(taskList);




// *************************
//  -- Update Element --


// const cardHeader = document.querySelector(".card-header");

// const h2 = document.createElement("h2");

// h2.setAttribute("class","card-header");
// h2.appendChild(document.createTextNode("New lists"));

// const parent = document.querySelector(".card");

// parent.replaceChild(h2,cardHeader);



/////////
// Updating on class

// const taskList = document.querySelector("#task-list");

// let value = taskList;

// link = taskList.children[0].children[0];

// // value = link.className;
// // value = link.classList;
// // value = link.classList[0];
// // value = link.classList[1];


// // link.classList.add("new");  // adding class
// // link.classList.remove("new");


// // ////////////////////////
// // //   Update Attribute

// value = link.getAttribute("href");
// value = link.setAttribute("href","https://www.google.com");


// value = link.hasAttribute("href");



// console.log(value);