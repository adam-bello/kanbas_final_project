import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";
import "./index.css";

export default function Profile() {
  const [profile, setProfile] = useState({ username: "", password: "", 
    firstName: "", lastName: "", dob: "", email: "", role: "USER" });

  const navigate = useNavigate();

  const save = async () => {
    await client.updateUser(profile);
  };

  const fetchProfile = async () => {
    const account = await client.profile();
    setProfile(account);
  };

  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/Account/Signin");
  };

  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <div>
      <div className="d-flex">
        <h1>Profile</h1>
      </div>
      {profile && (
        <div>
          <div>
            <input className="signinBox" placeholder="Username" value={profile.username} onChange={(e) =>
              setProfile({ ...profile, username: e.target.value })}/>
          </div>
          <div className="padBit">
            <input className="signinBox" placeholder="Password" value={profile.password} onChange={(e) =>
              setProfile({ ...profile, password: e.target.value })}/>
          </div>
          <div className="padBit">
            <input className="signinBox" placeholder="First Name" value={profile.firstName} onChange={(e) =>
              setProfile({ ...profile, firstName: e.target.value })}/>
          </div>
          <div className="padBit">
            <input className="signinBox" placeholder="Last Name" value={profile.lastName} onChange={(e) =>
              setProfile({ ...profile, lastName: e.target.value })}/>
          </div>
          <div className="padBit">
            <input className="signinBox" placeholder="Data of Birth" value={profile.dob} type="date" onChange={(e) =>
              setProfile({ ...profile, dob: e.target.value })}
              style={{ width: '185px'}}/>
          </div>
          <div className="padBit">
            <input className="signinBox" placeholder="Email" value={profile.email} onChange={(e) =>
              setProfile({ ...profile, email: e.target.value })}/>
          </div>
          <div className="padBit">
            <select onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                    style={{ width: '185px'}}>
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="FACULTY">Faculty</option>
              <option value="STUDENT">Student</option>
            </select>
          </div>
          <div className="d-flex"> 
            <div className="padBit padRight">
              <button className="btn btn-primary" onClick={save}>
                Save
              </button>
            </div>
            <div className="padBit">
              <button className="btn btn-primary" onClick={signout}>
                Signout
              </button>
            </div>
          </div>
          <div className="padBit">
            <Link to="/Kanbas/Account/Admin/Users" className="btn btn-warning" style={{ width: '185px'}}>
              Users
            </Link>
          </div>

        </div>
      )}
    </div>
  );
}
