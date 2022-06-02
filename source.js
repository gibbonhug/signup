'use strict'; 
// check passwords are the same, if not add class that has red border

const pass = document.getElementById('pass');
const pass2 = document.getElementById('pass2');

pass.addEventListener('input', () => (checkValues()));
pass2.addEventListener('input', () => (checkValues()));

function checkValues() {
    let passText = pass.value;
    let pass2Text = pass2.value;
    // if either are empty, the user is still probably typing the first pw, so don't show an error yet
    if (passText !== '' && pass2Text !== '' ) {
        if (passText !== pass2Text) {
            pass.classList.add('invalidPass');
            pass2.classList.add('invalidPass');
        } else {
            pass.classList.remove('invalidPass');
            pass2.classList.remove('invalidPass');
        }
    }
}