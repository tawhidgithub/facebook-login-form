const email = document.getElementById("email");
const pass = document.getElementById("pass");
const btn = document.getElementById("log-in");



btn.addEventListener('click', function (x) {
    x.preventDefault();
    if (email.value == '') {
        alert("please enter a email!");

    } else if (pass.value == '') {
        alert("please enter a password!");
    } else {
        alert("Congrechulation!");
    }
});

