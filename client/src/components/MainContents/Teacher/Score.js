import "./Score.css";
import { MDBDataTable } from "mdbreact";
import axios from "axios";
import { Form, FormControl } from "react-bootstrap";
import { useState, useEffect } from "react";
import jwt from "jwt-decode";
import { url } from "../../../utils/index";

const Score = ({ toggle }) => {
  const token = localStorage.getItem("JWT");
  const decoded_token = jwt(token);
  const teacher_id = decoded_token.id;
  //Hooks For All Students List
  const [allStudents, setAllStudents] = useState([]);

  //Hooks For All Classes List
  const [teacherClass, setTeacherClass] = useState([]);

  const [classfilter, setClassFilter] = useState([]);

  const [notes, setNotes] = useState([]);
  // Function Axios Get All Classes
  /************************************/
  const getTeacherClass = async () => {
    const Classes = await axios.get(`${url}/teacher/getClass/${teacher_id}`);
    setTeacherClass(Classes.data.data);
  };
  /*************************************/

  // Function Axios Get All Students
  /*************************************/
  const getAllStudents = async () => {
    const Students = await axios.get(`${url}/administation/AllStudents`);

    setAllStudents(Students.data.data);
  };
  /*************************************/
  useEffect(() => {
    getAllStudents();
    getTeacherClass();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (teacherClass.length > 0) {
      setClassFilter(
        allStudents.filter((el) => el.classRoom === teacherClass[0].name)
      );
    }
    // eslint-disable-next-line
  }, [teacherClass]);

  // AllStudents Array Map To Shows In DataTable
  /**********************************************/

  const data_table = classfilter.map((student, index) => {
    const firstName = student.firstName;
    const lastName = student.lastName;
    const classRoom = student.classRoom;
    const select = student.select;
    const Data = {
      photo: (
        <img
          src={student.avatar}
          width="50px"
          height="50px"
          style={{ borderRadius: "50%" }}
          alt="profile_img"
        />
      ),
      firstname: firstName,
      lastname: lastName,
      class: classRoom,
      option: (
        <div>
          <div
            style={{
              width: "90px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            {select ? (
              <FormControl
                type="text"
                placeholder="Note"
                className="input-text-field"
                // onBlur={(e) => setStudentNote(e.target.value)}
                onBlur={(e) => {
                  // setStudentNote(e.target.value);
                  console.log(typeof Number(e.target.value));
                  setNotes([
                    ...notes,
                    {
                      student: student._id,
                      subject: teacher_id,
                      note: Number(e.target.value),
                    },
                  ]);
                  setClassFilter(
                    classfilter.map((filter) => {
                      if (filter._id === student._id) {
                        return {
                          ...filter,
                          select: false,
                        };
                      }
                      return filter;
                    })
                  );
                }}
              />
            ) : (
              <p>Saved</p>
            )}
          </div>
        </div>
      ),
    };

    return Data;
  });
  const rows = data_table;

  const DataTable = {
    columns: [
      {
        label: "Photo",
        field: "photo",
        sort: "disabled",
      },
      {
        label: "First Name",
        field: "firstname",
        sort: "disabled",
        width: 150,
      },
      {
        label: "Last Name",
        field: "lastname",
        sort: "disabled",
        width: 270,
      },

      {
        label: "Student Class",
        field: "class",
        sort: "disabled",
        width: 100,
      },
      {
        label: "Exam Note",
        field: "option",
        sort: "disabled",
        width: 100,
      },
    ],
    rows,
  };
  /**********************************************/
  const selectChange = (e) => {
    const classChoosen = e.target.value;
    setClassFilter(allStudents.filter((el) => el.classRoom === classChoosen));
  };

  const classes = teacherClass.map((classe, index) => {
    return (
      <option key={index} value={classe.name}>
        {classe.name}
      </option>
    );
  });
  console.log(notes);
  const submitNote = (e) => {
    e.preventDefault();
    axios
      .post(`${url}/teacher/addscore`, notes)
      .then((res) => {})
      .catch((err) => console.log("Error from Adding Note To Students ", err));
  };

  return (
    <div className="score-page-content">
      <div className="Teacher-Score">
        <div className="card-head">
          <header>All Students Exams Score</header>
        </div>
        <div className={toggle ? "select-class" : "select-class-closed"}>
          <select onChange={selectChange}>
            <option value="">- Choose Class -</option>
            {classes}
          </select>
        </div>
        <Form>
          <MDBDataTable
            entriesOptions={[10, 20, 30]}
            entries={10}
            hover
            data={DataTable}
          />
          <button
            type="submit"
            className={toggle ? "BTNStyle" : "BTNStyle-closed"}
            onClick={submitNote}
          >
            <i class="fa fa-share-square"></i>
            <span>Submit</span>
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Score;
