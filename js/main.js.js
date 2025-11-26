const modal = document.querySelector(".modal");

document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("uname");
    const password = document.getElementById("pwd");
    if (username === "Bungcwalisa" && password === "123456") {
        window.location.href = "index.html";
    }
    else {
        modal.style.display = "block"
    }
});
function dismissModal()
{
    modal.style.display = "none";
}
