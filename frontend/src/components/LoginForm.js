import axios from "axios";
import { useState } from "react";

const bcrypt = require("bcrypt");

const LoginForm = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  function submitLoginForm(event) {
    event.preventDefault();

    const saltRounds = 10;

    axios.get(`http://localhost:3001/students/${username}`)
    .then((result) => {
      bcrypt.compare(password, saltRounds, (err, result) => {
        // If result is true, the password matches the hashed version.
        if (result) {
          // login succesfull
        }
        else {
          // login unsuccesfull
        }
      })
    })
    .error((error) => {
      console.log(error);
    })
  }

  <form className="login-form" onSubmit={submitLoginForm}>
    <label htmlFor="username-input">Username</label>
    <input id="username-input" name="username" value={username} onChange={({ target }) => {setUsername(target.value)}}></input>

    <label htmlFor="password-input">Password</label>
    <input id="password-input" name="password" value={password} onChange={({ target }) => {setPassword(target.value)}}></input>
  </form>;
};

export default LoginForm;
