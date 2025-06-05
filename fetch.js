 import {button1, button2, input1, input2, img1, img2, label } from "./body.js"
// let myData1;
// let myData2;

// let object1 = fetch("https://dragonball-api.com/api/characters/2")
// .then(response => response.json())
// .then(data1 => {
//     myData1 = data1.ki;
    
//     console.log(data1)
//     console.log(data1.name)
//     console.log(data1.ki)


// }) 

// let object2 = fetch("https://dragonball-api.com/api/characters/1")//ranodm generator
// .then(response => response.json())
// .then(data2 => {
//     myData2 = data2.ki;
   
//     console.log(data2)
//     console.log(data2.name)
//     console.log(data2.ki)
// })
// .catch(error => console.error(error));
//  //player1
// //fetch()//player2

// //console.log(object)
//  if(myData1 > myData2){
//     console.log(`You Win! ${myData2} Loses!`)

// }else if(myData2> myData1){
//     console.log(`You Lose! ${myData2} Wins!`)
// }
// object1
// object2

// Notes: after getting a charactor, that charactor 
// gets pushed to an array. that array get checked for 
// that charactor, if the charactor is already in the 
// array than you can not get tha charactor again.

// let request = request.open("GET"," https://pokeapi.co/api/v2/pokemon/ditto", true );
// request.send(data => console.log(data));
//---------------code below----------from body.js------

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
      label.innerText = data.ki;
      input1.setAttribute("placeholder", data.name);
  

 

    } else {
    //   throw new Error("could not find fighter");
    }
    setTimeout(()=>{
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
    })
}

        imgGen2()
    },2000)
    
  } catch (error) {
    console.error(error);
  }
}







button1.addEventListener("click", getData);
button2.addEventListener("click", imgGen2);