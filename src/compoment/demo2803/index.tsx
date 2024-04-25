import React, { useState } from "react";

const LoginComponent = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    if (userName === "admin" && password === "admin") {
      localStorage.setItem('userName', userName);
      window.location.reload();
    } else {
      alert("Login failed!");
    }
  };

  const handleKeyPress = (e: { key: string }) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "50px", border: "1px solid #ccc", borderRadius: "5px", backgroundColor: "#f9f9f9" }}>
      <h1 style={{ textAlign: "center" }}>Login to the System</h1>
      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="username" style={{ display: "block", marginBottom: "5px" }}>User name:</label>
        <input
          type="text"
          id="username"
          value={userName}
          onChange={(e) => setUsername(e.currentTarget.value)}
          style={{ width: "100%", padding: "8px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "5px" }}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          onKeyPress={handleKeyPress}
          style={{ width: "100%", padding: "8px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "5px" }}
        />
      </div>
      <button onClick={handleClick} style={{ width: "105%", padding: "10px", fontSize: "16px", border: "none", borderRadius: "5px", backgroundColor: "#007bff", color: "#fff", cursor: "pointer"  }}>Login</button>
    </div>
  );
};

export default LoginComponent;