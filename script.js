let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {

    const input = document.getElementById("guess").value.trim();
    const message = document.getElementById("message");

    // Empty input
    if (input === "") {
        message.innerHTML = "⚠ Please enter a number.";
        return;
    }

    // Only whole numbers allowed
    if (!/^\d+$/.test(input)) {
        message.innerHTML = "❌ Invalid input! Only numbers from 1 to 100 are allowed.";
        return;
    }

    const guess = parseInt(input);

    // Range validation
    if (guess < 1 || guess > 100) {
        message.innerHTML = "⚠ Number must be between 1 and 100.";
        return;
    }

    attempts++;
    document.getElementById("attempts").innerHTML = "Attempts: " + attempts;

    if (guess < randomNumber) {
        message.innerHTML = "📉 Too Low!";
    } else if (guess > randomNumber) {
        message.innerHTML = "📈 Too High!";
    } else {
        message.innerHTML = "🎉 Congratulations! You guessed the number in " + attempts + " attempts.";
    }
}

function newGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    document.getElementById("guess").value = "";
    document.getElementById("message").innerHTML = "";
    document.getElementById("attempts").innerHTML = "Attempts: 0";
}