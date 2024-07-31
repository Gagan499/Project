function popState() {
    let state = prompt("Enter the state");
    console.log(`You entered: ${state}`);
    if (state === 'Punjab' || state === 'Haryana' || state === 'Chandigarh') {
        User();
    }
    else {
        alert("Acess Deined");
    }
}

function User() {
    let username = prompt("Enter the Username :");

    // if (username) { 
    // } else {
    //     alert("Enter username");
    //     return;
    // }

    if (username === 'Punjab' || username === 'Haryana' || username === 'Chandigarh') {
        let pass = prompt("Enter the password : ");
        console.log(`Username entered : ${username}`);
        if (pass === 'Punjab') {
            window.location.href = 'https://maps.app.goo.gl/kLc4nBPLYDbdXvoE9';
            console.log(`correct Username and Password entered : ${username} , ${pass}`);
        }
        else if(pass === 'Haryana'){
            console.log(`correct Username and Password entered : ${username} , ${pass}`);
            window.location.href = 'https://maps.app.goo.gl/eFMGLo8VYKkj8UVa6';

        }
        else if(pass === 'Chandigarh'){
            console.log(`correct Username and Password entered : ${username} , ${pass}`);
            window.location.href = 'https://maps.app.goo.gl/ViE9yMwVJYBvfEge9';
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
