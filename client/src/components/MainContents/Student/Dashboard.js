import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt from "jwt-decode";
import "react-calendar/dist/Calendar.css";

import Calendar from "react-calendar";
import { Line } from "react-chartjs-2";
import Loader from "react-loader-spinner";
import Notification from "../Personel/Notification";
import "./Dashboard.css";
import { url } from "../../../utils/index";

const Dashboard = () => {
  // data for charts : line
  const data = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
      },
    ],
  };
  // options for charts : line
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  // hook for calendar
  const [value, onChange] = useState(new Date());
  // get th student id from the localStorage
  const TOKEN = localStorage.getItem("JWT");
  const id = jwt(TOKEN).id;

  // hook for appearing data
  const [appear, setAppear] = useState(true);

  setTimeout(() => {
    setAppear(false);
  }, 5000);

  // hooks for all students Absences
  const [allAbsences, setAllabsences] = useState({
    StudentABS: [],
  });

  // useEffect with axios function for getting student Situation
  // *** Start ***

  const GetStudentAbsences = async () => {
    try {
      const Absences = await axios.get(`${url}/student/absence/${id}`);
      setAllabsences({ StudentABS: Absences.data.data });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    GetStudentAbsences();
  }, []);

  // **End***

  // filtring the the situation by "Absente"
  const total = allAbsences.StudentABS.filter((StudentABS) => {
    return StudentABS.situation === "Absente";
  });
  const totalAbs = total.length;

  // hooks for Profile INformation
  const [profileInfo, setProfilInfo] = useState({ PROFILE: [] });

  // useEffect with axios function for getting student Class Room
  // *** Start ***
  const StudenProfile = async () => {
    try {
      const profile = await axios.get(`${url}/student/profile/${id}`);
      setProfilInfo({ PROFILE: profile.data.data });
    } catch (err) {
      console.log(err);
    }
  };
  const [studentsclass, setStudentsClass] = useState([]);
  const getAllClass = async () => {
    const Classes = await axios.get(`${url}/administration/GetAllClass`);
    setStudentsClass(Classes.data.data);
  };
  useEffect(() => {
    StudenProfile();
    getAllClass();
  }, []);

  const CLASSROOM = profileInfo.PROFILE.classRoom;
  const classImage = studentsclass.find((el) => el.name == CLASSROOM);
  // ************
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    axios
      .get(`${url}/getNotification`)
      .then((res) => setNotifications(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(classImage);
  return (
    <>
      {appear ? (
        <div className="dash__loader" style={{ minHeight: "600px" }}>
          <Loader type="ThreeDots" color="#00BFFF" height={150} width={150} />
        </div>
      ) : (
        <div className="dachborard-container">
          <div className="dachborard-header">
            <div className="header-left">
              <div className="header-card">
                <div className="card-content">
                  <i class="material-icons">person</i>
                  <div>
                    <label>Total Absences</label>
                    <span>{totalAbs}</span>
                  </div>
                </div>
                <div className="card-content">
                  <i class="material-icons">school</i>
                  <div>
                    <label>school Name</label>
                    <span>Class : {CLASSROOM} </span>
                  </div>
                </div>
              </div>
              <div
                className="timetable"
                style={{
                  height: 391,
                }}
              >
                <img
                  src={`uploads/${classImage && classImage.img}`}
                  alt="timeTable"
                  className="time-img"
                />
              </div>
            </div>
            <div className="header-right ">
              <div
                class="row"
                style={{
                  transform: "translateX(8px)",
                  marginBottom: "81px",
                }}
              >
                <div class="col-md-12 col-sm-12">
                  <div class="card card-box">
                    <div class="card-head">
                      <header>Notification</header>
                    </div>
                    <div class="card-body" id="bar-parent">
                      <div id="form_sample_1" class="form-horizontal">
                        <div
                          class="form-body"
                          style={{
                            overflowY: "auto",
                            maxHeight: "600px",
                          }}
                        >
                          {notifications &&
                            notifications.map((notification) => {
                              return (
                                <>
                                  <div
                                    style={{
                                      display: "flex",

                                      alignItems: "center",
                                    }}
                                  >
                                    <i class="fa fa-circle user-online"></i>
                                    <h6
                                      style={{
                                        marginRight: "20px",
                                        marginLeft: "20px",
                                      }}
                                    >
                                      {notification.title}
                                    </h6>
                                    <span
                                      style={{
                                        fontSize: "12px",
                                      }}
                                    >
                                      {notification.date.substr(0, 10)}
                                    </span>
                                  </div>
                                  <p>{notification.description}</p>
                                </>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
