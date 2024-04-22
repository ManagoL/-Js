function name1() {
    return function (name) {
        console.log(`Привет ${name}`)
    }
}

let name2 = name1('Олег');
name2("Олег");



function Hiiii(name, age) {
    this.name = name,
    this.age = age
}

Hiiii.prototype.greet = function() {
    console.log(`Привет ${this.name} возрастом ${this.age}`);
}

let person = new Hiiii("Jack", 27)

person.greet();



function factorial(a) {
    if (a === 0) {
        return 1
    } else {
        return a * factorial(a - 1)
    }
}

console.log(factorial(5));

let person = {
    name: 'Tyler',
    surname: "Durden",
    age: 27
}

function destr(person) {
    let {name, surname, age} = person
    console.log(`я ${name} ${surname} возрастом ${age}`);
}

destr(person);



function deleteNum(arr1, arr2) {
    let arr3 = [...arr1, ...arr2]
    console.log(Array.from(new Set(arr3)));;
}

deleteNum(arr1 = [1,2,3,4], arr2 = [2,3,5,6])

function add(arr, n) {
    arr.push(n ?? 4); console.log(Array.from(new Set(arr))); 

}

add(arr = [1,2,3])