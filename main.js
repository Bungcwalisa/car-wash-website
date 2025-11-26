const modal = document.querySelector(".modal");

document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("uname").value;
    const password = document.getElementById("pwd").value;
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




let sidebarOpen = "false";

function toggleNav() {

  const sidebar = document.querySelector(".nav-sidebar");
  const toggleBtn = document.querySelector(".btn-toggle-nav");
  const sidebarLink = document.querySelector(".nav-sidebar");
  const sidebarLinks = document.querySelector(".nav-sidebar ul");

  if (sidebar.style.width === "250px") {
    sidebar.style.width = "50px";
    sidebarLinks.style.visibility ="hidden";
  } else {
    sidebar.style.width = "250px";
    sidebarLinks.style.visibility ="visible";
  }
}
