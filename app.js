let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');


const genCompChoice = () => {
    const options = [" rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin){
        //console.log("You win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore ++;
        userScorePara.innerText= userScore;
    }else {
        //console.log("You lose");
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText= compScore;
    }
}

const drawGame = () => {
    //console.log("Game was draw");
    msg.innerText = "Game was draw. Play again.";
    msg.style.backgroundColor = "#001d3d";
}

const playGame = (userChoice) => {
    //console.log("user choice = ",userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    //console.log("computer choice = ",compChoice);

    if(userChoice === compChoice){
        //draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === 'rock'){
            //scissors,paper
            userWin = compChoice === 'paper' ? false : true;
        }else if (userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === 'scissors' ? false : true;
        } else {
            //rock,paper
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner (userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    //console.log(choice)
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");
        //console.log(`choice was clicked, ${userChoice}`);
        playGame(userChoice);
    });
});