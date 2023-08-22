import { React, useState } from "react";
import "./Register.css";
import { useHistory, NavLink } from "react-router-dom";
import axios from "axios";
import { url } from "../../utils/index";

const Register = () => {
  const history = useHistory();
  const [student, setStudent] = useState({
    firstName: "",
    classRoom: "",
    lastName: "",
    age: "",
    adress: "",
    parentsPhone: "",
    email: "",
    password: "",
    code: "",
    role: 2,
  });
  const [teacher, setTeacher] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    email: "",
    password: "",
    code: "",
    role: 1,
  });
  //******************* */

  const signinButton = () => {
    const contaiiner = document.getElementById("contaiiner");
    contaiiner.classList.remove("right-panel-active");
  };
  const signupButton = () => {
    const contaiiner = document.getElementById("contaiiner");
    contaiiner.classList.add("right-panel-active");
  };
  const handleRegisterStudent = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  const handleSubmitRegisterStudent = (e) => {
    if (student.code === "School2021") {
      if (student.age < 12) {
        alert("You Are Not Be Able To Register ");
      } else if (student.adress === "") {
        alert("There's Empty Field !! ");
      } else if (student.parentsPhone.length !== 8) {
        alert("Please Put a correct Phone Number");
      } else if (student.password.length < 8) {
        alert("Password must be at least 8 characters  ");
      } else if (student.firstName.length < 3) {
        alert("First Name And Last Name must be at least 3 characters");
      } else if (student.lastName.length < 3) {
        alert("Last Name And Last Name must be at least 3 characters");
      } else if (!validateEmail(student.email)) {
        alert("Wrong Email .. ");
      } else {
        axios
          .post(`${url}/student/register`, student)
          .then((res) => {
            history.push("/login");
          })
          .catch((err) => {
            console.log("Error in Create Student!", err);
          });
      }
    } else {
      alert(
        "Sorry Your Activation Invalid Or Expired Check Your School Please ! "
      );
    }
  };
  const handleRegisterTeacher = (e) => {
    setTeacher({ ...teacher, [e.target.name]: e.target.value });
  };
  const handleSubmitRegisterTeacher = (e) => {
    if (teacher.code === "SchoolTeacher2021") {
      if (teacher.subject === "") {
        alert("You can't Register with Empty Field");
      } else if (teacher.password.length < 8) {
        alert("Password must be at least 8 characters  ");
      } else if (teacher.firstName.length < 3) {
        alert("First Name And Last Name must be at least 3 characters");
      } else if (teacher.lastName.length < 3) {
        alert("Last Name And Last Name must be at least 3 characters");
      } else if (!validateEmail(teacher.email)) {
        alert("Wrong Email .. ");
      } else {
        axios
          .post(`${url}/teacher/register`, teacher)
          .then((res) => {
            console.log("Status : ", res.status);
            console.log("Data : ", res.data);
            history.push("/login");
          })
          .catch((err) => {
            console.log("Error in Create Teacher! ", err);
          });
      }
    } else
      alert("Sorry Your Activation Code Invalid Check Your School Please ! ");
  };
  return (
    <div className="lg">
      <div class="contaiiner" id="contaiiner">
        <div class="form-contaiiner sign-up-contaiiner">
          <div className="form-teacher">
            <h1 className="sign-up-header">Sign Up As Teacher</h1>
            <input
              className="input"
              type="text"
              name="firstName"
              id="exampleFirstName"
              placeholder="First Name"
              onChange={handleRegisterTeacher}
            />
            <input
              className="input"
              type="text"
              name="lastName"
              id="exampleLastName"
              placeholder="Last Name"
              onChange={handleRegisterTeacher}
            />
            <input
              className="input"
              type="text"
              name="subject"
              id="exampleLastName"
              placeholder="Subject"
              onChange={handleRegisterTeacher}
            />
            <input
              className="input"
              type="email"
              name="email"
              id="exampleInputEmail"
              placeholder="Email Address"
              onChange={handleRegisterTeacher}
            />
            <input
              className="input"
              type="password"
              name="password"
              id="exampleInputPassword"
              placeholder="Password"
              onChange={handleRegisterTeacher}
            />
            <input
              className="input"
              type="text"
              name="code"
              id="exampleInputcode"
              title="You Get This Code from your School/College"
              placeholder="Code Activation"
              onChange={handleRegisterTeacher}
            />
            <button
              className="sign-up-button"
              onClick={handleSubmitRegisterTeacher}
            >
              Sign Up
            </button>
            <button className="to-login">
              <NavLink to="/login">
                <span>Already Have Account !</span>
              </NavLink>
            </button>
          </div>
        </div>
        <div class="form-contaiiner sign-in-contaiiner">
          <div className="form-student">
            <h1 className="sign-up-header">Sign Up As Student</h1>
            <div className="fullname">
              <input
                className="input"
                type="text"
                name="firstName"
                id="exampleFirstName"
                placeholder="First Name"
                onChange={handleRegisterStudent}
              />
              <input
                className="input"
                type="text"
                name="lastName"
                id="exampleLastName"
                placeholder="Last Name"
                onChange={handleRegisterStudent}
              />
            </div>
            <input
              className="input"
              type="text"
              name="adress"
              id="exampleInputAdress"
              placeholder="Student Adress"
              onChange={handleRegisterStudent}
            />
            <div className="fullname">
              <input
                className="input"
                type="number"
                name="parentsPhone"
                id="exampleInputphone"
                placeholder="Parents Phone"
                onChange={handleRegisterStudent}
              />
              <input
                className="input"
                type="number"
                name="age"
                id="exampleInputage"
                placeholder="Age"
                onChange={handleRegisterStudent}
              />
            </div>

            <input
              className="input"
              type="email"
              name="email"
              id="exampleInputEmail"
              placeholder="Email Address"
              onChange={handleRegisterStudent}
            />
            <input
              className="input"
              type="password"
              name="password"
              id="exampleInputPassword"
              placeholder="Password"
              onChange={handleRegisterStudent}
            />
            <input
              className="input"
              type="text"
              name="code"
              id="exampleInputcode"
              title="You Get This Code from your School/College"
              placeholder="Code Activation"
              onChange={handleRegisterStudent}
            />
            <button
              className="sign-up-button"
              onClick={handleSubmitRegisterStudent}
            >
              Sign Up
            </button>
            <button className="to-login">
              <NavLink to="/login">
                <span>Already Have Account !</span>{" "}
              </NavLink>
            </button>
          </div>
        </div>
        <div class="overlay-contaiiner">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1 style={{ fontWeight: "bold" }}>Welcome Student !</h1>
              <p className="sign-up-text-p">
                To Sign Up Here please enter your personal info
              </p>
              <button className="sign-up-button ghost" onClick={signinButton}>
                Sign Up As Student
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1 style={{ fontWeight: "bold" }}>Hello, Teacher!</h1>
              <p className="sign-up-text-p">
                Enter your personal details and start with us
              </p>
              <button className="sign-up-button ghost" onClick={signupButton}>
                Sign Up As Teacher
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
