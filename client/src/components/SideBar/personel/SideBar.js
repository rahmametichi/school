// import "./SideBar.css";
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        // <div class={toggle ? "sidebar-admin" : "sidebar-admin close"}>
        //     <div className="sidebar-user-panel">
        //         <div className="user-panel">
        //             <img
        //                 src={process.env.PUBLIC_URL + "/assets/admin.png"}
        //                 className="user-img-circle"
        //                 alt="User_Image"
        //                 width="75px"
        //                 height="75px"
        //             />
        //             <div className="user-panel-info">
        //                 <p>Administrateur</p>
        //                 <div>
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
        //             <NavLink className="nav-link" to="/admin/exam">
        //                 <span class="icon">
        //                     <i class="fa fa-calendar-week"></i>
        //                 </span>
        //                 <span class="item">Date Of Exams</span>
        //             </NavLink>
        //         </li>
        //         <li>
        //             <NavLink className="nav-link" to="/admin/teachers">
        //                 <span class="icon">
        //                     <i class="fa fa-chalkboard-teacher"></i>
        //                 </span>
        //                 <span class="item">Teachers</span>
        //             </NavLink>
        //         </li>
        //         <li>
        //             <NavLink className="nav-link" to="/admin/students">
        //                 <span class="icon">
        //                     <i class="fa fa-user-friends"></i>
        //                 </span>
        //                 <span class="item">Students</span>
        //             </NavLink>
        //         </li>
        //         <li>
        //             <NavLink className="nav-link" to="/admin/absences">
        //                 <span class="icon">
        //                     <i class="fa fa-user-check"></i>
        //                 </span>
        //                 <span class="item">Absence</span>
        //             </NavLink>
        //         </li>
        //         <li>
        //             <NavLink className="nav-link" to="/admin/classes">
        //                 <span class="icon">
        //                     <i class="fa fa-chart-line"></i>
        //                 </span>
        //                 <span class="item">Classes</span>
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
                                        src={
                                            process.env.PUBLIC_URL +
                                            "/assets/admin.png"
                                        }
                                        class="img-circle user-img-circle"
                                        alt="User Image"
                                    />
                                </div>
                                <div class="pull-left info">
                                    <p> Personel</p>
                                    <a href="#">
                                        <i class="fa fa-circle user-online"></i>
                                        <span class="txtOnline">Online</span>
                                    </a>
                                </div>
                            </div>
                        </li>
                        {/* <li class="nav-item ">
                            <Link to="/dashboard" class="nav-link nav-toggle">
                                <i class="material-icons">dashboard</i>
                                <span class="title">Dashboard</span>
                                <span class="selected"></span>
                            </Link>
                        </li> */}
                        <li class="nav-item">
                            <Link to="/dashboard" class="nav-link nav-toggle">
                                <i class="material-icons">event</i>
                                <span class="title">Exam Management</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link
                                to="/personel/reportCard"
                                class="nav-link nav-toggle"
                            >
                                <i class="material-icons">assessment</i>
                                <span class="title">Report Card</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link nav-toggle">
                                {" "}
                                <i class="material-icons">school</i>
                                <span class="title">Classes</span>{" "}
                                <span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li class="nav-item">
                                    <Link to="/admin/classes" class="nav-link ">
                                        {" "}
                                        <span class="title">Classes</span>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/editClass" class="nav-link ">
                                        {" "}
                                        <span class="title">Edit Class </span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link nav-toggle">
                                {" "}
                                <i class="material-icons">monetization_on</i>
                                <span class="title">Fees</span>{" "}
                                <span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li class="nav-item">
                                    <Link to="/admin/payment" class="nav-link ">
                                        {" "}
                                        <span class="title">
                                            Fees Collection
                                        </span>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/admin/addFees" class="nav-link ">
                                        {" "}
                                        <span class="title">Add Fees </span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link nav-toggle">
                                {" "}
                                <i class="material-icons">notifications</i>
                                <span class="title">Notification</span>{" "}
                                <span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li class="nav-item">
                                    <Link
                                        to="/personel/notification"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">Notification</span>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link
                                        to="/personel/addNotification"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">
                                            Add Notification{" "}
                                        </span>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link
                                        to="/personel/notificationSettings"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">
                                            Edit Notification{" "}
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
