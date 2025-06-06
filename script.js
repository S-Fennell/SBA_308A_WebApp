import{body, imgContainer, imgDiv1, imgDiv2, img1, img2, button1, button2, input1, input2 } from "./body.js"



imgContainer.style.display = "flex";
imgContainer.style.height = "500px";
imgContainer.style.width = "800px";
imgContainer.style.justifyContent = "center";
//player1 container
imgDiv1.style.height = "400px";
imgDiv1.style.width = "400px";
imgDiv1.style.border = "2px solid black";
imgDiv1.style.backgroundImage = "url('image/space.png')"
//player 2 container
imgDiv2.style.height = "400px";
imgDiv2.style.width = "400px";
imgDiv2.style.border = "2px solid black";
imgDiv2.style.backgroundImage = "url('image/space.png')"
let imgArry = []
body.style.backgroundImage = "url('image/')"

img1.setAttribute("id", "image1");
img1.setAttribute("height", "400");
img1.setAttribute("width", "300");
img1.style.display = "block";

img2.setAttribute("id", "image2");
img2.setAttribute("height", "400");
img2.setAttribute("width", "300");
img2.style.display = "block";

button1.setAttribute("id", "btn1");
button1.innerHTML = "<h3>Get Z-Fighter</h3>";
input1.setAttribute("id", "input1");
input1.innerText = "Type Here";
input1.setAttribute("placeholder", "Z - Fighter");

button2.setAttribute("id", "btn2");
button2.innerHTML = "<h3>Random Z-Fighter</h3>";
input2.setAttribute("id", "input2");
input2.innerText = "Type Here";
