var hiddenNumber= Math.floor(Math.random() * 11);  

var answer= window.prompt("Guess A Number Between 0 And 10 !");

var entryCount = 1;
var entryLimit = 3;
var error = false;

while(answer!=hiddenNumber && !error){  // The answer is wrong but the user can still guess : no error
     if(entryCount<entryLimit){
         answer= window.prompt("Wrong! Try Again");
        entryCount++;
     } else{
         error=true; // too many entries
     }
}
if(error){
    alert("Too Many Enteries!");
} else{
    alert("Good job! You Guessed Right!");
}


