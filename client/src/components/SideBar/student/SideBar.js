import React from "react";
import { Link } from "react-router-dom";
import jwt from "jwt-decode";
import { useState, useEffect } from "react";
import axios from "axios";
// import "./SideBar.css";

const SideBar = ({ toggle, student }) => {
    return (
        // <div className={toggle ? "student-sidebar" : "student-sidebar close"}>
        //     <div className="sidebar-user-panel">
        //         <div className="user-panel">
        //             <img
        //                 src={student.avatar}
        //                 className="user-img-circle"
        //                 alt="User_Image"
        //                 width="75px"
        //                 height="75px"
        //             />
        //             <div className="user-panel-info">
        //                 <p> {`${student.firstName} ${student.lastName}`} </p>
        //                 <div className="online-user">
        //                     <i className="fa fa-circle user-online"></i>
        //                     <span className="txtOnline">Online</span>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <ul>
        //         <li>
        //             <NavLink className="nav-link " to="/dashboard">
        //                 <span className="icon">
        //                     <i className="fas fa-desktop"></i>
        //                 </span>
        //                 <span className="item">Dashboard</span>
        //             </NavLink>
        //         </li>
        //         <li>
        //             <NavLink className="nav-link" to="/student/exam">
        //                 <span className="icon">
        //                     <i className="fas fa-calendar-week"></i>
        //                 </span>
        //                 <span className="item">Date Of Exams</span>
        //             </NavLink>
        //         </li>
        //         <li>
        //             <NavLink className="nav-link" to="/student/absence">
        //                 <span className="icon">
        //                     <i className="fas fa-user-check"></i>
        //                 </span>
        //                 <span className="item">Absence</span>
        //             </NavLink>
        //         </li>
        //         <li>
        //             <NavLink className="nav-link" to="/student/note">
        //                 <span className="icon">
        //                     <i className="far fa-clipboard"></i>
        //                 </span>
        //                 <span className="item">Exam Scores</span>
        //             </NavLink>
        //         </li>
        //     </ul>
        // </div>
        <div class="sidebar-container">
            <div class="sidemenu-container navbar-collapse collapse fixed-menu">
                <div id="remove-scroll" class="left-sidemenu">
                    <ul
                        class="sidemenu  page-header-fixed slimscroll-style"
                        data-keep-expanded="false"
                        data-auto-scroll="true"
                        data-slide-speed="200"
                        style={{ paddingTop: "20px" }}
                    >
                        <li class="sidebar-toggler-wrapper hide">
                            <div class="sidebar-toggler">
                                <span></span>
                            </div>
                        </li>
                        <li class="sidebar-user-panel">
                            <div class="user-panel">
                                <div class="pull-left image">
                                    <img
                                        src={student && student.avatar}
                                        class="img-circle user-img-circle"
                                        alt="User Image"
                                    />
                                </div>
                                <div class="pull-left info">
                                    <p>
                                        {" "}
                                        {`${student && student.firstName} ${
                                            student && student.lastName
                                        }`}
                                    </p>
                                    <a href="#">
                                        <i class="fa fa-circle user-online"></i>
                                        <span class="txtOnline">Online</span>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item ">
                            <Link to="/dashboard" class="nav-link nav-toggle">
                                <i class="material-icons">dashboard</i>
                                <span class="title">Dashboard</span>
                                <span class="selected"></span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link
                                to="/student/exam"
                                class="nav-link nav-toggle"
                            >
                                <i class="material-icons">event</i>
                                <span class="title">Exam</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link
                                to="/student/absence"
                                class="nav-link nav-toggle"
                            >
                                <i class="material-icons">person</i>
                                <span class="title">Attendance</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link
                                to="/student/note"
                                class="nav-link nav-toggle"
                            >
                                <i class="material-icons">edit</i>
                                <span class="title">score</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link
                                to="/student/course"
                                class="nav-link nav-toggle"
                            >
                                {" "}
                                <i class="material-icons">local_library</i>
                                <span class="title">Courses</span>{" "}
                                {/* <span class="arrow"></span> */}
                            </Link>
                        </li>
                        <li class="nav-item ">
                            <Link
                                to="/student/reportCard"
                                class="nav-link nav-toggle"
                            >
                                <i class="material-icons">assessment</i>
                                <span class="title">Report Card</span>
                                <span class="selected"></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
