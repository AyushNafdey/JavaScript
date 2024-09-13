// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('#my-form'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByTagName('li'));

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

// const cnt = document.querySelector('.box');
// // // cnt.remove();

// // cnt.firstElementChild.textContent = 'Hello';

// cnt.lastElementChild.remove();

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(e.target);
// });
// console.log("Hello");

console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title = "Ayush";
console.log(document.all[10]);
document.all[10].textContent = "Hello"

var headerTitle = document.querySelector(".heading");
console.log(headerTitle);
console.log(headerTitle.textContent); //pays no attention to styling
console.log(headerTitle.innerText); //pays attention to styling

const header = document.getElementById("main-header");
// console.log(header);
header.style.color = 'red';
//STYLING DOESN'T APPLY ON CLASSES, ONLY ON ID's!!

var items = document.getElementsByClassName("unordered_list");
// console.log(items);
for(var i = 0; i < items.length; i++){
    items[i].style.backgroundColor = '#FFFF00';
}

var secondItem = document.querySelector('.unordered_list:nth-child(2)');
// console.log(secondItem);
// secondItem.style.color = 'red';

var head = document.querySelector("#main-header");
console.log(head.parentNode);
head.parentNode.style.backgroundColor = '#20d4c5';

console.log(head.childNodes);
console.log(head.children);
console.log(head.children[0]);

// console.log(head.nextSibling);
// console.log(head.nextElementSibling);

console.log(head.previousSibling);
console.log(head.previousElementSibling);

//creating elements
var newDiv = document.createElement('div');
newDiv.className = 'container';
newDiv.id = 'main-div';
newDiv.setAttribute('title', 'Hello');
console.log(newDiv);

var newDivText = document.createTextNode("Hello World");
newDiv.appendChild(newDivText);

var box = document.querySelector('.container');
var container = document.querySelector('#my-form');

container.insertBefore(newDiv, box);
