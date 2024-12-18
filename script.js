document.addEventListener("DOMContentLoaded", () => {
let boxes = document.querySelectorAll(".box");

let turn = "X";
let isFinshed = false;

boxes.forEach(e => {
    e.innerHTML = "";
    e.addEventListener("click", () => {
        if( !isFinshed && e.innerHTML===""){
            e.innerHTML += turn;
            checkwin();
            changeturn();
            checkdraw();
            
        }
})
})

function changeturn(){
    if(turn === "X"){
        turn = "O";
        document.querySelector(".zero").style.backgroundColor = "red"
        document.querySelector(".cross").style.backgroundColor = "transparent"
    }
    else{
        turn = "X";
        document.querySelector(".cross").style.backgroundColor = "red"
        document.querySelector(".zero").style.backgroundColor = "transparent"
    }
}

function checkwin(){
    let winCombinations = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]

    for(let i=0 ;  i<winCombinations.length ; i++){
        let v0 = boxes[winCombinations[i][0]].innerHTML;
        let v1 = boxes[winCombinations[i][1]].innerHTML;
        let v2 = boxes[winCombinations[i][2]].innerHTML;
        console.log(v0, v1, v2);  // Log the values to see if they're what you expect

        
        if(v0 != "" && v0 === v1 && v0 === v2){
            isFinshed = true;
            document.querySelector(".winner").innerHTML = turn + " wins"
            
            for(let k=0 ; k < 3 ; k++){
               boxes[winCombinations[i][k]].style.backgroundColor = "blueviolet"
            }
            
        }
    }
}

function checkdraw(){
   if(!isFinshed){
    let isDraw = true;
    boxes.forEach( e => {
        
        if(e.innerHTML === "") isDraw = false;
    })

    if(isDraw){
        isFinshed = true;
        document.querySelector(".winner").innerHTML =  " Draw " 
    }
   }
}

document.querySelector(".reset-btn").addEventListener("click", ()=>{
    isFinshed = false;
    boxes.forEach( e => {
        e.innerHTML = "";
        e.style.backgroundColor = "transparent"
    })

    document.querySelector(".winner").innerHTML =  "" 
})

})