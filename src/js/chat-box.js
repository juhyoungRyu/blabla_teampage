const chat_box1 = document.querySelector(".chat-box1");
const chat_box2 = document.querySelector(".chat-box2");
const chat_box3 = document.querySelector(".chat-box3");
const a = chat_box1.querySelector("a");
let count = 0;

function changeColor1 () {
    chat_box1.style.background = "orange";
}
function changeColor2 () {
    chat_box2.style.background = "skyblue"
}
function changeColor3 () {
    chat_box3.style.background = "palegreen";
}

function changeColor4 () {
    chat_box1.style.background = "white";
}
function changeColor5 () {
    chat_box2.style.background = "white"
}
function changeColor6 () {
    chat_box3.style.background = "white";
}

function innerText1 () {
    
}
function innerText2 () {
    
}
function innerText3 () {
   
}

chat_box1.addEventListener("mouseenter", changeColor1);
chat_box2.addEventListener("mouseenter", changeColor2);
chat_box3.addEventListener("mouseenter", changeColor3);


chat_box1.addEventListener("mouseleave", changeColor4);
chat_box2.addEventListener("mouseleave", changeColor5);
chat_box3.addEventListener("mouseleave", changeColor6);


chat_box1.addEventListener("click", innerText1);
chat_box2.addEventListener("click", innerText2);
chat_box3.addEventListener("click", innerText3);
