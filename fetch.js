 import {button1, button2, input1, input2, img1, img2, label } from "./body.js"


// const char = fetch(`https://dragonball-api.com/api/characters/1`)
// .then(response => response.json())
// .then(data = response)  I should have made this global so I can access what I need that I couldn't access before because the fetch was made inside the function.

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
      let z1 = data.ki;
      input1.setAttribute("placeholder", data.name);
  
    } else {
      throw new Error("could not find fighter");
    }
    setTimeout(()=>{
        function imgGen2(){//Part two of game sequence 
let val = document.getElementById('input2').value;
   fetch(`https://dragonball-api.com/api/characters/${Math.floor(Math.random()*9+1)}`)
    .then(response => response.json())
    .then(data2 => {
         img2.src = data2.image;
         input2.innerText = data2.ki;
         let z2 = data2.ki
         input2.setAttribute("placeholder", data2.name);
            
    })
}
   

        imgGen2()
    },2000)
    return;
  } catch (error) {
    console.error(error);
  }
}

button1.addEventListener("click", getData);
