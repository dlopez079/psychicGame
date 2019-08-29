// <!-- CREATE THE SCRIPT TO THE HTML DOCUMENT -->

        
        //  CREATE VARIALBE TO STORE MY VALUES: WINS, LOSSES, USERGUESS, COMPUTER GUESS, COMPUTER CHOICES.
        var wins=0;
        var losses=0;
        var guessLeft=9;
        var guessSoFar = [];
        var userGuess;
        var computerGuess;
        var computerChoices = 'abcdefghijklmnopqrstuvwxyz'.split('');
        var displayText = "Enter Key to start.";

        //  CREATE A FUNCTION TO DISPLAY THE FUNCTION TO THE PAGE DOCUMENT (HTML)

        function updateDisplay () {
            document.querySelector("#displayText").innerHTML = displayText;
            document.querySelector("#wins").innerHTML = wins;
            document.querySelector("#losses").innerHTML = losses;
            document.querySelector("#guessLeft").innerHTML = guessLeft;
            document.querySelector("#guessSoFar").innerHTML = guessSoFar;
        }
        
        //CALL THE FUNCTION IN ORDER FOR IT TO WORK!!!!!
        updateDisplay();

        //  CREATE A FUNCTION TO GENERATE A RANDOM LETTER FOR COMPUTER
        function computerRandomLetter() {
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            console.log(computerGuess);
        }

        computerRandomLetter();

        //  CREATE A FUNCTION TO RESET SCORE
        function resetScores() {
            guessLeft = 9;
            guessSoFar =[];
        }


        // CREATE AN ONKEY UP EVENT FUNCTION TO GRAB USERGUESS
        document.onkeyup = function(event) {

            // Determines which key was pressed.
            userGuess = event.key;
            console.log(userGuess);

            //CREATE THE CONDITIONAL
            if (userGuess === computerGuess) {
            console.log("You Won!!!!");
            wins++;
            resetScores();
            computerRandomLetter();
            updateDisplay();
            
            } else if (userGuess !== computerGuess) {
            console.log("You lost!!!!");
            guessLeft--;
            guessSoFar.push(userGuess);
            updateDisplay();

            }
            // else {
            // losses++;
            // resetScores();
            // updateDisplay();
            // }

            if (guessLeft === 0){
                console.log("Restart Game!");
                losses++;
                // guessLeft = 9;
                // guessSoFar = []
                resetScores();
                updateDisplay();
            }
        }

        // CREATE A FUNCTION FOR GUESS LEFT.  
        // function remainingGuess () {
        //     guessLeft--;
        // } 

    
    
        
            // END OF CONDITIONAL
