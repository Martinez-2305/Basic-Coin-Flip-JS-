const button = document.getElementById("coin");
const reset = document.getElementById("reset");
button.onclick = flipCoin
reset.onclick = resetButton

let result;
let flipGuess;     
let flipOutcome1 = 'Heads'
let flipOutcome2 = 'Tails'
let flipComparison1 = "Well Done, Correct Guess!"
let flipComparison2 = "Ooops, Wrong Guess!"
let flipComparison3 = "Sorry, you haven't confirmed your guess"
let score = {
  wins: 0,
  losses: 0
}

 
document.getElementById("heads").onclick = function (){

document.getElementById("js-guess").innerHTML = "You Chose Heads"
flipGuess = "Heads"
  
}
document.getElementById("tails").onclick = function (){

    document.getElementById("js-guess").innerHTML = "You Chose Tails"
    flipGuess = "Tails"
  
  }
      
      function flipCoin() {
     let coinToss = Math.random();
  
        if (coinToss < 0.5) {
         result = 'Heads' 
          console.log('Heads')
         
        } else if (coinToss > 0.5) {
          result = 'Tails' 
          console.log("Tails")
          
        }
        if(result === 'Heads'){
        document.getElementById("js-result").innerHTML = "Coin Flipped " + flipOutcome1;
      } else if(result === 'Tails'){
          document.getElementById("js-result").innerHTML = "Coin Flipped " + flipOutcome2;
        }

        if (flipGuess === result){
          document.getElementById("js-comparison").innerHTML = flipComparison1 ;
          //document.getElementById("score").innerText = `Wins: ${score.wins += 1}`;
        } else if(flipGuess === undefined){document.getElementById("js-comparison").innerHTML = flipComparison3 ;
        
        }else {
          document.getElementById("js-comparison").innerHTML = flipComparison2 ;
          //document.getElementById("score").innerText = `Losses: ${score.wins += 1}`;
        }
        
        
        return flipCoin;
      }

      function resetButton(){
        
        document.getElementById("js-guess").innerHTML = ""
        document.getElementById("js-result").innerHTML = ""
        document.getElementById("js-comparison").innerHTML = ""
        score.wins = 0;
        score.losses = 0;
      
      }
      