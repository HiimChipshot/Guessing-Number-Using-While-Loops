let setNumber = parseInt(prompt("Set maximum number"));
while (!setNumber) {
    setNumber = parseInt(prompt("Please set a valid number"));
}
const targetNumber = Math.floor(Math.random() * setNumber) + 1;
console.log(targetNumber);

let guess = parseInt(prompt("Enter your first guess!"));
let attempt = 1;
while (parseInt(guess) !== targetNumber) {
    if (guess == 'q') break;
    attempt++;
    if (guess > targetNumber) {
        guess = prompt("Your number is too high!");
    } else  {
        guess = prompt("Your number is too low!");
    }
}
if (guess === 'q') {
    alert("You QUIT!!!")
} else {
    alert(`You got it!! It took you ${attempt} guesses`);
} 