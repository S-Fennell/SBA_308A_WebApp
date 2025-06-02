let body = document.querySelector('body');
body.style.display = "flex";
let button = document.createElement('button');
let input = document.createElement("input");

button.setAttribute("id", 'btn');
button.innerHTML = "<h3>Get Data</h3>";
input.setAttribute("id","input");
input.innerText = "Type Here";

body.appendChild(input);
body.appendChild(button);

button.addEventListener('click', text);

function text(){
    console.log("clicked")
}

// export {button}
