import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin" && pwd === "admin@123") {
      setError("");
      window.location.href = "/dashboard";
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "radial-gradient(circle at 20% 40%, #ff6600 4%, transparent 10%), radial-gradient(circle at 80% 70%, #ff4e50 4%, transparent 12%), #111",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        style={{
          background: "#1e1e1e",
          padding: "40px 30px",
          borderRadius: "16px",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.5)",
          width: "360px",
          color: "#fff",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <img
            src="/Technect.png"
            alt="Logo"
            style={{ height: 50, marginBottom: 10 }}
          />
          <h2 style={{ fontWeight: 600, margin: 0 }}>Sign in</h2>
          <h4 style={{ fontWeight: 600 }}>Good to see you again</h4>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 15 }}>
            <label style={{ fontSize: 14, marginBottom: 5, display: "block" }}>
              Your email
            </label>
            <div style={{ position: "relative" }}>
              <FaUser
                style={{
                  position: "absolute",
                  top: 12,
                  left: 10,
                  color: "#888",
                }}
              />
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. elon@tesla.com"
                style={{
                  width: "100%",
                  padding: "10px 10px 10px 36px",
                  borderRadius: "8px",
                  border: "1px solid #333",
                  background: "#121212",
                  color: "#fff",
                  outline: "none",
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: 15 }}>
            <label style={{ fontSize: 14, marginBottom: 5, display: "block" }}>
              Your password
            </label>
            <div style={{ position: "relative" }}>
              <FaLock
                style={{
                  position: "absolute",
                  top: 12,
                  left: 10,
                  color: "#888",
                }}
              />
              <input
                type="password"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                placeholder="e.g. Ilovemangools123"
                style={{
                  width: "100%",
                  padding: "10px 10px 10px 36px",
                  borderRadius: "8px",
                  border: "1px solid #333",
                  background: "#121212",
                  color: "#fff",
                  outline: "none",
                }}
              />
            </div>
          </div>

          {error && (
            <div
              style={{
                color: "#ff6b6b",
                marginBottom: 12,
                textAlign: "center",
              }}
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "linear-gradient(90deg, #00C9A7 0%, #007CF0 100%)",
              border: "none",
              borderRadius: "8px",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: 16,
              transition: "opacity 0.3s",
            }}
          >
            Sign in
          </button>

          <div
            style={{
              marginTop: 16,
              display: "flex",
              justifyContent: "space-between",
              fontSize: 13,
            }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Login;
