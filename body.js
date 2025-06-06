const body = document.querySelector("body");
const headDiv = document.createElement('div');
headDiv.setAttribute('id','headDiv');
headDiv.style.height = '380px';
headDiv.style.width = "800";
headDiv.style.border = '20px solid midnightblue'
headDiv.style.borderRadius = '15px'
body.appendChild(headDiv);
let h2 = document.createElement('h2');
body.append(h2);
h2.textContent = 'Click "Get" Z-Fighter to get a Random Z-Fighter'


const imgArray = ["url('image/headimg.png')", "url('image/im1.png')", "url('image/im2.png')", "url('image/im3.png')", "url('image/im4.png')", "url('image/im5.png')"]


//--Changes images when page loads
        setTimeout(()=>{
        headDiv.style.backgroundImage = "url('image/headimg.png')"
    },1000);
        setTimeout(()=>{
        headDiv.style.backgroundImage = "url('image/im1.png')"
    },3000);        setTimeout(()=>{
        headDiv.style.backgroundImage = "url('image/im2.png')"
    },6000);        setTimeout(()=>{
        headDiv.style.backgroundImage = "url('image/im3.png')"
    },9000);        setTimeout(()=>{
        headDiv.style.backgroundImage = "url('image/im5.png')"
    },10000);        setTimeout(()=>{
        headDiv.style.backgroundImage = "url('image/im4.png')"
    },15000); 

// headDiv.style.backgroundImage = "url('image/im1.png')"
let button1 = document.createElement("button");
let button2 = document.createElement("button");
let input1 = document.createElement("input");
let input2 = document.createElement("input");
let label = document.createElement("label");
//containers for hold img of z-fighters
let imgContainer = document.createElement("div");
let imgDiv1 = document.createElement("div");
let imgDiv2 = document.createElement("div");
let img1 = document.createElement("img");
let img2 = document.createElement("img");

imgContainer.appendChild(imgDiv1);
imgContainer.appendChild(imgDiv2);

imgDiv1.appendChild(img1);
imgDiv2.appendChild(img2);

body.appendChild(input1);
body.appendChild(button1);

body.appendChild(input2);
body.appendChild(button2);

label.innerText = "Who Will Win?";
body.appendChild(imgContainer);
body.appendChild(label);

let in1 = document.getElementById('input1');
let in2 = document.getElementById('input2');

if(input1.innerText > input2.innerText){
    alert(in1 + ' is more powerful than ' + in2)
}
 export{
    button1, button2, input1, input2, img1, img2, label,body, imgContainer, imgDiv1, imgDiv2 
}
