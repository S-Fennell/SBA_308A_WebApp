let body = document.querySelector('body');
body.style.display = "flex";
let button1 = document.createElement('button');
let input1 = document.createElement("input");
let label = document.createElement('label');



button1.setAttribute("id", 'btn1');
button1.innerHTML = "<h3>Get Data</h3>";
input1.setAttribute("id","input1");
input1.innerText = "Type Here";

body.appendChild(input1);
body.appendChild(button1);

button1.addEventListener('click', text1);

function text1(){
    console.log("clicked1")
}


let button = document.createElement('button');
let input = document.createElement("input");

button.setAttribute("id", 'btn2');
button.innerHTML = "<h3>Random Data</h3>";
input.setAttribute("id","input2");
input.innerText = "Type Here";

body.appendChild(input);
body.appendChild(button);

button.addEventListener('click', text2);

function text2(){
    console.log("clicked2")
}
body.appendChild(label)
label.innerText = 'Who Will Win?'

// export {button}
