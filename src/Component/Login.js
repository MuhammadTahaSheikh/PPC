import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="main_formlogin">
      <div className="container login_cont">
        <div className="main_login">
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <label className="label_form" htmlFor="username">
                Username:
              </label>
              <input
                className="input_form"
                type="text"
                id="username"
                name="username"
              />
            </div>
            <div className="form-group">
              <label className="label_form" htmlFor="password">
                Password:
              </label>
              <input
                className="input_form"
                type="password"
                id="password"
                name="password"
              />
            </div>
            <button className="btn_login" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
