const email = document.querySelector('.email');
const password = document.querySelector('.password');
const signInBtn = document.querySelector('.sign-in-btn');
window.alert("انا غيرت بس background عشان الابعاد بتاعتها مش مظبوطه عندى ومبيجبش الصوره كلها")

function mailValidtion() {
    if (/^([a-z]|[A-Z])\w{9,}@\w{2,}\.\w{2,}$/.test(email.value)) {
        email.parentElement.querySelector('.mail-valid').style.display = "block";
        email.parentElement.querySelector('.n-valid').style.display = "none";
        email.style.border = "1px solid #00ff00";
        return true;
    }    else {
        email.parentElement.querySelector('.n-valid').style.display = "block";
        email.parentElement.querySelector('.mail-valid').style.display = "none";
        email.style.border = "1px solid #ff0000";
        return false;
    }
}

function passwordValidtion() {
    if (/(' ')/.test(password.value)) {
        password.parentElement.querySelector('.n-valid').style.display = "block";
        password.parentElement.querySelector('.pass-valid').style.display = "none";
        password.style.border = "1px solid #ff0000";
        return false;
    }    else if (/\w{6,}/.test(password.value)) {
        password.parentElement.querySelector('.pass-valid').style.display = "block";
        password.parentElement.querySelector('.n-valid').style.display = "none";
        password.style.border = "1px solid #00ff00";
        return true;
    }    else {
        password.parentElement.querySelector('.n-valid').style.display = "block";
        password.parentElement.querySelector('.pass-valid').style.display = "none";
        password.style.border = "1px solid #ff0000";
        return false;
    }
}

// localStorage.setItem('userEmail', 'emailvalue');


signInBtn.addEventListener("click", () => {
    mailValidtion();
    passwordValidtion();
    if ((mailValidtion() == true) && (passwordValidtion() == true)) {
        localStorage.removeItem('userEmail');
        localStorage.setItem('userEmail', email.value);
        window.open("./profile/index.html");
    }
    if (localStorage.getItem('userEmail')) {
        window.open("./profile/index.html");
    }
})

