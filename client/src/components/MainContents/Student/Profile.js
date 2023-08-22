import axios from "axios";
import React, { useState, useEffect } from "react";

import jwt from "jwt-decode";
import Loader from "react-loader-spinner";

import "./Profile.css";
import { url } from "../../../utils/index";

const Profile = ({ toggle }) => {
  // hooks for Profile INformation
  const [profileInfo, setProfilInfo] = useState({ PROFILE: [] });

  // hook for appearing data
  const [appear, setAppear] = useState(true);

  setTimeout(() => {
    setAppear(false);
  }, 5000);

  // get the student id from the locale storage
  const TOKEN = localStorage.getItem("JWT");
  const id = jwt(TOKEN).id;

  // useEffect with axios function for getting profile information
  // *** Start ***
  const StudenProfile = async () => {
    try {
      const StudentProfile = await axios.get(`${url}/student/profile/${id}`);
      setProfilInfo({ PROFILE: StudentProfile.data.data });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    StudenProfile();
  }, []);

  // ************
  // profile information
  const AVATAR = profileInfo.PROFILE.avatar;
  const Fname = profileInfo.PROFILE.firstName;
  const Lname = profileInfo.PROFILE.lastName;
  const CLASSROOM = profileInfo.PROFILE.classRoom;
  const AGE = profileInfo.PROFILE.age;
  const PARENTSphone = profileInfo.PROFILE.parentsPhone;
  const ADRESS = profileInfo.PROFILE.adress;
  const EMAIL = profileInfo.PROFILE.email;
  // *************

  const showAbout = () => {
    const home = document.getElementById("home-tab");
    const mark = document.getElementById("profile-tab");
    home.classList.add("active");
    mark.classList.remove("active");
  };
  return (
    <div>
      {appear ? (
        <div className="profile_s_loader">
          <Loader type="ThreeDots" color="#00BFFF" height={150} width={150} />
        </div>
      ) : profileInfo.length !== 0 ? (
        <div
          className={
            toggle ? "Student-container PROFILE" : "profile-class-closed"
          }
        >
          <div className="Student-profile">
            <div className="row">
              <div className="col-md-4">
                <div className="student-profile-img">
                  <img
                    src={AVATAR}
                    alt="student_profile_image"
                    className="img"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="student-profile-head">
                  <h5 className="profile-header-title">{`${Fname} ${Lname}`}</h5>
                  <h6 className="profile-type">Student At Smart School</h6>
                  <p className="student-proile-rating">
                    Rate :<span className="RATTING">4.5 / 5</span>
                  </p>
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
                        onClick={showAbout}
                      >
                        About
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* About Part  */}
            <div className="row">
              <div className="col-md-4">
                <div className="profile-work">
                  <span>STUDENT HOBBIES</span>
                  <br />
                  <p>FootBall</p>
                  <p>Swim</p>
                  <p>Outdoor activities</p>
                  <p>Playing an instrument</p>
                  <p>Team or individual sports</p>
                </div>
              </div>
              <div className="col-md-8">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>Student Class</label>
                      </div>
                      <div className="col-md-6">
                        <p>{CLASSROOM}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Full Name</label>
                      </div>
                      <div className="col-md-6">
                        <p>{`${Fname} ${Lname}`}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Age</label>
                      </div>
                      <div className="col-md-6">
                        <p>{`${AGE} Years Old`}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Email</label>
                      </div>
                      <div className="col-md-6">
                        <p>{EMAIL}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Parent Phone</label>
                      </div>
                      <div className="col-md-6">
                        <p>{PARENTSphone}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Adress</label>
                      </div>
                      <div className="col-md-6">
                        <p>{ADRESS}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Profile;
