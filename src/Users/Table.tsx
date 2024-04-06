import React, { useState, useEffect } from "react";
import * as client from "./client";
import { User } from "./client";
import { BsTrash3Fill, BsPlusCircleFill } from "react-icons/bs";

export default function UserTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  const deleteUser = async (user: User) => {
    try {
      await client.deleteUser(user);
      setUsers(users.filter((u) => u._id !== user._id));
    } catch (err) {
      console.log(err);
    }
  };


  const [user, setUser] = useState<User>({
    _id: "", username: "", password: "", firstName: "",
    lastName: "", role: "USER" });

  const createUser = async () => {
    setError("");
    try {
      const newUser = await client.createUser(user);
      setUsers([newUser, ...users]);
    } catch (err : any) {
      setError(err.response.data.message);
    }
  };

  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };

  useEffect(() => { fetchUsers(); }, []);

  return (
    <div>
      <h1>User Table</h1>
      {error && <div>{error}</div>}
      <table className="table">
        <thead>
            <tr> 
                <th>Username and Password</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Role</th>    
                <th>Button</th>
            </tr>
            <tr>
              <td>
                <input className="signinBox" placeholder="Enter New Username" value={user.username} onChange={(e) =>
                    setUser({ ...user, username: e.target.value })}/>
                <input className="signinBox" placeholder="Enter New Password" value={user.password} onChange={(e) =>
                    setUser({ ...user, password: e.target.value })}/>
              </td>
              <td>
                <input className="signinBox" placeholder="Enter First Name" value={user.firstName} onChange={(e) =>
                    setUser({ ...user, firstName: e.target.value })}/>
              </td>
              <td>
                <input className="signinBox" placeholder="Enter Last Name" value={user.lastName} onChange={(e) =>
                  setUser({ ...user, lastName: e.target.value })}/>
              </td>
            <td>
              <select value={user.role} onChange={(e) =>
                setUser({ ...user, role: e.target.value })}>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </td>
            <td>
                <button className="btn btn-success">
              <BsPlusCircleFill className="colorUpdate" onClick={createUser}/>
              </button>
            </td>
            <th>&nbsp;</th>
          </tr>

        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.role}</td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteUser(user)}>
                  <BsTrash3Fill className="colorFill" />
                </button>
              </td>
            </tr>))}
        </tbody>
      </table>
    </div>
  );
}
