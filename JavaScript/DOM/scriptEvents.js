// ***************************************
//  --  Event Listener and Event Onject --


// const btn = document.querySelector("#btnDeleteAll");
// const btn2 = document.querySelector("#btnAddNewTask");

// btn.addEventListener("click",function(){
//     console.log("click");
// });


// btn.addEventListener("click",btnClick);
// btn2.addEventListener("click",btnClick);

// function btnClick(){
//     console.log("click");
// };

// btn.addEventListener("click",function(a){
//     let value

//     value = a;
//     value = a.target;
//     value = a.target.id;
//     value = a.target.className;
//     value = a.type;

//     a.preventDefault(); // varsayılanı engelleme.
//     console.log(value);
// })



////////////////////////////
//   -- Mouse Events --


// const btn = document.querySelector("#btnAddNewTask");
// const ul = document.querySelector("#task-list");

/////////////////
// Click Event

// btn.addEventListener("click",run);
// ul.addEventListener("click",run);

////////////////////////
// Double Click Event


// btn.addEventListener("dblclick",run);


////////////////////////
// Mouse Down Event

// Tıkladıktan sonra bırakana kadar gerçekleşiyor.
// btn.addEventListener("mousedown",run)

////////////////////////
// Double Click Event  

// tıkladıkdan sonra bırakıldığında çalışır.
// btn.addEventListener("mouseup",run)


////////////////////////
// Mouse Enter Event

// Üzerine geldiğinde çalışır.
//  ul.addEventListener("mouseenter",run);


////////////////////////
// Mouse Leave Event

// Üzerinden ayrılınca çalışır.
//  ul.addEventListener("mouseleave",run);


// -------------------------------------------

////////////////////////
// Mouse Over Event

// Üzerine geldiğinde çalışır
// ul.addEventListener("mouseover",run); 

////////////////////////
// Mouse out Event

// Üzerinden ayrılınca çalışır
// ul.addEventListener("mouseout",run);

// mouseover ve mouseout alt elemanlarda çalışır ayrıca üst elemanlarda da çalışır.
// mouse leave ve mouse enter sadece ana elemanlarda çalışır çıkınca çalışır

// ---------------------------------------------


////////////////////////
// Mouse move Event

// ul.addEventListener("mousemove",run);


// function run(event){
//     console.log(`event type: ${event.type}`);
// }



// ********************************
//   -- Keyboard Events --


// const text = document.getElementById("txtTaskName");


/////////////////
// Foucs Event

// inputa focus yani girildiğinde çalışır
// text.addEventListener("focus",run);

/////////////////
// Blur Event

// text.addEventListener("blur",run)


/////////////////
// Paste Event

// kullanıcı ctrl+v yaptığında
// text.addEventListener("paste",run);

/////////////////
// Copy Event

// text.addEventListener("copy",run);


/////////////////
// Cut Event

// text.addEventListener("cut",run);

/////////////////
// Select Event

// seçim gerçekleştirirken mouse bırakıldığı anda devreye girer.
// text.addEventListener("select",run);


/////////////////
// KeyDown Event

// text.addEventListener("keydown",run);


/////////////////
// KeyUp Event

// text.addEventListener("keyup",run);

// bir tuşa basıldığında down bırakıldığında up çalışır.



// function run(e){
//     console.log(e.type);
//     console.log(e.target.value);
// }



// *****************************
// Event Bubbling -- olay kabarcıklanması denizdeki gibi büyüyerek birleşiyor.


// const form = document.querySelector("form");
// const cardBody= document.querySelector(".card-body");
// const card = document.querySelector(".card");
// const container = document.querySelector(".container");

// form.addEventListener("click",function(e){
//     console.log("form");
//     e.stopPropagation(); // kabarcıklanmayı engeller
// });

// cardBody.addEventListener("click",function(){
//     console.log("card body");
//     e.stopPropagation(); // kabarcıklanmayı engeller
// });

// card.addEventListener("click",function(){
//     console.log("card");
//     e.stopPropagation(); // kabarcıklanmayı engeller
// });

// container.addEventListener("click",function(){
//     console.log("container");
//     e.stopPropagation(); // kabarcıklanmayı engeller
// });


// En içtekine tıklıyoruz ama hepsi çalışıyor.




/////////////////////////////////
//  --  Event Capturing -- 

// !! Bubblingin tersi
//  e.stopPropagation(); burda uygun değil bubblingde kullanılır

// form.addEventListener("click",function(e){
//     console.log("form");
// },true);

// cardBody.addEventListener("click",function(){
//     console.log("card body");
// },true);

// card.addEventListener("click",function(){
//     console.log("card");
// },true);

// container.addEventListener("click",function(){
//     console.log("container");
// },true);


// const deleteItems = document.querySelectorAll(".fa-times");

// deleteItems.forEach(function(item){
//     item.addEventListener("click",function(e){
//         console.log(e.target);
//     })
// });


// const ul = document.querySelector("ul");

// ul.addEventListener("click",function(e){
//     if(e.target.className == "fas fa-times"){
//         e.target.parentElement.parentElement.remove();
//         //parent = <i> -> parent = <li>
//     }
// });