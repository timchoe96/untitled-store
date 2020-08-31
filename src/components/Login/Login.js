import React, { useState } from "react";
import { auth } from "../../firebase";
import "./styles/style.css";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => history.push("/"))
      .catch((e) => setError(e.message));
  };
  return (
    <div className="login">
      <div className="register">
        <div className="header">NEW CUSTOMER</div>
        <p>
          By creating an account with this store, you will be able to save your
          cart items for later purchase.
        </p>
        <Link to="/Register">
          <button style={{ cursor: "pointer" }}>CREATE ACCOUNT</button>
        </Link>
      </div>
      <div className="signIn">
        <div className="header">REGISTERED </div>
        <div className="error">{error}</div>
        <form>
          <input
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            type="email"
            value={email}
          ></input>
          <input
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            value={password}
            type="password"
          ></input>
          <button onClick={login} type="submit">
            SIGN IN
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
