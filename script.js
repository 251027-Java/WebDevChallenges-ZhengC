function sayHello() {
  alert("Hello from the external file!");
}


function sayGoodbye() {
  alert("Goodbye from the external file!");
}

let btn = document.getElementById("helloBtn");
btn.addEventListener("click", sayHello);

let btn2 = document.getElementById("byeBtn");
btn2.addEventListener("click", sayGoodbye);