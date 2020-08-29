import React, { useState } from "react";
import { auth } from "../../firebase";
import "./styles/style.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email);
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
          <button type="submit">SIGN IN</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
