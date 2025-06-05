let body = document.querySelector("body");
// body.style.display = "flex";
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

imgContainer.style.display = "flex";
imgContainer.style.height = "800px";
imgContainer.style.width = "800px";
imgContainer.style.justifyContent = "";
//player1 container
imgDiv1.style.height = "400px";
imgDiv1.style.width = "400px";
imgDiv1.style.border = "2px solid black";
//player 2 container
imgDiv2.style.height = "400px";
imgDiv2.style.width = "400px";
imgDiv2.style.border = "2px solid black";

img1.setAttribute("id", "image1");
img1.setAttribute("height", "400");
img1.setAttribute("width", "300");
img1.style.display = "block";

img2.setAttribute("id", "image2");
img2.setAttribute("height", "400");
img2.setAttribute("width", "300");
img2.style.display = "block";

button1.setAttribute("id", "btn1");
button1.innerHTML = "<h3>Get Data</h3>";
input1.setAttribute("id", "input1");
input1.innerText = "Type Here";
input1.setAttribute("placeholder", "Z - Fighter");

button2.setAttribute("id", "btn2");
button2.innerHTML = "<h3>Random Data</h3>";
input2.setAttribute("id", "input2");
input2.innerText = "Type Here";

body.appendChild(input1);
body.appendChild(button1);

body.appendChild(input2);
body.appendChild(button2);

body.appendChild(label);
label.innerText = "Who Will Win?";
body.appendChild(imgContainer);
//--selecting input for getting api z-fight
input1.innerText = "Goku";
// if innerText matches z- fighter
// "https://dragonball-api.com/api/characters"  : this gives an array of characters

async function getData() {
  try {
    let response = await fetch(`https://dragonball-api.com/api/characters/${Math.floor(Math.random()*9+1)}`);
    if (response.ok) {
      let data = await response.json();
      console.log(data.id, data.image);
      //console.log(data.items[Math.floor(Math.random() * 10)]);
      img1.src = data.image; //renders image
      console.log(data.ki)
      console.log(data.name);
      input1.innerText = data.ki;
      input1.setAttribute("placeholder", data.name);
  

      // const image = data.image;
    //   if (
    //     data.name.toLowerCase() === input1.innerText ||
    //     data.name.toUpperCase() === input1.innerText ||
    //     data.name === input1.innerText
    //   ) {
    //   }

    } else {
    //   throw new Error("could not find fighter");
    }
    
  } catch (error) {
    console.error(error);
  }
}

getData();
//input logic to get api char--
//---attatch button to get z-fight object button function trigger input info
// button1.addEventListener('click',getData);

function imgGen(){
let val = document.getElementById('input1').value;
   fetch(`https://dragonball-api.com/api/characters/${Math.floor(Math.random()*9+1)}`)
    .then(response => response.json())
    .then(data => {
        console.log("clicked1");
        for(let i = 0; i < 10; i++){
            console.log(data.id);
        }
          
          if(val === data.name){

            img1.src = data.image;
            console.log(data.name);   
            console.log(data.ki);
            console.log(response);
    }
    } )
}
// imgGen()

function imgGen2(){//Part two of game sequence 
let val = document.getElementById('input2').value;
   fetch(`https://dragonball-api.com/api/characters/${Math.floor(Math.random()*9+1)}`)
    .then(response => response.json())
    .then(data2 => {
        
         img2.src = data2.image;
         input2.innerText = data2.ki;
         input2.setAttribute("placeholder", data2.name);
        for(let i = 0; i < 10; i++){
            console.log(data2.items[i]);
        }
          
          if(val === data2.name){

            console.log(data2.name);   
            console.log(data2.ki);
            console.log(response);
    }

    } )
}
// imgGen2()


// let item = request.open("GET", "https://dragonball-api.com/api/characters/1", true);
// console.log(item)

export { button1, button2 };
// will use eventlisteners in other file after exporting and importing the buttons
button1.addEventListener("click", getData); // this function will fetch an api. the function will be in another file

// function text1() {
//   console.log("clicked1");
// }

button2.addEventListener("click", imgGen2); // this function will fetch an api. the function will be in another file

// function text2() {
//   console.log("clicked2");
// }


let in1 = document.getElementById('input1');
let in2 = document.getElementById('input2');

if(input1.innerText > input2.innerText){
    alert(in1 + ' is more powerful than ' + in2)
}
// export {button}




// if(Array.value !== array2.value){
    //do this
//}
