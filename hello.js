function validate(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const msgBox = document.getElementById('message');

    let message = '' {
        message = 'Please enter an email.';
        msgBox.style.color = 'red';
    } else if (pass === '') {
        message = 'Password must be at least 8 characters.';
        msgBox.style.color = 'red';
    } else if (age === '') {
        message = 'Age must be between 10 and 100.';
        msgBox.style.color = 'red';
    }

    else {
        message = 'Login successful!';
        msgBox.style.color = 'green';
    }

    msgBox.innerText = message;
}
}