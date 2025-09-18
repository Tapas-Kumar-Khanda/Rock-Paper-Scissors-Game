let userScore=0;
let compScore=0;

const choices =document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorepara=document.querySelector("#user-score");

const compScorepara=document.querySelector("#comp-score");


const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
    //rock,paper,scissors
};

const drawGame=()=>{
// console.log("Game was draw");
msg.innerText="Game was Draw. Play again/";
 msg.style.backgroundColor="#081b31";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        // console.log("You win!");
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        // console.log("You lose!");
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText=`You lost. ${compChoice} beats your ${userChoice}`;
         msg.style.backgroundColor="red";
    }
}

const playGame =(userChoice)=>{
    // console.log("user choice=",userChoice);
//Generate computer choice->modular
const compChoice=genCompChoice();
//  console.log("computer choice=",compChoice);

 if(userChoice===compChoice){
    //Draw game
    drawGame();
 }
 else{
    let userWin=true;
    if(userChoice==="rock"){
        //sciissors,paper
        userWin=compChoice==="paper"?false:true
    }
    else if(userChoice==="paper"){
        //rock,scissors
        userWin=compChoice==="scissors"?false:true;
    }
    else{
        //rock,paper
         userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
 }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        // console.log('choice was clicked',userChoice);
        playGame(userChoice);
    });
});