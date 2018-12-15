$(document).ready(function () {
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
        "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var randomNumber,
        guessThisLetter,
        lettersGuessed = '';

    var givenGuessCount = 9;
    var winningStreak = 0;
    var lossingStreak = 0;

    $('#winRate').text('Wins: ' + winningStreak);
    $('#lossesRate').text('Losses: ' + lossingStreak);
    $('#guessesLeft').text('Guesses Left: ' + givenGuessCount);
    $('#guessesBy').text('Your Guesses so far: ' + lettersGuessed);

    function pickRandomLetter() {
        randomNumber = Math.floor((Math.random() * 25) + 1);
        guessThisLetter = alphabet[randomNumber];
    }

    function resetGame() {
        pickRandomLetter();
        givenGuessCount = 9;
        $('#guessesLeft').text('Guesses Left: ' + givenGuessCount);
        lettersGuessed = '';
        $('#guessesBy').text('Your Guesses so far: ' + lettersGuessed);
        beginGame();
    }

    function beginGame() {
        document.onkeyup = function (event) {
            if (guessThisLetter === event.key) {
                winningStreak++;
                $('#winRate').text('Wins: ' + winningStreak);
                resetGame();
            } else {
                lettersGuessed = lettersGuessed + '    ' + event.key;
                $('#guessesLeft').text('Guesses Left: ' + givenGuessCount--);
                $('#guessesBy').text('Your Guesses so far: ' + lettersGuessed);
            }
            if (givenGuessCount === 0){
                lossingStreak++;
                $('#lossesRate').text('Losses: ' + lossingStreak);
                resetGame();
            }
        }
    }

    resetGame();
});