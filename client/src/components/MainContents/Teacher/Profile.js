import React from "react";
// import "./Profile.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import jwt from "jwt-decode";
import { url } from "../../../utils/index";

const Profile = () => {
  const token = localStorage.getItem("JWT");
  const decoded_token = jwt(token);
  const teacher_id = decoded_token.id;

  const [show, setShow] = useState(true);
  const handleShow = () => setShow(false);

  // eslint-disable-next-line
  const [teacherInfo, setTeacherInfo] = useState({});

  // Function Axios Get teacher information
  /*************************************/
  const getTeacherInfo = async () => {
    const Teacher = await axios.get(`${url}/teacher/profile/${teacher_id}`);
    setTeacherInfo(Teacher.data.data);
  };
  /*************************************/

  useEffect(() => {
    getTeacherInfo();
  }, []);
  const [newInfo, setNewInfo] = useState();
  const handleChange = (e) => {
    setTeacherInfo({ ...teacherInfo, [e.target.name]: e.target.value });
    setNewInfo({ ...newInfo, [e.target.name]: e.target.value });
  };
  //Function Axios to update teacher profile inforamtion
  /********************************/
  const updateProfile = () => {
    axios
      .put(`${url}/teacher/profileUpdate/${teacher_id}`, {
        ...newInfo,
      })
      .then((res) => {})
      .catch((err) => {
        console.log("error from update teacher profile", err);
      });
    setShow(true);
  };
  /********************************/
  return (
    <div>
      <div className="teacher-container emp-profile">
        <div className="header-teacher-profile">
          <header>Profile</header>
        </div>
        <div className="form-profile">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src={teacherInfo.avatar} alt="teacher_img" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              {show ? (
                <button onClick={handleShow} className="profile-edit-btn">
                  Edit Profile
                </button>
              ) : (
                <button onClick={updateProfile} className="profile-edit-btn">
                  Submit
                </button>
              )}
            </div>
          </div>

          {/* About Part  */}
          <div className="row">
            <div className="col-md-4 teacher-under-image">
              <h6>Teacher At Smart School </h6>
              <p className="proile-rating">
                Rate : <span> 5 / 5</span>
              </p>
            </div>
            <div className="col-md-6">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  {show ? (
                    <>
                      <div className="row">
                        <div className="col-md-6">
                          <label>First Name</label>
                        </div>
                        <div className="col-md-6">
                          <p>{teacherInfo.firstName}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Last Name</label>
                        </div>
                        <div className="col-md-6">
                          <p>{teacherInfo.lastName}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Subject</label>
                        </div>
                        <div className="col-md-6">
                          <p>{teacherInfo.subject}</p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <label>Email</label>
                        </div>
                        <div className="col-md-6">
                          <p>{teacherInfo.email}</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="row">
                        <div className="col-md-6">
                          <label>First Name</label>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            name="firstName"
                            placeholder={teacherInfo.firstName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Last Name</label>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            name="lastName"
                            placeholder={teacherInfo.lastName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Subject</label>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            name="subject"
                            placeholder={teacherInfo.subject}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <label>Email</label>
                        </div>
                        <div className="col-md-6">
                          <p>{teacherInfo.email}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
