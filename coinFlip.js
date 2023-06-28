const button = document.getElementById("coin");
 let flipGuess;     
button.onclick = flipCoin 


document.getElementById("submit").onclick = function (){

const choiceHeads = document.getElementById("heads");
const choiceTails = document.getElementById("tails");


if (choiceHeads.checked){
  document.getElementById("js-guess").innerHTML = "You Chose Heads"
  flipGuess = "Heads"
  
}
else if (choiceTails.checked){
  document.getElementById("js-guess").innerHTML = "You Chose Tails"
  flipGuess = "Tails"
}


   




}


      let flipOutcome1 = 'Heads'
      let flipOutcome2 = 'Tails'
      let flipComparison1 = "Well done, correct guess!"
      let flipComparison2 = "Ooops, wrong guess!"
      let flipComparison3 = "Sorry, you haven't confirmed your guess"

      function flipCoin() {
     let coinToss = Math.random();
  let result;
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
        } else if(flipGuess === undefined){document.getElementById("js-comparison").innerHTML = flipComparison3 ;
        
        }else {
          document.getElementById("js-comparison").innerHTML = flipComparison2 ;
        }
        
        
        return flipCoin;
      }
      