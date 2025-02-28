// RANDOM NUMBER GUESS GAME
// -----------------------------------------------------------------------------------------------------------------------------------


const num = Math.floor((Math.random() * 5) + 1);
// console.log(num);

let guess = prompt(`Guess the number between 1 to 5 or type "quit" to exit`);


while (true) {

    if ((guess === "quit")) {
        console.log("you quit!");
        break;

    } else {
        guess = Number(guess);

        if (Number.isNaN(guess)) {
            guess = Number(prompt("not a number, try again"));

        } else if (guess === num) {
            console.log("yeyyy!! you guessed right.");
            break;

        }
        else if (guess >= 1 && guess <= 5) {
            guess = Number(prompt("try again..."))

        }
        else {
            guess = Number(prompt("invalid number, guess between 1 and 5"))
        }
    }

}
