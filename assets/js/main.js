let rounds;
let numberguess = document.getElementById("guess").value

function getRounds(){
    if(document.getElementById("fourrounds").checked){
        document.getElementById("customroundsnumber").style.display = "none";
        rounds = 4;
    }
    else if(document.getElementById("fiverounds").checked){
        document.getElementById("customroundsnumber").style.display = "none";
        rounds = 5;
    }
    else if(document.getElementById("sixrounds").checked){
        document.getElementById("customroundsnumber").style.display = "none";
        rounds = 6;
    }
    else if(document.getElementById("customrounds").checked){
        document.getElementById("customroundsnumber").style.display = "inline";
        rounds = document.getElementById("customroundsnumber").value;
    }
    console.log(rounds);
}

function rechnen(){
    numberguess = document.getElementById("guess").value;
    console.log(numberguess);
}