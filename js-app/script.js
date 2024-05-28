let yourScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const yourScorePara = document.querySelector("#your-score");
const computerScorePara = document.querySelector("#computer-score");


const genCompChoice = () => {
    //randomly computer chooses on among the three
    const options = ["stone", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("game draw");
    msg.innerText = "Draw!";
    msg.style.backgroundColor = "black";

};

const showWinner = (userWin,yourChoice,computerChoice) => {
    if (userWin) {
        console.log("You won!")
        yourScore++;
        yourScorePara.innerText =yourScore;
        msg.innerText = `You won! ${yourChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        console.log("computer wins")
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `You loose! ${computerChoice} beats ${yourChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (yourChoice) => {
    console.log("yourChoice =", yourChoice);
    //generate computer choice ->modular programming
    const computerChoice = genCompChoice();
    console.log("computerChoice =", computerChoice)

    if (yourChoice === computerChoice) {
        //match draw
        drawGame();
    } else {
        let userWin = true;
        if (yourChoice === "stone") {
            //comp choices are- paper, scissors --wrong
            userWin = computerChoice === "paper" ? false : true;
        } else if (yourChoice === "paper") {
            //comp choices are- stone, scissors
            userWin = computerChoice === "scissors" ? false : true;

        } else {
            //stone,paper --wrong
            userWin = computerChoice === "stone" ? false : true;
        }

        showWinner(userWin,yourChoice,computerChoice);

    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const yourChoice = choice.getAttribute("id")
        playGame(yourChoice);

    });
});
