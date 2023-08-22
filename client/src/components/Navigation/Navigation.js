// import "./Navigation.css";
import { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useHistory, NavLink } from "react-router-dom";
import jwt from "jwt-decode";
const Navigation = ({ sideBarOpen, teacher, student, personel }) => {
    const token = localStorage.getItem("JWT");
    const decoded_token = jwt(token);
    const role = decoded_token.role;

    const history = useHistory();
    const logOut = (e) => {
        e.preventDefault();
        localStorage.clear();
        history.push("/");
        history.go(0);
    };
    var profile = {
        avatar: process.env.PUBLIC_URL + "/assets/admin.png",
        firstName: "Admin",
    };
    if (role === 1) {
        profile = teacher;
    } else if (role === 2) {
        profile = student;
    } else if (role === 3) {
        profile = personel;
    }

    return (
        // <div id="topheader" className="top-header">
        //     <div className="top-header-logo">
        //         <i className="fa fa-graduation-cap fa-rotate-45"></i>
        //         <span> Smart </span>
        //     </div>

        //     <div className="top-header-Content">
        //         <div className="search-bars">
        //             <i className="fa fa-bars" onClick={sideBarOpen}></i>
        //             {/* <div className="input-search">
        //                 <input type="text" placeholder="Search..." />
        //                 <i className="fa fa-search"></i>
        //             </div> */}
        //         </div>
        //         <div className="right-content">
        //             {/* <i className="fa fa-expand-arrows-alt"></i> */}
        //             <i className="far fa-bell"></i>
        //             <div className="right-content-profile">
        //                 <img
        //                     src={
        //                         role === 0
        //                             ? `${profile.avatar}`
        //                             : profile.avatar
        //                     }
        //                     width="29px"
        //                     height="29px"
        //                     alt="profile"
        //                 />
        //                 <Navbar align="end" expand="lg">
        //                     <Container fluid>
        //                         <Navbar.Toggle aria-controls="navbar-dark-example" />
        //                         <Navbar.Collapse id="navbar-dark-example">
        //                             <Nav>
        //                                 <NavDropdown
        //                                     id="nav-dropdown-dark-example"
        //                                     title={
        //                                         role === 0
        //                                             ? `${profile.firstName}`
        //                                             : `${profile.firstName} ${profile.lastName}`
        //                                     }
        //                                 >
        //                                     <NavDropdown.Item href="# ">
        //                                         {role === 1 ? (
        //                                             <NavLink to="/teacher/profile">
        //                                                 <i className="far fa-user"></i>
        //                                                 Profile
        //                                             </NavLink>
        //                                         ) : role === 2 ? (
        //                                             <NavLink to="/student/profile">
        //                                                 <i className="far fa-user"></i>
        //                                                 Profile
        //                                             </NavLink>
        //                                         ) : null}
        //                                     </NavDropdown.Item>
        //                                     <NavDropdown.Item href="# ">
        //                                         <i className="fa fa-cog"></i>
        //                                         Settings
        //                                     </NavDropdown.Item>
        //                                     <NavDropdown.Item href="# ">
        //                                         <i className="fa fa-map-signs"></i>
        //                                         Help
        //                                     </NavDropdown.Item>

        //                                     <NavDropdown.Item href="# ">
        //                                         <button onClick={logOut}>
        //                                             <i className="fa fa-sign-out-alt"></i>
        //                                             Logout
        //                                         </button>
        //                                     </NavDropdown.Item>
        //                                 </NavDropdown>
        //                             </Nav>
        //                         </Navbar.Collapse>
        //                     </Container>
        //                 </Navbar>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div class="page-wrapper">
            <div class="page-header navbar navbar-fixed-top">
                <div class="page-header-inner ">
                    <div class="page-logo">
                        <a href="index.html">
                            <span class="logo-icon material-icons fa-rotate-45">
                                school
                            </span>
                            <span class="logo-default">Smart</span>{" "}
                        </a>
                    </div>
                    <ul class="nav navbar-nav navbar-left in">
                        <li>
                            <a href="#" class="menu-toggler sidebar-toggler">
                                <i class="icon-menu"></i>
                            </a>
                        </li>
                    </ul>
                    <form class="search-form-opened">
                        <div class="input-group">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Search..."
                                name="query"
                            />
                            <span class="input-group-btn">
                                <a href="javascript:;" class="btn submit">
                                    <i class="icon-magnifier"></i>
                                </a>
                            </span>
                        </div>
                    </form>
                    <a
                        class="menu-toggler responsive-toggler"
                        data-bs-toggle="collapse"
                        data-bs-target=".navbar-collapse"
                    >
                        <span></span>
                    </a>

                    <div class="top-menu">
                        <ul class="nav navbar-nav pull-right">
                            <li>
                                <a class="fullscreen-btn">
                                    <i class="fa fa-arrows-alt"></i>
                                </a>
                            </li>
                            <li class="dropdown language-switch">
                                <a
                                    class="dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    {" "}
                                    <img
                                        src="../assets/img/flags/gb.png"
                                        class="position-left"
                                        alt=""
                                    />{" "}
                                    English{" "}
                                    <span class="fa fa-angle-down"></span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a class="deutsch">
                                            <img
                                                src="../assets/img/flags/de.png"
                                                alt=""
                                            />{" "}
                                            Deutsch
                                        </a>
                                    </li>
                                    <li>
                                        <a class="ukrainian">
                                            <img
                                                src="../assets/img/flags/ua.png"
                                                alt=""
                                            />{" "}
                                            Українська
                                        </a>
                                    </li>
                                    <li>
                                        <a class="english">
                                            <img
                                                src="../assets/img/flags/gb.png"
                                                alt=""
                                            />{" "}
                                            English
                                        </a>
                                    </li>
                                    <li>
                                        <a class="espana">
                                            <img
                                                src="../assets/img/flags/es.png"
                                                alt=""
                                            />{" "}
                                            España
                                        </a>
                                    </li>
                                    <li>
                                        <a class="russian">
                                            <img
                                                src="../assets/img/flags/ru.png"
                                                alt=""
                                            />{" "}
                                            Русский
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            {/* <li
                                class="dropdown dropdown-extended dropdown-notification"
                                id="header_notification_bar"
                            >
                                <a
                                    class="dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    data-hover="dropdown"
                                    data-close-others="true"
                                >
                                    <i class="fa fa-bell-o"></i>
                                    <span class="badge headerBadgeColor1">
                                        {" "}
                                        6{" "}
                                    </span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="external">
                                        <h3>
                                            <span class="bold">
                                                Notifications
                                            </span>
                                        </h3>
                                        <span class="notification-label purple-bgcolor">
                                            New 6
                                        </span>
                                    </li>
                                    <li>
                                        <ul
                                            class="dropdown-menu-list small-slimscroll-style"
                                            data-handle-color="#637283"
                                        >
                                            <li>
                                                <a href="javascript:;">
                                                    <span class="time">
                                                        just now
                                                    </span>
                                                    <span class="details">
                                                        <span class="notification-icon circle deepPink-bgcolor">
                                                            <i class="fa fa-check"></i>
                                                        </span>
                                                        Congratulations!.{" "}
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span class="time">
                                                        3 mins
                                                    </span>
                                                    <span class="details">
                                                        <span class="notification-icon circle purple-bgcolor">
                                                            <i class="fa fa-user o"></i>
                                                        </span>
                                                        <b>John Micle </b>is now
                                                        following you.{" "}
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span class="time">
                                                        7 mins
                                                    </span>
                                                    <span class="details">
                                                        <span class="notification-icon circle blue-bgcolor">
                                                            <i class="fa fa-comments-o"></i>
                                                        </span>
                                                        <b>Sneha Jogi </b>sent
                                                        you a message.{" "}
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span class="time">
                                                        12 mins
                                                    </span>
                                                    <span class="details">
                                                        <span class="notification-icon circle pink">
                                                            <i class="fa fa-heart"></i>
                                                        </span>
                                                        <b>Ravi Patel </b>like
                                                        your photo.{" "}
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span class="time">
                                                        15 mins
                                                    </span>
                                                    <span class="details">
                                                        <span class="notification-icon circle yellow">
                                                            <i class="fa fa-warning"></i>
                                                        </span>{" "}
                                                        Warning!{" "}
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span class="time">
                                                        10 hrs
                                                    </span>
                                                    <span class="details">
                                                        <span class="notification-icon circle red">
                                                            <i class="fa fa-times"></i>
                                                        </span>{" "}
                                                        Application error.{" "}
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                        <div class="dropdown-menu-footer">
                                            <a href="javascript:void(0)">
                                                {" "}
                                                All notifications{" "}
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </li>

                            <li
                                class="dropdown dropdown-extended dropdown-inbox"
                                id="header_inbox_bar"
                            >
                                <a
                                    class="dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    data-hover="dropdown"
                                    data-close-others="true"
                                >
                                    <i class="fa fa-envelope-o"></i>
                                    <span class="badge headerBadgeColor2">
                                        {" "}
                                        2{" "}
                                    </span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="external">
                                        <h3>
                                            <span class="bold">Messages</span>
                                        </h3>
                                        <span class="notification-label cyan-bgcolor">
                                            New 2
                                        </span>
                                    </li>
                                    <li>
                                        <ul
                                            class="dropdown-menu-list small-slimscroll-style"
                                            data-handle-color="#637283"
                                        >
                                            <li>
                                                <a href="#">
                                                    <span class="photo">
                                                        <img
                                                            src="../assets/img/prof/prof2.jpg"
                                                            class="img-circle"
                                                            alt=""
                                                        />
                                                    </span>
                                                    <span class="subject">
                                                        <span class="from">
                                                            {" "}
                                                            Sarah Smith{" "}
                                                        </span>
                                                        <span class="time">
                                                            Just Now{" "}
                                                        </span>
                                                    </span>
                                                    <span class="message">
                                                        {" "}
                                                        Jatin I found you on
                                                        LinkedIn...{" "}
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span class="photo">
                                                        <img
                                                            src="../assets/img/prof/prof3.jpg"
                                                            class="img-circle"
                                                            alt=""
                                                        />
                                                    </span>
                                                    <span class="subject">
                                                        <span class="from">
                                                            {" "}
                                                            John Deo{" "}
                                                        </span>
                                                        <span class="time">
                                                            16 mins{" "}
                                                        </span>
                                                    </span>
                                                    <span class="message">
                                                        {" "}
                                                        Fwd: Important Notice
                                                        Regarding Your Domain
                                                        Name...{" "}
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span class="photo">
                                                        <img
                                                            src="../assets/img/prof/prof1.jpg"
                                                            class="img-circle"
                                                            alt=""
                                                        />
                                                    </span>
                                                    <span class="subject">
                                                        <span class="from">
                                                            {" "}
                                                            Rajesh{" "}
                                                        </span>
                                                        <span class="time">
                                                            2 hrs{" "}
                                                        </span>
                                                    </span>
                                                    <span class="message">
                                                        {" "}
                                                        pls take a print of
                                                        attachments.{" "}
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span class="photo">
                                                        <img
                                                            src="../assets/img/prof/prof8.jpg"
                                                            class="img-circle"
                                                            alt=""
                                                        />
                                                    </span>
                                                    <span class="subject">
                                                        <span class="from">
                                                            {" "}
                                                            Lina Smith{" "}
                                                        </span>
                                                        <span class="time">
                                                            40 mins{" "}
                                                        </span>
                                                    </span>
                                                    <span class="message">
                                                        {" "}
                                                        Apply for Ortho Surgeon{" "}
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span class="photo">
                                                        <img
                                                            src="../assets/img/prof/prof5.jpg"
                                                            class="img-circle"
                                                            alt=""
                                                        />
                                                    </span>
                                                    <span class="subject">
                                                        <span class="from">
                                                            {" "}
                                                            Jacob Ryan{" "}
                                                        </span>
                                                        <span class="time">
                                                            46 mins{" "}
                                                        </span>
                                                    </span>
                                                    <span class="message">
                                                        {" "}
                                                        Request for leave
                                                        application.{" "}
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                        <div class="dropdown-menu-footer">
                                            <a href="#"> All Messages </a>
                                        </div>
                                    </li>
                                </ul>
                            </li> */}

                            <li class="dropdown dropdown-user">
                                <a
                                    class="dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    data-hover="dropdown"
                                    data-close-others="true"
                                >
                                    <img
                                        alt=""
                                        class="img-circle "
                                        src={profile && profile.avatar}
                                    />
                                    <span class="username username-hide-on-mobile">
                                        {" "}
                                        {profile && profile.firstName}{" "}
                                    </span>
                                    <i class="fa fa-angle-down"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-default">
                                    <li>
                                        {/* <a href="user_profile.html">
                                            <i class="icon-user"></i> Profile{" "}
                                        </a> */}
                                        {role === 1 ? (
                                            <NavLink to="/teacher/profile">
                                                <i class="icon-user"></i>{" "}
                                                Profile{" "}
                                            </NavLink>
                                        ) : role === 2 ? (
                                            <NavLink to="/student/profile">
                                                <i class="icon-user"></i>{" "}
                                                Profile{" "}
                                            </NavLink>
                                        ) : null}
                                    </li>
                                    {/* <li>
                                        <a href="#">
                                            <i class="icon-settings"></i>{" "}
                                            Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="icon-directions"></i> Help
                                        </a>
                                    </li>
                                    <li class="divider"> </li>
                                    <li>
                                        <a href="lock_screen.html">
                                            <i class="icon-lock"></i> Lock
                                        </a>
                                    </li> */}
                                    <li>
                                        <a href="#" onClick={logOut}>
                                            <i class="icon-logout"></i> Log Out{" "}
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown dropdown-quick-sidebar-toggler">
                                <a
                                    id="headerSettingButton"
                                    class="mdl-button mdl-js-button mdl-button--icon pull-right"
                                    data-upgraded=",MaterialButton"
                                >
                                    <i class="material-icons">more_vert</i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
