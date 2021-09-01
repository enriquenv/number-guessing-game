let roundsleft = 0;
let roundstotal;
let userChoice;

function getRounds(){
    if(document.getElementById("fourrounds").checked){
        document.getElementById("customroundsnumber").style.display = "none";
        roundstotal = 4;
    }
    else if(document.getElementById("fiverounds").checked){
        document.getElementById("customroundsnumber").style.display = "none";
        roundstotal = 5;
    }
    else if(document.getElementById("sixrounds").checked){
        document.getElementById("customroundsnumber").style.display = "none";
        roundstotal = 6;
    }
    else if(document.getElementById("customrounds").checked){
        document.getElementById("customroundsnumber").style.display = "inline";
        roundstotal = document.getElementById("customroundsnumber").value;
    }
}

function generateComputerChoice(){
    return Math.floor(Math.random() * 101);
}

function compare(userChoice, computerChoice){
    if (userChoice < computerChoice && roundsleft < roundstotal ) {
        document.getElementById("output").innerHTML += `<p>${roundsleft}- You need to guess higher than ${userChoice}! Try again...</p>`;
    } else if (userChoice > computerChoice && roundsleft < roundstotal) {
        document.getElementById("output").innerHTML += `<p>${roundsleft}- You need to guess lower than ${userChoice}! Try again...</p>`;
    } else if (userChoice != computerChoice && roundsleft == roundstotal){
        document.getElementById("output").innerHTML += `<p>Oh oh... You lost! <a href=".">Try again</a>.</p>`;
        document.getElementById("submit").disabled = true;
    } else if (userChoice == computerChoice && roundsleft <= roundstotal) {
        document.getElementById("output").innerHTML += `<p>Yes!! You got me in ${roundsleft} guesses! I'm ${computerChoice}. You win!! <a href=".">Play again</a>.</p>`;
        document.getElementById("submit").disabled = true;
    }
}

function rechnen(){
    document.getElementById("roundselection").style.display = "none";

    userChoice = document.getElementById("guess").value;
    if (roundsleft < 1) {
        computerChoice = generateComputerChoice();
    }
    // console.log("Userchoice: ", userChoice, "Computerchoice: ", computerChoice);

    if (roundsleft < roundstotal) {
        roundsleft++;
        // console.log(roundsleft);
        document.getElementById("showrounds").style.display = "block";
        document.getElementById("showrounds").innerHTML = `${roundsleft} / ${roundstotal}`;

        compare(userChoice, computerChoice);
    }
}