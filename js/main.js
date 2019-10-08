let login = document.getElementById('login');
let register = document.getElementById('register');
let btn = document.getElementById('btn');
let register__click = document.getElementById('register__click');
let login__click = document.getElementById('login__click');


login__click.addEventListener('click', function() {
    login.style.left = "50px";
    register.style.left = "450px";
    btn.style.left = "0";
})

register__click.addEventListener('click', function() {
    login.style.left = "-400px";
    register.style.left = "50px";
    btn.style.left = "115px";
})