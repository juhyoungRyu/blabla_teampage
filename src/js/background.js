const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");
const x1 = document.querySelector("#btn1");
const x2 = document.querySelector("#btn2");

function background1() {
    box1.style.width = "1000%";
    box2.style.width = "40%";
    x2
        .classList
        .remove("hidden");
}

function background2() {
    box2.style.width = "1000%";
    box1.style.width = "40%";
    x1
        .classList
        .remove("hidden");

};

function returnBg1() {
    box1.style.width = "50%"
    box2.style.width = "50%"
    x1
        .classList
        .add("hidden");
    x2
        .classList
        .add("hidden");
}

function returnBg2() {
    box1.style.width = "50%"
    box2.style.width = "50%"
    x1
        .classList
        .add("hidden");
    x2
        .classList
        .add("hidden");
}

x1.addEventListener("click", returnBg1);
x2.addEventListener("click", returnBg2);
box1.addEventListener("click", background1);
box2.addEventListener("click", background2);