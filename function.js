function askName() {
    let userName = prompt("Please enter your name:");
    if (userName) {
        document.getElementById("welcomeMessage").innerText = `Hello, ${userName}! Welcome to my website.`;
    }
}
