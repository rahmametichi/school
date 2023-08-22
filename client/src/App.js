// component
import Student from "./interfaces/student/Student";
import Admin from "./interfaces/admin/Admin";
import Teacher from "./interfaces/teacher/Teacher";
import Register from "./interfaces/register/Register";
import Login from "./interfaces/login/Login";
import Home from "./interfaces/home/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import jwt from "jwt-decode";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import "./App.css";
import { url } from "./utils/index";

import Personel from "./interfaces/personel/Personel";
function App() {
  const token = localStorage.getItem("JWT");
  const getrole = () => {
    if (token !== null) {
      const decoded_token = jwt(token);
      // console.log(decoded_token);
      return decoded_token.role;
    }
  };
  // get id of student or teacher from the local storage

  const isLoggedIn = () => {
    if (localStorage.getItem("JWT")) {
      return true;
    }
    return false;
  };
  const role = getrole();
  const [toggle, setToggle] = useState(true);
  const sideBarOpen = () => {
    setToggle(!toggle);
  };
  const getID = () => {
    if (token !== null) {
      const decoded_token = jwt(token);
      return decoded_token.id;
    }
  };
  const id = getID();
  // hook forteacher profile
  const [teacherProfile, setTeacherProfile] = useState();
  const [studentProfile, setStudentProfile] = useState();
  const [personelProfile, setPersonelProfile] = useState();
  // axios function to get the teacher profile
  const getTeacherProfile = async () => {
    try {
      const Teacher = await axios.get(`${url}/teacher/profile/${id}`);
      setTeacherProfile(Teacher.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getStudentProfile = async () => {
    try {
      const StudentProfile = await axios.get(`${url}/student/profile/${id}`);
      setStudentProfile(StudentProfile.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getPersonelProfile = async () => {
    try {
      const PersonelProfile = await axios.get(`${url}/student/profile/${id}`);
      setPersonelProfile(PersonelProfile.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (id !== undefined) {
      getTeacherProfile();
      getStudentProfile();
      getPersonelProfile();
    }
  }, []);

  return (
    <Router>
      <div>
        <Route path="/">
          {isLoggedIn() && role === 0 ? (
            <>
              <Route to="/dashboard">
                <Admin toggle={toggle} sideBarOpen={sideBarOpen} />
              </Route>
            </>
          ) : isLoggedIn() && role === 1 ? (
            <>
              {/* <Redirect to="/dashboard" /> */}

              <Route to="/dashboard">
                <Teacher
                  toggle={toggle}
                  sideBarOpen={sideBarOpen}
                  teacher={teacherProfile}
                />
              </Route>
            </>
          ) : isLoggedIn() && role === 2 ? (
            <>
              {/* <Redirect to="/dashboard" /> */}

              <Route to="/dashboard">
                <Student
                  toggle={toggle}
                  sideBarOpen={sideBarOpen}
                  student={studentProfile}
                />
              </Route>
            </>
          ) : isLoggedIn() && role === 3 ? (
            <>
              {/* <Redirect to="/dashboard" /> */}

              <Route to="/dashboard">
                <Personel
                  toggle={toggle}
                  sideBarOpen={sideBarOpen}
                  personel={personelProfile}
                />
              </Route>
            </>
          ) : (
            <>
              {<Route path="/dashboard"></Route> ? (
                <Route>
                  {/* <Redirect to="/" /> */}
                  <>
                    <Switch>
                      <Route path="/register">
                        <Register />
                      </Route>
                      <Route path="/login">
                        <Login />
                      </Route>
                      <Route exact path="/">
                        <Home />
                      </Route>
                    </Switch>
                  </>
                </Route>
              ) : null}
            </>
          )}
        </Route>
      </div>
    </Router>
  );
}

export default App;
