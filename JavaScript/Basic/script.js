/*
let zaman = new Date();
let birthday = new Date(1998,1,13);

console.log(zaman.getMinutes());
console.log(zaman.getDate());
console.log(zaman.getMonth()+1);
console.log(zaman.getFullYear());
console.log(zaman);

zaman.setFullYear(2024);
console.log(zaman.getFullYear());

zaman.setFullYear(2023);
console.log(zaman.getFullYear()- birthday.getFullYear());
*/

//NUMBERS
//---------------

// let veri;

// veri = parseInt("5c"); // sadece 5i alır number der.
// veri = parseInt("c5"); //undefined

// veri = isNaN("c5");

//var sayi = 15.456453435;
//veri = sayi.toPrecision(3);soldan 3 basamağı atama.
//veri = sayi.toFixed(4);  virgülden sonraki (4 rakamı atama


// veri = Math.PI;
// veri = Math.round(3.5);

// console.log(veri);
// console.log(typeof veri);


// const firstName = "Hamdi";
// const lastName = "Ekmekçi";
// const age = "25";

// let veri;

//concetenations 
//-----------------

// veri = firstName + " " + lastName;
// veri = "Hamdi";
// veri += " Ekmekçi"

// veri = 'Benim adım ' + firstName + ' ' + lastName + ' yaşım ' + age + ' ve Istanbul\'da yaşıyorum.'

//veri.slice(1,5); aralıktaki karakterleri alır.
//veri.substring(1,5); yukardakiyle aynı işlevi görür.

//veri.indexOf("x"); 
//içerisinde varmı yokmu diye kontrol. yoksa 
//** -1 döner**


//veri.replace(veri.firstName,'Ilyas');
//veri.length  karakter sayısını tespit etme.

// ARRAYS
//-----------


// let names =["arda","kerem","aslı","mert"];
// let years = [1990,1998,2000,2005];
// let mix = ["arda","yılmaz",1990,null,undefined];


// // get array item
//-----------

// console.log(names[2]);


//set array
//-----------

// names[0] = "hamdi";
// names[names.length] = "recep"
// console.log(names);


// // add items
//-----------

// //add last
// names.push("elmas");
// console.log(names);

// //add first
//-----------

// names.unshift("eda"); 
// console.log(names);


// //remove item
//-----------------------

// //add last
//-----------

// years.pop();
// console.log(years);


// //add first
//-----------

// // years.shift();
// // console.log(years);


// //indexOf
//-----------

// let index_names = names.indexOf("recep");
// console.log("index : "+ index_names);


// //reverse
//-----------

// names.reverse();
// console.log(names);

// //sorting
//-----------

// names.sort();
// console.log(names);

// years.sort();
// console.log(years);


// //concat
//-----------
// let veri = names.concat(years);
// console.log(veri);


// names.splice(2,0,"mehmet"); //2.indexten başla , silme yapma , ahmeti ekle
// console.log(names);

// names.splice(1,8,"çetin"); //1.indexten başla(dahil) , 8e kadar sil  , ahmeti ekle
// console.log(names);


// (if - else)
//--------------
// const firstName = "Çağla";
// const userName = "caglayilmaz";
// const age = 20;
// const isStudent = true;
// const school = "universty";

// if(userName == "caglayilmaz"){
//     console.log("Welcome Çağla");
// }else{
//     console.log("not founded any user");
// }


// //there is an id description or not
// let id = "2323212"
// if(typeof id != "undifened"){ 
//     console.log("id: "+id);
// }else{
//     console.log("no id");
// }


// //Switch - Case

// let islem = 6;

// switch (islem) {
//     case 1:
//         console.log("Process 1 has been done");
//         break;
//     case 2:
//         console.log("Process 2 has been done");
//         break;
//     case 3:
//         console.log("Process 3 has been done");
//         break;
//     default:
//         console.log("Any process has not been done");    
// }

// let day;

// switch (new Date().getDay()) {
//     case 0:
//         day = "Pazar";
//         break;
//     case 1:
//         day = "Pazartesi";
//         break;
//     case 2:
//         day = "Salı";
//         break;
//     case 3:
//         day = "Çarşambr";
//         break;
//     case 4:
//         day = "Perşembe";
//         break;
//     case 5:
//         day = "Cuma";
//         break;
//     case 6:
//         day = "Cumartesi";
//         break;
// }

// console.log(day);


// Object Literals = Struct
//-------------------------------

