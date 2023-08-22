import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { React } from "react";

// import "./admin.css";
// components
import SideBar from "../../components/SideBar/admin/SideBar";
import Navigation from "../../components/Navigation/Navigation";
import Dashboard from "../../components/MainContents/Admin/Dashboard";
import Exam from "../../components/MainContents/Admin/Exam";
// import StudentProfile from "../../components/MailContents/Admin/StudentProfile";
import StudentProfile from "../../components/MainContents/Admin/StudentProfile";
import Teacher from "../../components/MainContents/Admin/Teacher";
import Student from "../../components/MainContents/Admin/Student";
import Absence from "../../components/MainContents/Admin/Absence";
import Classes from "../../components/MainContents/Admin/Classes";
import Footer from "../../components/Footer/Footer";
import AddProfessor from "../../components/MainContents/Admin/addProfessor";
import AllTeachers from "../../components/MainContents/Admin/AllTeachers";
import AddStudent from "../../components/MainContents/Admin/AddStudent";
import AllPersonel from "../../components/MainContents/Admin/AllPersonel";
import AddPersonel from "../../components/MainContents/Admin/AddPersonel";
import AddFees from "../../components/MainContents/Admin/AddFees";
import GetPayment from "../../components/MainContents/Admin/GetPayment";
const Admin = ({ toggle, sideBarOpen }) => {
    return (
        <div>
            <Navigation sideBarOpen={sideBarOpen} />
            <Router>
                <SideBar toggle={toggle} />
                <div>
                    <Switch>
                        <div style={{ minHeight: "1250px" }}>
                            <Route path="/dashboard" component={Dashboard} />
                            <Route path="/admin/exam">
                                <Exam toggle={toggle} />
                            </Route>

                            <Route path="/admin/teachers">
                                <Teacher toggle={toggle} />
                                {/* <AllTeachers /> */}
                            </Route>
                            <Route path="/admin/addTeacher">
                                <AddProfessor />
                            </Route>
                            <Route path="/admin/addStudent">
                                <AddStudent />
                            </Route>
                            <Route path="/admin/students">
                                <Student />
                            </Route>
                            <Route path="/admin/absences">
                                <Absence />
                            </Route>
                            <Route path="/admin/student/profile/:id">
                                <StudentProfile />
                            </Route>
                            <Route path="/admin/classes">
                                <Classes toggle={toggle} />
                            </Route>
                            <Route path="/admin/personel">
                                <AllPersonel />
                            </Route>
                            <Route path="/admin/addPersonel">
                                <AddPersonel />
                            </Route>
                            <Route path="/admin/addFees">
                                <AddFees />
                            </Route>
                            <Route path="/admin/payment">
                                <GetPayment />
                            </Route>
                        </div>
                    </Switch>
                </div>
                <Footer toggle={toggle} />
            </Router>
        </div>
    );
};

export default Admin;
