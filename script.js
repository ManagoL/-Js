
// function Person(name){
//     return function(name1){
//     return name1 + name
//     }
// }

// let main = Person('Привет, меня зовут')
// console.log(main("Дейнерис Таргариен, королева Андолов и первых людей, разрушительница оков и мать драконов"));



// function Person(name){
// this.name = name;
// this.age = age;
// };
// Person.prototype.greet = function(){
//     console.log("Привет, меня звоут " + this.name, "мне " + this.age);
// };
// let age = 12
// let person = new Person("Дейнерис Таргариен, королева Андолов и первых людей, разрушительница оков и мать драконов");
// person.greet();



// function factorial(n){
//     if (n === 0){
//         return 1;
//     } else {
//         return n + factorial(n - 1);
//     }
// }
// console.log(factorial(5));



// let person = { 
//     name: "Дейнерис",
//     famile: "Таргариен,",
//     titul:"королева Андолов и первых людей, разрушительница оков и мать драконов",
//     age:28
// };

// function yser(person){

// let {name, famile, titul, age} = person;
// console.log(name, famile, titul, age);
// }
// yser(person);



// let arr1 = [1,2,3,6,8,4,5];
// let arr2 = [1,4,3,8,9,8,7];

// function arres(arr1, arr2){
//     let arr3 = [...arr1, ...arr2];
//     let arr_1 = new Set(arr3);
// console.log(arr_1)
// }

// arres(arr1, arr2)