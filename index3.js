const game = () => {
    let pScore = 0;
    let cScore = 0;
    
    //Play Match
    const playMatch = () => {
    const options = document.querySelectorAll(".buttons button");
    const playerHand = document.querySelector(".user-hand");
    const computerHand = document.querySelector(".expert-hand");
    const computerOptions = ["ROCK", "PAPER", "SCISSOR"];
    options.forEach(option => {
    option.addEventListener("click", function() {
    
    //Computer Choice
    const computerNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerOptions[computerNumber];
    
    compareHands(this.textContent, computerChoice);
    //Update Images.
    playerHand.src = `./${this.textContent}.jpg`;
    computerHand.src = `./${computerChoice}.jpg`;
    //Animation
    // playerHand.style.animation = "shakePlayer 2s ease";
    //computerHand.style.animation = "shakeComputer 2s ease";
    });
    });
    };
    const updateScore = () => {
    const playerScore = document.querySelector(".user p");
    const computerScore = document.querySelector(".expert p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
    };
    const compareHands = (playerChoice, computerChoice) => {
    //Update Text
    //const winner = document.querySelector(".winner");
    //Checking for a tie
    if (playerChoice === computerChoice) {
    alert("It is a tie");
    return;
    }
    //Check for Rock
    if (playerChoice === "ROCK") {
    if (computerChoice === "SCISSOR") {
    alert("user wins");
    pScore++;
    updateScore();
    return;
    } else {
    alert("exert wins");
    cScore++;
    updateScore();
    return;
    }
    }
    //Check for Paper
    
    if (playerChoice === "PAPER") {
    if (computerChoice === "SCISSOR") {
    alert("expert wins");
    cScore++;
    updateScore();
    return;
    } else {
    alert("user wins");
    pScore++;
    updateScore();
    return;
    }
    }
    //Check for Scissors
    if (playerChoice === "SCISSOR") {
    if (computerChoice === "ROCK") {
    alert("expert wins");
    cScore++;
    updateScore();
    return;
    } else {
    alert("user wins");
    pScore++;
    updateScore();
    return;
    }
    }
    };
    //Is call all the inner function
    //startGame();
    playMatch();
    };
    
    //start the game function
    game();