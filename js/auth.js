// Email Login
function loginEmail() {
  const email = document.getElementById("email").value;

  const password = document.getElementById("password").value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Login Successful");

      window.location.href = "index.html";
    })
    .catch((error) => {
      alert(error.message);
    });
}

// Google Login
function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();

  auth.signInWithPopup(provider).then(() => {
    window.location.href = "index.html";
  });
}

function registerEmail() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Account Created Successfully");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert(error.message);
    });
}
