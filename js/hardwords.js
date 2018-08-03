/* variables */
let words = ["joogerhamilton", "word", "foursure", "yeeyee" , "swanging", "skitskurt", "gas", "break", "dip", "gas", "mollywhop", "thirsty", "thurst"];
let wordsVisible = [];
let points = 0;


/* Functions/start game */

$(document).ready(function () {
   
    /*	Select the text input with jQuery and add an event handler that checks the input against the words in the game*/ 
    let $answerBox = $('#answer');

        $answerBox.keyup(function() {

            if(deleteWord($answerBox.val().toLowerCase()) === true) {
                $answerBox.val("");
            }
        });

        $('#answerform').submit(function() {
            return false;
        });

        /* Game Space/area */

        createGameArea();
        addWordToGame();
        runGame();

});


