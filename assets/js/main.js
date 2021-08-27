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
    if (userChoice < computerChoice) {
        document.getElementById("output").innerHTML += `<p>You need to guess higher than ${userChoice}! Try again.</p>`
    } else if (userChoice > computerChoice) {
        document.getElementById("output").innerHTML += `<p>You need to guess lower than ${userChoice}! Try again.</p>`
    } else if (userChoice == computerChoice) {
        document.getElementById("output").innerHTML += `<p>You won!</p>`
    }
}

function rechnen(){
    document.getElementById("roundselection").style.display = "none";
    roundsleft++;
    console.log(roundsleft);
    document.getElementById("showrounds").style.display = "block";
    document.getElementById("showrounds").innerHTML = `${roundsleft} / ${roundstotal}`;

    userChoice = document.getElementById("guess").value;

    if (roundsleft < 2) {
        computerChoice = generateComputerChoice();
    }
    
    console.log("Userchoice: ", userChoice, "Computerchoice: ", computerChoice);

    compare(userChoice, computerChoice);
}

function restart(){
    location.reload();
}