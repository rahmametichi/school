import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
// import "./Student.css";

// components
import SideBar from "../../components/SideBar/student/SideBar";
import Navigation from "../../components/Navigation/Navigation";
import Dashboard from "../../components/MainContents/Student/Dashboard";
import Exam from "../../components/MainContents/Student/Exam";
import Absence from "../../components/MainContents/Student/absence";
import Note from "../../components/MainContents/Student/Note";
import Footer from "../../components/Footer/Footer";
import Profile from "../../components/MainContents/Student/Profile";
import ReportCardS from "../../components/MainContents/Student/ReportCardS";
import CourseDetails from "../../components/MainContents/Student/CourseDetails";
import Courses from "../../components/MainContents/Student/Courses";
const Student = ({ toggle, sideBarOpen, student }) => {
    return (
        <div>
            <Router>
                <Navigation sideBarOpen={sideBarOpen} student={student} />
                <SideBar toggle={toggle} student={student} />
                <div>
                    <Switch>
                        <div style={{ minHeight: "700px" }}>
                            <Route path="/dashboard">
                                <Dashboard toggle={toggle} />
                            </Route>
                            <Route path="/student/exam">
                                <Exam toggle={toggle} />
                            </Route>
                            <Route path="/student/absence">
                                <Absence toggle={toggle} />
                            </Route>
                            <Route path="/student/note">
                                <Note toggle={toggle} />
                            </Route>
                            <Route path="/student/profile">
                                <Profile toggle={toggle} />
                            </Route>
                            <Route path="/student/reportCard">
                                <ReportCardS student={student} />
                            </Route>
                            <Route path="/course/:id">
                                <CourseDetails />
                            </Route>
                            <Route path="/student/course">
                                <Courses />
                            </Route>
                        </div>
                    </Switch>
                </div>

                <Footer toggle={toggle} />
            </Router>
        </div>
    );
};

export default Student;
