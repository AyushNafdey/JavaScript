console.log("Hello");
const btn = document.querySelector('.btn');
btn.addEventListener("DOMConteneLoaded", (e) => {
    console.log(e.target);
})