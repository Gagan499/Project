function popState() {
    let state = prompt("Enter the state");
    console.log(`You entered: ${state}`);
    if (state === 'Punjab' || state === 'Haryana' || state === 'Chandigarh') {
        let userCredentials = User();
        all(state, userCredentials.username, userCredentials.pass);
    }
    else {
        alert("Acess Deined");
    }
}

function User() {
    let username = prompt("Enter the Username :");
    if (username === 'Punjab' || username === 'Haryana' || username === 'Chandigarh') {
        let pass = prompt("Enter the password : ");
        console.log(`Username entered : ${username}`);
        if (pass === 'Punjab' || pass === 'Haryana' || pass === 'Chandigarh') {
            console.log(`correct Username and Password entered : ${username} , ${pass}`);
            return { username, pass };
        }
        else {
            alert(`Incoorect password enterd : ${pass}`)
            console.log(`Incorrect Password entered : ${pass}`);
        }
    }
    else {
        alert(`Incorrect Username Entered  ${username}`)
        console.log(`Incorrect Username entered : ${username}`);
    }
}

function all(state, username, pass) {
    if (state === 'Punjab' || username === 'Punjab' || pass === 'Punjab') {
        window.location.href = 'https://maps.app.goo.gl/kLc4nBPLYDbdXvoE9';
    }
    else if (state === 'Haryana') {
        window.location.href = 'https://maps.app.goo.gl/eFMGLo8VYKkj8UVa6';
    }
    else if (state === 'Chandigarh') {
        window.location.href = 'https://maps.app.goo.gl/ViE9yMwVJYBvfEge9';
    }
}
