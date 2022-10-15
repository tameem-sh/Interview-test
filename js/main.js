// View password
let viewPass = document.querySelector('#view > i');
let password = document.querySelector('#password');

viewPass.addEventListener( "click", () => {
    if (password.getAttribute("type") == 'password') {
    password.setAttribute("type", "text");
    viewPass.classList.replace("fa-eye", "fa-eye-slash");
}
else {
    password.setAttribute("type", "password");
    viewPass.classList.replace("fa-eye-slash", "fa-eye");
    }
})

// Login validation
let username = document.querySelector('#number');
let loginBtn = document.querySelector('#loginbtn');
let errorText = document.querySelector('.error');

loginBtn.addEventListener('click', (e) => {
    let user = username.value;
    let regex = /^09/;

    if (regex.test(user)) {
        if (user.length != 10) {
            e.preventDefault();
            errorText.innerHTML = 'mobile number start with 09 must be 10 numbers.';
            errorText.style.display = "block";
        }
    }
    else if (!(user.length >= 8 && user.length <= 14))  {
        e.preventDefault();
        errorText.innerHTML = 'username length must be between 8 and 14.';
        errorText.style.display = "block";
    }
})