import { MDBDataTable } from "mdbreact";
import axios from "axios";
import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import jwt from "jwt-decode";
import "./StudentsAbsences.css";
import { url } from "../../../utils/index";

const StudentsAbsences = () => {
  //Get Token from LocalStorage
  /******************************************************/
  const token = localStorage.getItem("JWT");
  const decoded_token = jwt(token);
  const teacher_id = decoded_token.id;
  /******************************************************/
  //Hooks For Sutdents situation's That Teacher Teach
  const [allSituation, setAllSituation] = useState([]);

  // Function Axios Sutdents situation's That Teacher Teach
  /*********************************************************/
  const GetStudentSituation = async () => {
    const Situations = await axios.get(
      `${url}/teacher/studentSituations/${teacher_id}`
    );
    setAllSituation(Situations.data.data);
  };
  /*********************************************************/
  useEffect(() => {
    GetStudentSituation();
    // eslint-disable-next-line
  }, []);

  //OnClick For Show Select And Save
  /*********************************************************/
  const handleShow = (e) => {
    e.preventDefault();
    const id = e.currentTarget.value;
    console.log(id);
    setAllSituation(
      allSituation.map((situation) => {
        if (situation._id === id) {
          return { ...situation, select: true };
        }
        return situation;
      })
    );
  };
  /*********************************************************/
  // Hooks For new Situation
  const [newSituation, setNewSituation] = useState("");
  // onChange To set newSituation
  /****************************************************/
  const handleSituation = (e) => {
    setNewSituation(e.target.value);
  };
  //onClick To update Student Situation
  /****************************************************/
  const updateStudent = (e) => {
    e.preventDefault();

    const id = e.target.value;
    if (
      newSituation === "Absente" ||
      newSituation === "Excluded" ||
      newSituation === "Presente"
    ) {
      setAllSituation(
        allSituation.map((situation) => {
          if (situation._id === id) {
            return {
              ...situation,
              select: false,
              situation: newSituation,
            };
          }
          return situation;
        })
      );
      axios
        .put(`${url}/teacher/EditSituation/${id}`, {
          situation: newSituation,
        })
        .then((res) => {})
        .catch((err) => {});
    } else {
      setAllSituation(
        allSituation.map((situation) => {
          if (situation._id === id) {
            return {
              ...situation,
              select: false,
            };
          }
          return situation;
        })
      );
    }
  };
  //Map To Show Situation in DataTable
  /***********************************************************/
  const data_table = allSituation.map((student, index) => {
    const firstName = student.student.firstName;
    const lastName = student.student.lastName;
    const classRoom = student.student.classRoom;
    const situation = student.situation;
    const Date = student.date;
    const Data = {
      photo: (
        <img
          src={student.student.avatar}
          width="50px"
          height="50px"
          style={{ borderRadius: "50%" }}
          alt="profile_img"
        />
      ),
      fullname: `${firstName} ${lastName}`,
      date: Date,
      situation: situation,
      class: classRoom === "" ? "Without Class " : classRoom,
      edit: (
        <div>
          {student.select ? (
            <div
              key={index}
              style={{
                width: "90px",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <Form.Select
                style={{ width: "120px", marginRight: "5px" }}
                aria-label="Default select example"
                onChange={handleSituation}
              >
                <option>Situation</option>
                <option>Absente</option>
                <option>Excluded</option>
                <option>Presente</option>
              </Form.Select>
              <button
                value={student._id}
                variant="primary"
                onClick={updateStudent}
              >
                Save
              </button>
            </div>
          ) : (
            <div
              style={{
                width: "90px",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <button value={student._id} onClick={handleShow}>
                <i class="fa fa-edit"></i>
              </button>
            </div>
          )}
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
        label: "Full Name",
        field: "fullname",
        sort: "disabled",
        width: 150,
      },

      {
        label: "Date",
        field: "date",
        sort: "disabled",
        width: 100,
      },
      {
        label: "Situation",
        field: "situation",
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
        label: "Edit",
        field: "edit",
        sort: "disabled",
        width: 100,
      },
    ],
    rows,
  };
  /***********************************************************/

  return (
    <>
      <div className="teacher-history-absence">
        <div className="card-head">
          <header>All Students List</header>
        </div>

        <Form>
          <MDBDataTable
            entriesOptions={[10, 20, 30]}
            entries={10}
            hover
            data={DataTable}
          />
        </Form>
      </div>
    </>
  );
};
export default StudentsAbsences;
