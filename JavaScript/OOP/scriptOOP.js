
// let kaan = {
//     name:"kaan",
//     yearOfBirth:2008,
//     job:"student"
// }

// val = kaan;


// function Student(name,yearOfBirth,job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     this.calculateAge = function(){
//         return 2021 - this.yearOfBirth;
//     };
// }

// let kaan = new Student;
// kaan.name = "kaan";
// kaan.yearOfBirth = 2008;
// kaan.job = "student";

// console.log(kaan);


//////////////////////////
// Prototype => like Interface


// let Person = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// let aylin = new Person("aylin", 1980, "teacher");
// let kaan = new Person("kaan",2008,student);

// Person.prototype.calculateAge = function () {
//     return 2021 - this.yearOfBirth;
// }

// Person.prototype.getName = function(){
//     return this.name;
// }



////////////////////////
// -- Object.create --


// let personProto = {
//     calculateAge : function(){
//         return 2021  - this.yearOfBirth;
//     }
// }

// let kaan = Object.create(personProto);

// kaan.name = "kaan";
// kaan.yearOfBirth = 2008;
// kaan.job = "student";

// let aylin = Object.create(personProto,{
//     name:{value:"aylin"},
//     yearOfBirth:{value:1980},
//     job:{value:"teacher"},
// });

// console.log(kaan);

// console.log(aylin);
// console.log(aylin.calculateAge());






////////////////////////////////////////
// -- Inheritance based on Prototype --


// let Person = function(name,yaerOfBirth,job){
//     this.name = name;
//     this.yaerOfBirth = yaerOfBirth;
//     this.job = job;
// }

// Person.prototype.calculateAge = function(){
//     return 2021 - this.yaerOfBirth;
// }

// let Teacher = function(name,yaerOfBirth,job,subject){

//     Person.call(this,name,yaerOfBirth,job)
//     this.subject = subject;

// }


// // Inheritance from Person prototype methods
// Teacher.prototype = Object.create(Person.prototype);


// // set Teacher constructor
// Teacher.prototype.constructor = Teacher;


// let aylin = new Teacher("aylin","1980","teacher","english");

// console.log(aylin);



////////////////////////////
// -- Immadiate Function --
// just can use one .

// (function (name) {
    
//     var days = ["Sunday", "Monday", "Tue", "Wednesday", "Thirsday", "Friday", "Saturday"];
//     var today = new Date();
//     var msg = 'Welcome. '+ name+' Today is ' + days[today.getDay()];

//     console.log(msg);
// }("Hamdi"));
