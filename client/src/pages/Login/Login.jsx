import "./login.css";
import { loginCall } from "../../apiCalls";
import { useRef, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/register");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
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
                placeholder="Email"
                type="email"
                required
                className="loginInput"
                ref={email}
              />
              <input
                placeholder="Password"
                type="password"
                required
                minLength={6}
                className="loginInput"
                ref={password}
              />
              <button className="loginButton">
                {isFetching ? (
                  <CircularProgress
                    sx={{
                      color: "white",
                      fontSize: "15px",
                    }}
                  />
                ) : (
                  "Log In"
                )}
              </button>
              <span className="loginForgot">Forgot Password?</span>
              <button
                className="loginRegisterButton"
                type="submit"
                disabled={isFetching}
                onClick={handleClick}
              >
                {isFetching ? (
                  <CircularProgress
                    sx={{
                      color: "white",
                      fontSize: "15px",
                    }}
                  />
                ) : (
                  "Create a new account"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
