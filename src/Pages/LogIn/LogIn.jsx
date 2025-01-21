import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LogIn.scss";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import axios from "axios";

const Login = ({ closeModal }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const signIn = useSignIn();
  const navigate = useNavigate();

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.get("http://localhost:3002/users", {
  //       params: {
  //         username,
  //         password,
  //       },
  //     });

      
  //     const users = response.data;
  //     if (users.length > 0) {
  //       const user = users[0];
  //       signIn({
  //         token: "fake-token",
  //         expiresIn: 3600,
  //         tokenType: "Bearer",
  //         authState: { user },
  //       });
  //       alert(`Logged in as ${user.role}`);
  //       navigate("/dashboard");
  //     } else {
  //       alert("Invalid email or password");
  //     }
  //   } catch (error) {
  //     console.error("Error logging in:", error);
  //   }
  // };
  const handleLogin = async () => {
    const response = await fetch('http://localhost:3002/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    

    if (response.ok) {
      signIn({
        token: data.token,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: { username: data.username }
      });
    } else {
      alert(data.message);
    }
  };
  return (
    <div className="login">
      <h2>Đăng nhập</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Tên đăng nhập:</label> &nbsp;
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </div>
        <div>
          <label>Mật khẩu:</label>
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">Đăng nhập</button>
        <button type="button" onClick={closeModal}>
          Đóng
        </button>
      </form>
    </div>
  );
};

export default Login;
