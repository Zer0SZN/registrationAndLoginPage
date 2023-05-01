const firstName = document.forms['form']['firstName'];
const lastName = document.forms['form']['lastName'];
const email = document.forms['form']['email'];
const password = document.forms['form']['passwd'];
const confirmPassword = document.forms['form']['confirmPasswd'];

const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

function validation() {
    if (firstName.value == "" || firstName.value.length < 3) {
        firstName.style.border = "1px solid red";
        firstNameError.textContent = "First name is required and must be at least 3 characters";
        firstName.focus();
        return false;
    }
    if (isNaN(firstName.value) == false) {
        firstNameError.textContent = "First name cannot be a number or special character";
        firstName.focus();
        return false;
    }
    if (lastName.value == "" || lastName.value.length < 3) {
        lastName.style.border = "1px solid red";
        lastNameError.textContent = "Last name is required and must be at least 3 characters";
        lastName.focus();
        return false;
    }
    if (isNaN(lastName.value) == false) {
        lastNameError.textContent = "Last name cannot be a number or special character";
        lastName.focus();
        return false;
    }
    if (email.value == "") {
        email.style.border = "1px solid red";
        emailError.textContent = "Email is required";
        email.focus();
        return false;
    }
    if (password.value == "") {
        password.style.border = "1px solid red";
        passwordError.textContent = "Password is required";
        password.focus();
        return false;
    }
    if (password.value.length < 8 || password.value.length > 12 ) {
        passwordError.textContent = "Password must be at least 8 characters and at most 12 characters";
        password.focus();
        return false;
    }
    if (confirmPassword.value == "") {
        confirmPassword.style.border = "1px solid red";
        confirmPasswordError.textContent = "Confirm password is required";
        confirmPassword.focus();
        return false;
    }
    if (password.value != confirmPassword.value) {
        confirmPassword.style.border = "1px solid red";
        confirmPasswordError.textContent = "Password does not match";
        confirmPassword.focus();
        return false;
    }
    return true;
}