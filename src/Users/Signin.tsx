import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { User } from "./client";
import * as client from "./client";
import "./index.css";

export default function Signin() {
  const [credentials, setCredentials] = useState<User>({ _id: "",
    username: "", password: "", firstName: "", lastName: "", role: "USER"
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const signin = async () => {
    try {
      await client.signin(credentials);
      navigate("/Kanbas/Account/Profile");
    } catch (err : any) {
      if (err.response && err.response.status === 401) {
        setError("Login failed: Invalid username or password.");
      } 
    }
  };

  const signup = async () => {
    navigate("/Kanbas/Account/Signup");
  };

  return (
    <div>
      <h1>Signin</h1>
      {error && <div>{error}</div>}
      <div className="padBit">
        <input className="signinBox" placeholder="Username" value={credentials.username} onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })}/>
      </div>
      <div className="padBit">
          <input className="signinBox" placeholder="Password" value={credentials.password} onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })}/>
      </div>
      <div className="d-flex padBit">
        <div className="padRight">
          <button type="button" className="btn btn-primary" onClick={signin}> Signin </button>
        </div>
        <div>
          <button type="button" className="btn btn-danger" onClick={signup}> Signup </button>
        </div>
      </div>
    </div>
  );
}
