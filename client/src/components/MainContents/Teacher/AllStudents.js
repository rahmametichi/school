import { MDBDataTable } from "mdbreact";
import axios from "axios";
import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import jwt from "jwt-decode";
import "./AllStudents.css";
import { url } from "../../../utils/index";

const AllStudents = ({ toggle }) => {
  const token = localStorage.getItem("JWT");
  const decoded_token = jwt(token);
  const teacher_id = decoded_token.id;
  //Hooks For All Students List
  const [allStudents, setAllStudents] = useState([]);

  //Hooks For All Classes List
  const [teacherClass, setTeacherClass] = useState([]);

  const [classfilter, setClassFilter] = useState([]);

  useEffect(() => {
    setClassFilter(
      allStudents.filter((el) => el.classRoom === teacherClass[0].name)
    );
    // eslint-disable-next-line
  }, [teacherClass]);

  // Hooks For Edit Modal
  /*************************************/

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
  /*************************************/
  // Map All Classes Array
  /**********************************************/
  const [absence, setAbsence] = useState();
  const absenceSelect = (e) => {
    setAbsence(e.target.value);
  };
  // const [id, setId] = useState();
  const [allSituation, setAllSituation] = useState([]);

  const submitAll = (e) => {
    e.preventDefault();
    axios
      .post(`${url}/teacher/addSituation`, allSituation)
      .then((res) => {
        alert("Submit Succefull");
      })
      .catch((err) => {
        console.log("error from submit Situations", err);
      });
  };
  /**********************************************/

  // AllStudents Array Map To Shows In DataTable
  /**********************************************/

  const selectChange = (e) => {
    const classChoosen = e.target.value;
    setClassFilter(allStudents.filter((el) => el.classRoom === classChoosen));
  };
  const submitStudent = (e) => {
    e.preventDefault();
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + " " + time;
    const id = e.target.value;
    setClassFilter((students) =>
      students.map((student) => {
        if (student._id === id) {
          return { ...student, select: false };
        }
        return student;
      })
    );
    setAllSituation([
      ...allSituation,
      {
        situation: absence,
        student: e.target.value,
        date: dateTime,
        addedBy: teacher_id,
      },
    ]);
  };
  const data_table = classfilter.map((student, index) => {
    const firstName = student.firstName;
    const lastName = student.lastName;
    const age = student.age;
    const parentsPhone = student.parentsPhone;
    const classRoom = student.classRoom;
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
      age: age,
      parentphone: parentsPhone,
      class: classRoom === "" ? "Without Class " : classRoom,
      Attending: (
        <div style={{ width: "90px" }}>
          <div className="table-rows-design">
            {student.select ? (
              <>
                <Form.Select
                  style={{
                    width: "115px",
                    marginRight: "5px",
                    marginLeft: "-20px",
                  }}
                  aria-label="Default select example"
                  onChange={absenceSelect}
                  id="selectFilter"
                >
                  <option>Absente</option>
                  <option>Excluded</option>
                  <option>Present</option>
                </Form.Select>

                <button
                  value={student._id}
                  variant="primary"
                  onClick={submitStudent}
                >
                  Save
                </button>
              </>
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

  const classes = teacherClass.map((classe, index) => {
    return (
      <option key={index} value={classe.name}>
        {classe.name}
      </option>
    );
  });

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
        label: "Age",
        field: "age",
        sort: "disabled",
        width: 100,
      },
      {
        label: "Parents Phone",
        field: "parentphone",
        sort: "disabled",
        width: 100,
      },
      {
        label: "Student Class",
        field: "class",
        sort: "disabled",
        width: 100,
      },
      {
        label: "Attending",
        field: "Attending",
        sort: "disabled",
        width: 100,
      },
    ],
    rows,
  };
  /**********************************************/

  return (
    <>
      <div className="Teacher-AllStudents">
        <div className="card-head">
          <header>All Students List</header>
        </div>
        {/* Component DataTable */}
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
            onClick={submitAll}
          >
            <i class="far fa-share-square"></i>
            <span>Submit</span>
          </button>
        </Form>
      </div>
    </>
  );
};

export default AllStudents;
