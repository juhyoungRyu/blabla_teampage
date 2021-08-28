const chat_box1 = document.querySelector(".chat-box1");
const chat_box2 = document.querySelector(".chat-box2");
const chat_box3 = document.querySelector(".chat-box3");

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


function innerText1 {
    chat_box1.innerText = "hello!"
}

chat_box1.addEventListener("mouseenter", changeColor1);
chat_box2.addEventListener("mouseenter", changeColor2);
chat_box3.addEventListener("mouseenter", changeColor3);


chat_box1.addEventListener("mouseleave", changeColor4);
chat_box2.addEventListener("mouseleave", changeColor5);
chat_box3.addEventListener("mouseleave", changeColor6);


chat_box1.addEventListener("mouseenter", innerText1);
chat_box2.addEventListener("mouseleave", innerText2);
chat_box3.addEventListener("mouseleave", innerText3);


//그러면 너 나름대로 마우스 엔터 했을때 안에 hello 나오게 만들어보셈
//ㅇㅇ 이것만 구현해봐
//안에 미리 h1이나 p 만들어놓고 innerText하면 될거임
//이벤트 리스너는 지금이랑 똑같지넣도 될듯
//창의성을 발휘하도록.



