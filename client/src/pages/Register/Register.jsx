import "./register.css";
import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords dont match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div>
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">Socialmente</h3>
            <span className="loginDesc">
              Connect with friends around the world with Socialmente
            </span>
          </div>
          <div className="loginRight">
            <form className="loginBox" onSubmit={handleSubmit}>
              <input
                placeholder="Username"
                ref={username}
                className="loginInput"
                required
              />
              <input
                placeholder="Email"
                ref={email}
                className="loginInput"
                required
                type="email"
              />
              <input
                placeholder="Password"
                ref={password}
                className="loginInput"
                required
                type="password"
                minLength={6}
              />
              <input
                placeholder="Password again"
                ref={passwordAgain}
                className="loginInput"
                required
                type="password"
              />
              <button className="loginButton" type="submit">
                Sign Up
              </button>
              <span className="loginForgot">Forgot Password?</span>
              <button onClick={handleClick} className="loginRegisterButton">
                Log into account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
