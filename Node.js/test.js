console.log("Hello world");
// let name = 'Ayush';
// let age = 19;

// alert("Hello!!!");
//Concatenation - older method
// console.log("My name is " + name + " and my age is " + age);

//Newer method
//console.log(`My name is ${name} and my age is ${age}`);

// const hello = `My name is ${name} and my age is ${age}`;
// console.log(hello);

// console.log(hello.substring(1, 9).toUpperCase());

//Important for databases
const str = 'India, Nagpur, Asia, Electronics'
console.log(str.split(', '));

//Array
// const fruits = new Array('apples', 'mangoes', 98, false);
const fruits = ['apples', 'mangoes', 98, false]
console.log(fruits);
console.log(fruits[0]);

fruits.unshift('strawberries');
console.log(fruits);

fruits.pop();
console.log(fruits);
console.log(Array.isArray('oranges'));

//Objects
const person = {
    firstName: 'Ayush',
    lastName: 'Nafdey',
    gender: 'male',
    age: 19,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        city: 'Nagpur',
        state: 'Maharashtra',
        country: 'India',
    }
}

// console.log(person);
// console.log(person.age);
// console.log(person.hobbies[1]);
// console.log(person.address.city);

//Pulling things out of object "person"
const { firstName, lastName } = person;
console.log(firstName);

const{ gender, address:{ city, state}} = person;
console.log(state);

person.email = 'ayush@gmail.com';
console.log(person);

const todos = [
    {
        text: 'Go to the market',
        isCompleted: true,
    },
    {
        text: 'Completing the assignment',
        isCompleted: true,
    },
    {
        text: 'Wash the dishes',
        isCompleted: false,
    }
]
// console.log(todos);

//FOR EACH LOOP
// todos.forEach(function(todo) {
//     console.log(todo);
// });

// MAP 
// const todoText = todos.map(function(todo){
//     return todo.text;
// });
// console.log(todoText);

// FILTER
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted == true;
}).map(function(todo) {
    return todo.text;
})
console.log(todoCompleted);

// SWITCH
const x = 12;
const color = x > 10 ? 'red' : 'blue';
switch(color){
    case 'red':
        console.log("Color is red");
        break;
    case 'blue':
        console.log("Color is blue");
        break;
    default:
        console.log("Color is neither red nor blue");
}

// FUNCTIONS
const addNums = (num1 = 1, num2 = 1) =>{
    return (num1+num2)
}
console.log(addNums(4,5));

// Constructor function
// function Person(firstname, lastname, dob){
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.dob = new Date(dob);
    // this.getBirthYear = function() {
    //     return this.dob.getFullYear();
    // }
    // this.getFullName = function(){
    //     return `${this.firstname} ${this.lastname}`;
    // }
// }

// Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function(){
//     return  `${this.firstname} ${this.lastname}`;
// }

// INITIALIZE OBJECT
// const person1 = new Person('John', 'Doe', '3-3-2005');
// console.log(person1);
// console.log(person1.dob.getDate());
// console.log(person1.getBirthYear());
// console.log(person1.getFullName());

// CLASSES
class Person{
    constructor (firstname, lastname, dob){
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = new Date(dob);   
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return  `${this.firstname} ${this.lastname}`;
    }
}

const person1 = new Person('John', 'Doe', '3-3-2005');
console.log(person1);