const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");


function onLoginSubmit() {
  const username = loginInput.value;
  if (username === "") {
    alert("please write your name");
  } else if (username.length>15) {
    alert("your name is too long");
  }
}


```