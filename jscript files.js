let gameLength = document.querySelector("#gamelength");
const h2 = document.querySelector("h2");
let playerOne = document.querySelector(".pone");
let gameOver = false;
let playerTwo = document.querySelector(".ptwo");
let scoreTwo =0;
let scoreOne =0;



playerOne.addEventListener("click", function(){
    
    if(!gameOver){
        scoreOne += 1;
        h2.innerText = `${scoreOne} to ${scoreTwo}`;
       
        if(scoreOne === parseInt(gameLength.value)){
            gameOver = true;
            h2.innerText = `GAME IS OVER! Player One Won with ${scoreOne}  to ${scoreTwo}`;
            h2.style.color ="indigo";   
        }
      } 
      reset.addEventListener("click", function(){
        scoreOne=0;
        gameOver = false;
        h2.style.color ="black";   
    })
})


playerTwo.addEventListener("click", function(){
    
    if(!gameOver){
        scoreTwo += 1;
        h2.innerText = `${scoreOne} to ${scoreTwo}`;
       
        if(scoreTwo === parseInt(gameLength.value)){
            gameOver = true;
            h2.innerText = `GAME IS OVER! Player Two Won with ${scoreTwo}  to ${scoreOne}`;   
            h2.style.color ="indigo";  
        }  
      } 

      reset.addEventListener("click", function(){
        scoreTwo=0;
        gameOver = false;
        h2.style.color ="black";   

    })   
})

const reset = document.querySelector(".reset");
reset.addEventListener("click", function(){
    const h2 = document.querySelector("h2");
    let scoreOne =0;
    let scoreTwo =0;
    h2.innerText = `${scoreOne} to ${scoreTwo}`;
})
