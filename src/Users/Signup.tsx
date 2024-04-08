import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
export default function Signup() {
  const [error, setError] = useState("");
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    navigate("/Kanbas/Account/Signin");
  };
  const signup = async () => {
    try {
      await client.signup(user);
      navigate("/Kanbas/Account/Profile");
    } catch (err : any) {
      setError(err.response.data.message);
    }
  };
  return (
    <div>
      <h1>Signup</h1>
      {error && <div>{error}</div>}
      <div className="padBit">
        <input className="signinBox" placeholder="Enter New Username" value={user.username} onChange={(e) => setUser({
            ...user, username: e.target.value })} />
      </div>

      <div className="padBit">
        <input className="signinBox" placeholder="Enter New Password" value={user.password} onChange={(e) => setUser({
            ...user, password: e.target.value })} />
      </div>

      <div className="d-flex padBit">
        <div className="padRight">
            <button type="button" className="btn btn-danger" onClick={signup}> Signup </button>
        </div>
        <div>
            <button type="button" className="btn btn-primary" onClick={signin}> Signin </button>
        </div>
      </div>
      
    </div>
  );
}
