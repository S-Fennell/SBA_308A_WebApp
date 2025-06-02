// import {button} from "./body.js"
let object1 = fetch("https://dragonball-api.com/api/characters/2")
.then(response => response.json())
.then(data => console.log(data, data.name, data.ki)) 


let object2 = fetch("https://dragonball-api.com/api/characters/1")//ranodm generator
.then(response => response.json())
.then(data => console.log(data, data.name, data.ki))
.catch(error => console.error(error));
 //player1
//fetch()//player2

//console.log(object)

object1
object2




