// write code to toggle forms
// write code to gather values from form fields

// here is where you make your http request to authenticate

// after signing in you'll have to store the JWT inside localStorage

// also write code to redirect after successful signin

// example http request (please use fetch :) )
function registerUser(userCreds) {
  return fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      mode: 'cors',
      body: JSON.stringify(userCreds)
    }).then((response) => {
      if (response.status !== 201) {
        return response.json().then((data) => {
          console.log('Looks like there was a problem. Status Code: ' +
          response.status, 'Data:', data);
          throw new Error("Couldn't register.");
        });
      }
      return response.json();
    }).then((data) => {
      handleRegistration(data);
    }).catch(function(err) {
      console.log(`registerUser() error: ${err}`);
      return err;
    });
}

function signInUser(userStuff) {
  return fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      mode: 'cors',
      body: JSON.stringify(userStuff)
    }).then((response) => {
      if (response.status !== 201) {
        return response.json().then((data) => {
          console.log('Looks like there was a problem. Status Code: ' +
          response.status, 'Data:', data);
          throw new Error("Couldn't register.");
        });
      }
      return response.json();
    }).then((data) => {
      handleSignIn(data);
    }).catch(function(err) {
      console.log(`registerUser() error: ${err}`);
      return err;
    });
}

function handleSignIn(data) {
  // here is where you write code to store JWT
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
  // localStorage.setItem('authToken', data.authToken);
}

function handleRegistration() {
  // do some stuff
}

function toggleForm() {
  $('.signUpInForm').toggleClass('hidden');
}

function gatherSignInData() {
  // do the same thing as the funciton below
}

function gatherSignUpData() {
  const registeredUser = {
    firstName:  $('#firstName').val(),
    lastName:  $('#lastName').val(),
    username:  $('#username').val(),
    userPassword: $('#user-password').val()
  }
  registerUser(registeredUser)
  console.log('the things from sign up: ', registeredUser);
}

function registerEventListeners() {
  $('#sign-in').click( function(event) {
    event.preventDefault();
    gatherSignInData();
    console.log('sign in listener is active');
  });
  $('#sign-up').click( function(event) {
    event.preventDefault();
    gatherSignUpData();
    console.log('sign in listener is active');
  });
  $('.signUpLink').click( function() {
    event.preventDefault();
    toggleForm();
    console.log('sign up link activated');
  });
  $('.signInLink').click( function() {
    event.preventDefault();
    toggleForm();
    console.log('sign in link activated');
  });
}

$(registerEventListeners);
