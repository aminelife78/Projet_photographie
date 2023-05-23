import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({ username: "", password: "" });
  const addLogin = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    console.log(login)
    e.preventDefault();

    axios
      .post("http://localhost:8080/api/v1/auth/login", login)

      .then((response) => {
        localStorage.setItem("token", response.data.token);
        navigate("/admin/dashboard");
      })
      .catch((error) => console.log(error));
    setLogin({ username: "", password: "" });
  };
  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={onSubmit}>
        <label>
          <p>Username</p>
          <input
            onChange={addLogin}
            name="username"
            value={login.username}
            type="text"
          />
        </label>
        <label>
          <p>Password</p>
          <input
            onChange={addLogin}
            name="password"
            value={login.password}
            type="password"
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
