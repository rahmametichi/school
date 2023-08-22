import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./StudentProfile.css";
import Loader from "react-loader-spinner";
import { url } from "../../../utils/index";

const StudentProfile = () => {
  const { id } = useParams();
  const [allStudents, setAllStudents] = useState([]);
  const [allExamScore, setAllExamScore] = useState([]);

  // Function Axios Get All Students
  /*************************************/
  const getAllStudents = async () => {
    const Students = await axios.get(`${url}/administation/AllStudents`);
    setAllStudents(Students.data.data);
  };
  /*************************************/

  //Function Axios Get Exam Score
  /********************************/
  const getAllExamScore = async () => {
    const ExamScore = await axios.get(`${url}/administration/GetAllExamsScore`);
    setAllExamScore(ExamScore.data.data);
  };

  /********************************/
  useEffect(() => {
    getAllStudents();
    getAllExamScore();
  }, []);

  const student_info = allStudents.filter((student) => student._id === id);
  const student_exams = allExamScore.filter((el) => el.student._id === id);
  const subject_exam = student_exams.map((el) => {
    const firstname = el.subject.firstName;
    const lastname = el.subject.lastName;
    const subject = el.subject.subject;
    const note = el.note;
    return (
      <tr>
        <td className="fix">{`${firstname} ${lastname}`}</td>
        <td className="fix">{subject}</td>
        <td className="fix">{note}</td>
      </tr>
    );
  });

  const [showMark, setShowMark] = useState(false);
  const showMarks = () => {
    setShowMark(true);
    const home = document.getElementById("home-tab");
    const mark = document.getElementById("profile-tab");
    home.classList.remove("active");
    mark.classList.add("active");
  };

  const showAbout = () => {
    setShowMark(false);
    const home = document.getElementById("home-tab");
    const mark = document.getElementById("profile-tab");
    home.classList.add("active");
    mark.classList.remove("active");
  };

  return (
    <div>
      {student_info.length !== 0 ? (
        <div className="container emp-profile">
          <div className="form-profile">
            <div className="row">
              <div className="col-md-4">
                <div className="profile-img">
                  <img
                    src={student_info[0].avatar}
                    alt="student_profile_image"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="profile-head">
                  <h5>{`${student_info[0].firstName} ${student_info[0].lastName}`}</h5>
                  <h6>Student At Smart School </h6>
                  <p className="proile-rating">
                    Rate : <span> 4.5 / 5</span>
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
                    <li className="nav-item">
                      <button
                        className="nav-link"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                        onClick={showMarks}
                      >
                        Student Marks
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="col-md-2">
                                <input
                                    type="submit"
                                    className="profile-edit-btn"
                                    name="btnAddMore"
                                    value="Edit Profile"
                                />
                            </div> */}
            </div>

            {/* About Part  */}
            {showMark === false ? (
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
                          <p>{student_info[0].classRoom}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Full Name</label>
                        </div>
                        <div className="col-md-6">
                          <p>{`${student_info[0].firstName} ${student_info[0].lastName}`}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Age</label>
                        </div>
                        <div className="col-md-6">
                          <p>{`${student_info[0].age} Years Old`}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Email</label>
                        </div>
                        <div className="col-md-6">
                          <p>{student_info[0].email}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Parent Phone</label>
                        </div>
                        <div className="col-md-6">
                          <p>{student_info[0].parentsPhone}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Student Mark Part
              <div className="out-border">
                <div className="student-mark">
                  <Table hover>
                    <thead>
                      <tr>
                        <th
                          style={{
                            paddingLeft: "25px",
                          }}
                        >
                          Teacher
                        </th>
                        <th>Subject</th>
                        <th>Note</th>
                      </tr>
                    </thead>
                    <tbody>{subject_exam}</tbody>
                  </Table>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="loader">
          <Loader type="ThreeDots" color="#00BFFF" height={150} width={150} />
        </div>
      )}
    </div>
  );
};

export default StudentProfile;
