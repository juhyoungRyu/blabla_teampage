const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");
const circle = document.querySelector(".circle");
const x1 = document.querySelector(".container h1:first-child");
const x2 = document.querySelector(".container h1:last-child");



function background() {
    box1.style.transform = "scale(2.9)";
    circle.classList.add("hidden");
    x1.classList.remove("hidden");
}

function background2() {
    box2.style.transform = "scale(2.9)";
    circle.classList.add("hidden");
    x2.classList.remove("hidden");
}

function return1() {
    box2.style.transform = "scale(0.25)";
}

function return2() {
    box1.style.transform = "scale(0.25)";
}

box1.addEventListener("click", background);
box2.addEventListener("click", background2);
x1.addEventListener("click", return1);
x2.addEventListener("click", return2);