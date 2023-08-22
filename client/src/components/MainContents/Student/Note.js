import axios from "axios";
import React, { useState, useEffect } from "react";
import jwt from "jwt-decode";
import Loader from "react-loader-spinner";

import "./Note.css";
import { url } from "../../../utils/index";

const Note = ({ toggle }) => {
  // hooks for Student note
  const [allNotes, setAllNotes] = useState({ Note: [] });

  // hook for appearing data
  const [appear, setAppear] = useState(true);

  setTimeout(() => {
    setAppear(false);
  }, 5000);

  // get th student id from the localStorage
  const TOKEN = localStorage.getItem("JWT");
  const id = jwt(TOKEN).id;

  // function for getting the student absences
  const GetExamsNote = async () => {
    try {
      const StudentNote = await axios.get(`${url}/student/note/${id}`);
      setAllNotes({ Note: StudentNote.data.data });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    GetExamsNote();
  }, []);

  // ***End***

  // map the tbody from data base
  // ***Start***
  const table = allNotes.Note.map((el, i) => {
    const Teacher = `${el.subject.firstName} ${el.subject.lastName} `;
    const Subject = el.subject.subject;
    const Score = el.note;
    const Avatar = el.subject.avatar;
    return (
      <tr key={i}>
        <td className="centerImg">
          <img src={Avatar} width="30" className="profImg" />
        </td>
        <td className="exams-table-body">
          <span className="EX-center-field">{Teacher}</span>
        </td>
        <td className="exams-table-body">
          <span className="EX-center-field">{Subject}</span>
        </td>
        <td className="exams-table-body">
          <span className="EX-center-field"> {Score}</span>
        </td>
      </tr>
    );
  });
  // ***End***

  return (
    <>
      {appear ? (
        <div
          className="dash__loader"
          style={{ transform: "translateY(170px)" }}
        >
          <Loader type="ThreeDots" color="#00BFFF" height={150} width={150} />
        </div>
      ) : (
        <div className="Score">
          <div className={toggle ? "exams-container" : "Exams-class-closed"}>
            <div
              className={toggle ? "col-sm-15 full-Width" : "full-closed-Width"}
            >
              {allNotes.Note.length ? (
                <table
                  className="table table-checkable order-column"
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr>
                      <th className="exams-table-head">Avatar</th>
                      <th className="exams-table-head">Teacher</th>
                      <th className="exams-table-head">Subject</th>
                      <th className="exams-table-head">Score</th>
                    </tr>
                  </thead>
                  {/* map function */}
                  <tbody className="exmas-t-body ">{table}</tbody>
                </table>
              ) : (
                <>
                  <h1 className="note-no-absente">
                    You Don't Have Any Exam Score
                  </h1>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Note;
