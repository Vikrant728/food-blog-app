import React, { useState } from "react";
import axios from "axios";

export default function InputForm({ setIsOpen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const endpoint = isSignup ? "signup" : "login";

    try {
      const res = await axios.post(
        `http://localhost:5000/api/users/${endpoint}`,
        { email, password }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      setIsOpen(false); // close modal
    } catch (err) {
      setError(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <form className="form" onSubmit={handleOnSubmit}>
      <div className="form-control">
        <label>Email</label>
        <input
          type="email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="form-control">
        <label>Password</label>
        <input
          type="password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      {error && <p className="error">{error}</p>}

      <button type="submit" className="login-btn">
  {isSignup ? "Sign Up" : "Login"}
</button>

<br />
<br />

<p
  className="switch-auth"
  onClick={() => setIsSignup((prev) => !prev)}
>
  {isSignup ? "Already have an account?" : "Create new account"}
</p>

    </form>
  );
}
