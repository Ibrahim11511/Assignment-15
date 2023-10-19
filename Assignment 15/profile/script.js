let welcomeUser = document.querySelector('.welcome-user');
let logOut = document.querySelector('.log-out');

welcomeUser.textContent += localStorage.getItem("userEmail") || '';

logOut.addEventListener('click', () => {
    localStorage.removeItem('userEmail');
    window.open("../index.html");
})