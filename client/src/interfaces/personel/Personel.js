import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideBar from "../../components/SideBar/personel/SideBar";
import Navigation from "../../components/Navigation/Navigation";
import AddFees from "../../components/MainContents/Admin/AddFees";
import GetPayment from "../../components/MainContents/Admin/GetPayment";
import Exam from "../../components/MainContents/Admin/Exam";
import Classes from "../../components/MainContents/Admin/Classes";
import Footer from "../../components/Footer/Footer";
import AddNotification from "../../components/MainContents/Personel/AddNotification";
import Notification from "../../components/MainContents/Personel/Notification";
import EditNotification from "../../components/MainContents/Personel/EditNotification";
import EditClass from "../../components/MainContents/Personel/EditClass";
import ReportCard from "../../components/MainContents/Personel/ReportCard";
const Personel = ({ personel }) => {
    return (
        <div>
            <Navigation personel={personel} />
            <Router>
                <SideBar />
                <div>
                    <Switch>
                        <div style={{ minHeight: "1250px" }}>
                            {/* <Route path="/dashboard" component={Dashboard} /> */}

                            <Route path="/dashboard">
                                <Exam />
                            </Route>

                            <Route path="/admin/classes">
                                <Classes />
                            </Route>

                            <Route path="/admin/addFees">
                                <AddFees />
                            </Route>
                            <Route path="/admin/payment">
                                <GetPayment />
                            </Route>
                            <Route path="/personel/addNotification">
                                <AddNotification />
                            </Route>
                            <Route path="/personel/notification">
                                <Notification />
                            </Route>
                            <Route path="/personel/notificationSettings">
                                <EditNotification />
                            </Route>
                            <Route path="/editClass">
                                <EditClass />
                            </Route>
                            <Route path="/personel/reportCard">
                                <ReportCard />
                            </Route>
                        </div>
                    </Switch>
                </div>
                <Footer />
            </Router>
        </div>
    );
};

export default Personel;
