
const CORRECT_NUMBER = parseInt (Math.random() * 10 )
let userGuess = parseInt (prompt ( "enter you number (0-10)" ) )

if( userGuess == CORRECT_NUMBER ) {
alert("Yeeee! You won!")
}
else {
    alert(" :( try again!")
}