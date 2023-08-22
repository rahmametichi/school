import { MDBDataTable } from "mdbreact";
import axios from "axios";
import Loader from "react-loader-spinner";
import { useState, useEffect } from "react";
import { url } from "../../../utils/index";
// import "./Absence.css";
const Absence = () => {
  //Hooks For All Students List
  const [allSituation, setAllSituation] = useState([]);
  // Function Axios Get All Students
  /*************************************/
  const getAllSituation = async () => {
    const Situation = await axios.get(`${url}/administration/GetAllSituation`);
    setAllSituation(Situation.data.data);
  };
  /*************************************/

  useEffect(() => {
    getAllSituation();
  }, []);

  // All Situaions  Array Map To Shows In DataTable
  /**********************************************/
  const data_table = allSituation.map((Ssituation, index) => {
    const firstName = Ssituation.student.firstName;
    const lastName = Ssituation.student.lastName;
    const classRoom = Ssituation.student.classRoom;
    const subject = Ssituation.addedBy.subject;
    const teacher_firstname = Ssituation.addedBy.firstName;
    const teacher_lastname = Ssituation.addedBy.lastName;
    const date = Ssituation.date;
    const situation = Ssituation.situation;
    const Data = {
      photo: (
        <img
          src={Ssituation.student.avatar}
          width="50px"
          height="50px"
          style={{ borderRadius: "50%" }}
          alt="user_img"
        />
      ),
      fullname: `${firstName} ${lastName}`,
      class: classRoom,
      subject: subject,
      teacher: `${teacher_firstname} ${teacher_lastname}`,
      date: date,
      situation:
        situation === "Absent" ? (
          <div style={{ color: "red", fontWeight: 600 }}>{situation}</div>
        ) : situation === "Present" ? (
          <div style={{ color: "#12a761", fontWeight: 600 }}>{situation}</div>
        ) : (
          <div style={{ color: "#cfe602", fontWeight: 600 }}>{situation}</div>
        ),
    };

    return Data;
  });
  const rows = data_table;
  console.log(allSituation);
  const data = {
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
        label: "Teacher",
        field: "teacher",
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
        label: "Subject",
        field: "subject",
        sort: "disabled",
        width: 100,
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
    ],
    rows,
  };

  return (
    <>
      {allSituation.length > 0 ? (
        <div className="Absence">
          <div class="card-absence">
            <header>All Students Absence </header>
          </div>
          <MDBDataTable
            entriesOptions={[10, 20, 30]}
            entries={10}
            hover
            data={data}
          />
        </div>
      ) : (
        <div className="loader-admin-absence">
          <Loader type="ThreeDots" color="#00BFFF" height={150} width={150} />
        </div>
      )}
    </>
  );
};

export default Absence;
