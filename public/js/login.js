const loginFormHandler = async (event) => {
    event.preventDefault();
    //Collect values from login
    const username = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    //If email and password true, send a post req to specified endpoint
    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/dashboard/');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);