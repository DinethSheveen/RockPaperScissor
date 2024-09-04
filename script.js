let  computerMove = "";
let result = "";

let score = JSON.parse(localStorage.getItem("score")); 
//Deleting data from the localStorage won't work if the scores are null
//Therefore assigning default values to the score
if(score === null){
    score = {
        wins:0,
        losses:0,
        ties:0
    }
}

//A function to randomly generate to the computer
//Depending on the generated number, selecting the option(r,p or s) 
function computerMoveGuess(playerMove){
    const randomNumbers = Math.random();

    if(randomNumbers > 0 && randomNumbers < 1/3){
        computerMove = "Rock";
    }
    else if(randomNumbers >= 1/3 && randomNumbers < 2/3){
        computerMove = "Paper";
    }
    else{
        computerMove = "Scissors";
    }

    //If player selects 'Rock'
    if(playerMove === 'Rock'){
        if(computerMove === "Rock"){
            result = "Tie";
        }
        else if(computerMove === "Paper"){
            result = "You Lose";
        }
        else{
            result = "You Win";
        }
    }

    //If player selects 'Paper'
    else if(playerMove === 'Paper'){
        if(computerMove === "Rock"){
            result = "You Win";
        }
        else if(computerMove === "Paper"){
            result = "Tie";
        }
        else{
            result = "You Lose";
        }
    }

    //If player selects 'Scissors'
    else if(playerMove === 'Scissors'){
        if(computerMove === "Rock"){
            result = "You Lose";
        }
        else if(computerMove === "Paper"){
            result = "You Win";
        }
        else{
            result = "Tie";
        }
    }

    if(result === "You Win"){
        score.wins++;
    }
    else if(result === "You Lose"){
        score.losses++;
    }
    else{
        score.ties++;
    }

    document.querySelector(".matchResult").innerHTML = result;
    updateScore();
    document.querySelector(".matchStatus").innerHTML = `You ${playerMove} - Computer played ${computerMove}` 

    //Setting the item to be stores in the localStorage
    localStorage.setItem("score",JSON.stringify(score)); 
}

//A function to reset the score of the player
function resetScore(){

    //Confirming to reset the score
    if(confirm("Do You Need To Reset The Score?")){
        //Reseting the scores to zero and deleting the stored data from the localStorage
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.removeItem("score");
        updateScore();
        document.querySelector(".matchResult").innerHTML = "";
        document.querySelector(".matchStatus").innerHTML = "";

        alert("Your score has been successfuly reseted");
    }
}

//A function to update the score
function updateScore(){
     document.querySelector(".scoreCard").innerHTML = `Wins : ${score.wins} , Losses : ${score.losses} , Ties : ${score.ties}`;
}