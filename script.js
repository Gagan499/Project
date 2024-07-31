function popState() {
    let state = prompt("Enter the state");
    if (state) {
        console.log(`You entered: ${state}`);
    } else {
        console.log("No state entered.");
    }
    if (state === 'Punjab' || state === 'Haryana' || state === 'Chandigarh') {
        User(state);
        all(state);
    }
    else {
        alert("Acess Deined");
    }
}

function User() {
    let username = prompt("Enter the Username :");
    let pass = prompt("Enter the password : ");
    // console.log(`You entereed username : ${username}`);
    // console.log(`You entereed password : ${pass}`);
    if (username === 'Punjab' || username === 'Haryana' || username === 'Chandigarh') {
        if (pass === 'Punjab' || pass === 'Haryana' || pass === 'Chandigarh') {
            console.log(`correct Username and Password entered : ${username} , ${pass}`);
        }
        else {
            console.log(`Username entered : ${username}`);
            console.log(`Incorrect Password entered : ${pass}`);
        }
    }
    else {
        console.log(`Incorrect Username entered : ${username}`);
    }
}

function all(state) {
    if (state === 'Punjab') {
        window.location.href = 'https://maps.app.goo.gl/kLc4nBPLYDbdXvoE9';
    }
    else if (state === 'Haryana') {
        window.location.href = 'https://maps.app.goo.gl/eFMGLo8VYKkj8UVa6';
    }
    else if (state === 'Chandigarh') {
        window.location.href = 'https://maps.app.goo.gl/ViE9yMwVJYBvfEge9';
    }
}