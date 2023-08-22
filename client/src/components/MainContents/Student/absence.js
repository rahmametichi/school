import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt from "jwt-decode";
import "./absence.css";
import Loader from "react-loader-spinner";
import { url } from "../../../utils/index";

const Absence = ({ toggle }) => {
  // get th student id from the localStorage
  const TOKEN = localStorage.getItem("JWT");
  const id = jwt(TOKEN).id;

  // hooks for all students Absences
  const [allAbsences, setAllabsences] = useState({
    StudentABS: [],
  });

  // hook for appearing data
  const [appear, setAppear] = useState(true);

  setTimeout(() => {
    setAppear(false);
  }, 10000);

  // useEffect with axios function for getting student Situation
  // *** Start ***

  const GetStudentAbsences = async () => {
    try {
      const studentABS = await axios.get(`${url}/student/absence/${id}`);
      setAllabsences({ StudentABS: studentABS.data.data });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    GetStudentAbsences();
  }, []);

  // **End***

  // map the tbody elements from data base
  // ***Start***
  const absencesData = allAbsences.StudentABS.map((StudentABS, i) => {
    // effecting elments from data base to variable
    const Picture = StudentABS.addedBy.avatar;
    const Subject = StudentABS.addedBy.subject;
    const Proffesore = StudentABS.addedBy.firstName;
    const AbsenteDate = StudentABS.date;
    const Sitiuation = StudentABS.situation;

    // html structure
    return (
      <tr key={i}>
        <td className="centerImg">
          <img src={Picture} width="30" className="profImg" />
        </td>
        <td className="center">
          <div className="center-field">
            <span>{Proffesore}</span>
          </div>
        </td>
        <td className="center">
          <span className="center-field">{Subject}</span>
        </td>
        <td className="center">
          <span className="center-field">{AbsenteDate}</span>
        </td>
        <td className="center">
          <div className="indicate center-field">
            {Sitiuation === "Present" ? (
              <i className="fa fa-circle CIRCLE green"></i>
            ) : Sitiuation === "Excluded" ? (
              <i className="fa fa-circle CIRCLE yellow"></i>
            ) : Sitiuation === "Absente" ? (
              <i className="fa fa-circle CIRCLE red"></i>
            ) : null}
          </div>
        </td>
      </tr>
    );
  });
  // *** End map here***
  // filtring the the situation by "Absente"
  const total = allAbsences.StudentABS.filter((StudentABS) => {
    return StudentABS.situation === "Absente";
  });
  const totalAbs = total.length;
  return (
    <div>
      {allAbsences.StudentABS.length > 0 ? (
        <div className="student-table-container">
          <div className={toggle ? "icons" : "icons-closed"}>
            <div className="student__Absences__icons">
              <i className="fa fa-circle green CIRCLE"></i>
              <span className="icon-txtOnline">
                <b>Present</b>
              </span>
            </div>
            <div className="student__Absences__icons">
              <i className="fa fa-circle red CIRCLE"></i>
              <span className="icon-txtOnline">
                <b>Absent</b>
              </span>
            </div>
            <div className="student__Absences__icons">
              <i className="fa fa-circle yellow CIRCLE"></i>
              <span className="icon-txtOnline">
                <b>excluded</b>
              </span>
            </div>
          </div>
          <div
            className={
              toggle ? "student-table-header" : "student-table-header-closed"
            }
          >
            <table className="table table-checkable order-column">
              <thead>
                <tr>
                  <th className="center Color">Picture</th>
                  <th className="center Color">Professor</th>
                  <th className="center Color">Subject</th>
                  <th className="center Color">Date</th>
                  <th className="center Color">Situation</th>
                </tr>
              </thead>
              {/* map function */}
              <tbody className="student-absences-t-body">{absencesData}</tbody>
            </table>
          </div>
        </div>
      ) : appear ? (
        <div className="abs__loader">
          <Loader type="ThreeDots" color="#00BFFF" height={150} width={150} />
        </div>
      ) : (
        <div className={toggle ? "student-absente-content" : "closed"}>
          <h1 className="no-absente">You Don't Have Any Absence Keep Going</h1>
          <i className="fa fa-thumbs-up abs-icon"></i>
        </div>
      )}
    </div>
  );
};

export default Absence;
