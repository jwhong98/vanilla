const password = document.querySelector("#password")
const confirmPassword = document.querySelector('#confirmPass')
const errorMessage = document.querySelector('.error-message')

const submitHandler = () => {
    if(password.value === confirmPassword.value) {
        password.setCustomValidity("")
        confirmPassword.setCustomValidity("")
        errorMessage.style.visibility = 'hidden'
    } else {
        password.setCustomValidity("Invalid")
        confirmPassword.setCustomValidity("Invalid")
        errorMessage.style.visibility = 'visible'
    }
}