import { React, useState } from "react";
import "./Login.css";
import axios from "axios";
import { useHistory, NavLink } from "react-router-dom";
import { url } from "../../utils/index";
const Login = () => {
  const history = useHistory();
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const Login = () => {
    axios
      .post(`${url}/login`, user)
      .then((res) => {
        console.log(res);
        localStorage.setItem("JWT", res.data.data);
        history.push("/dashboard");
        history.go(0);
      })
      .catch((err) => alert("Invalid Email or Password", err));
  };
  return (
    <div className="background-login">
      <div class="container-login">
        <div class="screen">
          <div class="screen__content">
            <div class="login">
              <div class="login__field">
                <i class="login__icon fa fa-user"></i>
                <input
                  type="email"
                  name="email"
                  class="login__input"
                  placeholder="Email"
                  onChange={handleChange}
                />
              </div>
              <div class="login__field">
                <i class="login__icon fa fa-lock"></i>
                <input
                  type="password"
                  name="password"
                  class="login__input"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>
              <button class="button login__submit" onClick={Login}>
                <span class="button__text">Log In Now</span>
                <i class="button__icon fa fa-chevron-right"></i>
              </button>
            </div>
            {/* <div class="create-account">
                            <NavLink to="/register">
                                <span>Create Account</span>
                            </NavLink>
                        </div> */}
          </div>
          <div class="screen__background">
            <span class="screen__background__shape screen__background__shape4"></span>
            <span class="screen__background__shape screen__background__shape3"></span>
            <span class="screen__background__shape screen__background__shape2"></span>
            <span class="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