// let data;
// let user = {
//     userName : "hamdiekmekci",
//     firstName : "Hamdi",
//     lastName : "Ekmekçi",
//     age : 37,
//     hobbies : ["sport","coding"],
//     address : {
//         city : "Istanbul",
//         country : "Turkey",
//         phone : "05555555555"
//     } 
// }

// data = user;
// data = user.firstName;

// console.log(data);
// console.log(typeof user);


// Loops


// while Loop
//-------------------------------
// let i = 0;

// while(i<10){
//     console.log(i);
//     i++;
// }

// do while loop
//-------------------------------
// codes

// for loop
//-------------------------------

// codes

// let toplam = 0;

// for(let i=1; i<=10;i++){
//     toplam += i;
// }

// console.log(toplam);



// Usage of loops at Arrays and Object
//---------------------------------------

// let citys=["Istanbul","Ankara","Izmir","Eskisehir"];
// let users = [
//     {firstName:"Aslı", lastName: "Yilmaz"},
//     {firstName:"Ahmet", lastName: "Seker"},
//     {firstName:"Mehmet", lastName: "Güven"},
// ]


// for(let i=0; i<citys.length;i++){
//     console.log(citys[i]);
// }



// for-in method
//---------------
// for(let i in citys){
//     console.log(`index: ${i} - value : ${citys[i]}`);
// }


// // forEach
// //---------

// citys.forEach(function(item){
//     console.log(item);
// });



//------------------------
// for(let i=0; i<users.length;i++){
//     console.log(users[i].firstName+" "+users[i].lastName);
// }
//------------------------
//  for(let i in users){
//     console.log(`index : ${i} - value: ${users[i].firstName+" "+users[i].lastName}`);
//  }
//-------------------------
// users.forEach(function(item){
//     console.log(item);
// });



// map : returns objects from an array
//-----------------------

// let veri = users.map(function(item){
//     return item.firstName + " " + item.lastName;
// });
// console.log(veri);


// // OWN STUDY
// let footballers =[
//     {firstName: "Mert Hakan", lastName: "Yilmaz", age: 30}
// ] 



// function addFootballer(footballersArray, firstName, lastName, age) {
//     let newFootballer = {
//       firstName: firstName,
//       lastName: lastName,
//       age: age
//     };
//     footballersArray.push(newFootballer);
//   }

// addFootballer(footballers,"Hamdi","Ekmekçi",25);
// console.log(footballers);


////////////////////
// // map example
// let numbers = [1,2,3,4,5,6];

//  let num = numbers.map(function(n){
//      return n*n;
//  });

// console.log(num);



//************ */ FUNCTIONS *************

// function factoriel(x){
//     for(let i=x-1;i>0;i--){
//         x *= i;
//     }
//     console.log(x);
// }

// factoriel(4);


///////////////////////////////////
//         Window Object         //
///////////////////////////////////


//  veri = window
//  console.log(veri); //global olarak windowun içerisine eklendi.


////////////////
// // alert

// alert("Welcome");



///////////////////////
// // prompt

// var veri2 = prompt("Enter your name:");



////////////////////
// // confirm

// veri3 = confirm("Are you sure you want to exit");
// console.log(veri3);


////////////////////
// location : tarayıcının özelliklerini veriyor

// veri = window.location;
// veri = window.location.href;
// veri = window.location.hostname;
// veri = window.location.protocol;

//console.log(veri);

// window.location.href = "http://www.google.com";
// window.location.reload(); // always refresh to site

//window.navigator : kullanılan tarayıcının özellikleri
//window.document : sitenin içerisindeki html yapısına erişme.


//*******************************************
// Scope : Oluşturulan bir değişkenin var olma durumu


////////////////////
// Global Scope

// var veri1 = 5;
// let veri2 = 10;
// const veri3 = 15;

// function fun(){
//     var veri1 = 30;
//     let veri2 = 40;
//     const veri3 = 50;

//     console.log(veri1,veri2,veri3);
// }

// fun();

// console.log(veri1,veri2,veri3); //global değişkenlerin değeri tekrar ilk haline döner.





////////////////////
// Function Scope


// functiona(){

//     // Function Scope

// }


// ////////////////////
// // Block Scope

// if(true){
//      // Block Scope  
//      var a = 10; 
//      !!! You can use this variable everywhere.
// }



// Example

// var admin_pw = "1654235"; // should be let or const.
// // it's more usefull.   like the following
// let admin_pw = "1654235";

// if(true){
//     let admin_pw = "321452";
// }

// console.log(admin_pw);



