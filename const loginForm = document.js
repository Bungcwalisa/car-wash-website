const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("uname");
const passwordInput = document.getElementById("pwd");
const modal = document.querySelector(".modal");


// --- VALIDATE LOGIN ---
function validateLogin(event) {
    // Prevent form from submitting
    if (event) event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Example validation (replace with your own logic)
    const validUsername = "admin";
    const validPassword = "1234";

    if (username === validUsername && password === validPassword) {
        // Redirect or handle successful login
        window.location.href = "dashboard.html"; // change if needed
    } else {
        showModal();
    }
}


// --- SHOW MODAL ---
function showModal() {
    modal.style.display = "flex";  // or block depending on your CSS
}


// --- HIDE MODAL ---
function dismissModal() {
    modal.style.display = "none";
}


// --- PREVENT DEFAULT SUBMIT + HOOK VALIDATION ---
loginForm.addEventListener("submit", validateLogin);