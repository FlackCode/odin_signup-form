let password = document.getElementById('password');
let cPassword = document.getElementById('cPassword');
let submit = document.getElementById('submitBtn');
let nomatch = document.getElementById(`nomatch`);
let inputs = document.querySelectorAll(`input`);
let form = document.querySelector('form');
submit.addEventListener('click', () => {
    if(password.value !== cPassword.value) {
        nomatch.textContent = `*passwords do not match`;
        document.documentElement.style.setProperty('--color', 'red');
        document.documentElement.style.setProperty('--color2', 'red');
    }
    else{
        nomatch.textContent = '';
        document.documentElement.style.setProperty('--color', '#62784F');
        document.documentElement.style.setProperty('--color2', '#E5E7EB');
        form.submit();
    }
});