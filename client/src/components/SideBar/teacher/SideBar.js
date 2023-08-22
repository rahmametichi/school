import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import "./SideBar.css";

const SideBar = ({ toggle, teacher }) => {
    return (
        // <div class={toggle ? "sidebar-menu" : "sidebar-menu close"}>
        //     <div className="sidebar-user-panel">
        //         <div className="user-panel">
        //             <img
        //                 src={teacher.avatar}
        //                 className="user-img-circle"
        //                 alt="User_Image"
        //                 width="75px"
        //                 height="75px"
        //             />
        //             <div className="user-panel-info">
        //                 <p>{`${teacher.firstName} ${teacher.lastName}`}</p>
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
        //                 <span class="icon">
        //                     <i class="fa fa-desktop"></i>
        //                 </span>
        //                 <span class="item">Dashboard</span>
        //             </NavLink>
        //         </li>
        //         <li>
        //             <NavLink className="nav-link" to="/teacher/ExamsDate">
        //                 <span class="icon">
        //                     <i class="fa fa-calendar-week"></i>
        //                 </span>
        //                 <span class="item">Date Of Exams</span>
        //             </NavLink>
        //         </li>

        //         <li>
        //             <NavLink className="nav-link" to="/teacher/students">
        //                 <span class="icon">
        //                     <i class="fa fa-user-friends"></i>
        //                 </span>
        //                 <span class="item">Students</span>
        //             </NavLink>
        //         </li>
        //         <li>
        //             <NavLink className="nav-link" to="/teacher/absencesHistory">
        //                 <span class="icon">
        //                     <i class="fa fa-history"></i>{" "}
        //                 </span>
        //                 <span class="item">Absences History</span>
        //             </NavLink>
        //         </li>
        //         <li>
        //             <NavLink className="nav-link" to="/teacher/score">
        //                 <span class="icon">
        //                     <i class="far fa-sticky-note"></i>
        //                 </span>
        //                 <span class="item">Score</span>
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
                                        src={teacher && teacher.avatar}
                                        class="img-circle user-img-circle"
                                        alt="User Image"
                                    />
                                </div>
                                <div class="pull-left info">
                                    <p>
                                        {" "}
                                        {`${teacher && teacher.firstName} ${
                                            teacher && teacher.lastName
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
                                to="/teacher/ExamsDate"
                                class="nav-link nav-toggle"
                            >
                                <i class="material-icons">event</i>
                                <span class="title">Exam</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link nav-toggle">
                                {" "}
                                <i class="material-icons">local_library</i>
                                <span class="title">Courses</span>{" "}
                                <span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li class="nav-item">
                                    <Link
                                        to="/teacher/addCourse"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">Add Courses</span>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link
                                        to="/teacher/myCourses"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">Courses</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <Link
                                to="/teacher/students"
                                class="nav-link nav-toggle"
                            >
                                <i class="material-icons">group</i>
                                <span class="title">Attendance</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link
                                to="/teacher/absencesHistory"
                                class="nav-link nav-toggle"
                            >
                                <i class="material-icons">history</i>
                                <span class="title">Attendance History</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link
                                to="/teacher/score"
                                class="nav-link nav-toggle"
                            >
                                <i class="material-icons">edit</i>
                                <span class="title">score</span>
                            </Link>
                        </li>

                        {/* <li class="nav-item">
                            <a href="#" class="nav-link nav-toggle">
                                {" "}
                                <i class="material-icons">school</i>
                                <span class="title">Courses</span>{" "}
                                <span class="arrow"></span>
                                <span class="label label-rouded label-menu label-success">
                                    new
                                </span>
                            </a>
                            <ul class="sub-menu">
                                <li class="nav-item">
                                    <a
                                        href="all_courses.html"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">All Courses</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="add_course.html" class="nav-link ">
                                        {" "}
                                        <span class="title">Add Course</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="add_course_bootstrap.html"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">
                                            Add Course Bootstrap
                                        </span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="edit_course.html"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">Edit Course</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="course_details.html"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">About Course</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        
                        <li class="nav-item">
                            <a href="#" class="nav-link nav-toggle">
                                {" "}
                                <i class="material-icons">business</i>
                                <span class="title">Departments</span>{" "}
                                <span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li class="nav-item">
                                    <a
                                        href="all_department.html"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">
                                            All Departments
                                        </span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="add_department.html"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">
                                            Add Department
                                        </span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="add_department_bootstrap.html"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">
                                            Add Department Bootstrap
                                        </span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="edit_department.html"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">
                                            Edit Department
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </li> */}

                        {/* <li class="nav-item">
                            <a href="#" class="nav-link nav-toggle">
                                {" "}
                                <i class="material-icons">
                                    airline_seat_individual_suite
                                </i>
                                <span class="title">Holiday</span>{" "}
                                <span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li class="nav-item">
                                    <a
                                        href="all_holidays.html"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">All Holiday</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="add_holiday.html"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">Add Holiday</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="add_holiday_bootstrap.html"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">
                                            Add Holiday Bootstrap
                                        </span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="edit_holiday.html"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">Edit Holiday</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link nav-toggle">
                                <i class="material-icons">email</i>
                                <span class="title">Email</span>
                                <span class="arrow"></span>
                                <span class="label label-rouded label-menu label-danger">
                                    new
                                </span>
                            </a>
                            <ul class="sub-menu">
                                <li class="nav-item">
                                    <a
                                        href="email_inbox.html"
                                        class="nav-link "
                                    >
                                        <span class="title">Inbox</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="email_view.html" class="nav-link ">
                                        <span class="title">View Mail</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="email_compose.html"
                                        class="nav-link "
                                    >
                                        <span class="title">Compose Mail</span>
                                    </a>
                                </li>
                            </ul>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
