


async function game(){

    if(sayinfetchBaseKI1 > sayinfetchBaseKI2){
        console.log("player 1 wins")
    }
    if(sayinfetchBaseKI2 > sayinfetchBaseKI1){
        console.log("player 2 wins")
    }
}

// const img = "";

// async function getData(){
//     try{
//         const response = await fetch("https://dragonball-api.com/api/characters/1");
//         if(response.ok){
//             const data = await response.json();
//             console.log(data.id, data.image)
//             img = data.image;
//         }else{
//             throw new Error("could not find fighter")
//         }

//     }catch(error){
//         console.error(error)
//     }
// }
// getData()