import React, { useState } from "react";
import "./styles/style.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";

function Register() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [error, setError] = useState("");

  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => history.push("/"))
      .catch((e) => setError(e.message));
  };

  return (
    <div className="createAccount">
      <div className="registerWrapper">
        <h1>REGISTER</h1>
        <div className="error">{error}</div>
        <form>
          <input
            onChange={(event) => setFirst(event.target.value)}
            value={first}
            placeholder="First Name"
          ></input>
          <input
            onChange={(event) => setLast(event.target.value)}
            value={last}
            placeholder="Last Name"
          ></input>
          <input
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            type="email"
            placeholder="Email"
          ></input>
          <input
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            type="password"
            placeholder="Password"
          ></input>
          <button onClick={register} type="submit">
            REGISTER ACCOUNT
          </button>
        </form>
        <Link to="/Login" style={{ textDecoration: "none", color: "black" }}>
          <p>Back to Login</p>
        </Link>
      </div>
    </div>
  );
}

export default Register;
