import { MDBDataTable } from "mdbreact";
import axios from "axios";
import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "react-loader-spinner";
import { url } from "../../../utils/index";

// import "./Student.css";
const Student = () => {
  //Hooks For All Students List
  const [allStudents, setAllStudents] = useState([]);

  //Hooks For All Classes List
  const [studentsclass, setStudentsClass] = useState({ classes: [] });

  //Hooks For Adding Class to Student
  const [addClass, setAddClass] = useState();

  // Hooks For Edit Modal
  /*************************************/
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  // Function Axios Get All Classes
  /************************************/
  const getAllClass = async () => {
    const Classes = await axios.get(`${url}/administration/GetAllClass`);
    setStudentsClass({ classes: Classes.data.data });
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
    getAllClass();
  }, []);

  // Edit Class And Change in Database
  /***************************************************************/
  const handleSave = (e) => {
    e.preventDefault();
    // console.log("addclas", addClass);
    // console.log(e.target.value);
    const id = e.target.value;
    setAllStudents((allStudents) =>
      allStudents.map((student) => {
        if (student._id === id) {
          return { ...student, classRoom: addClass };
        }
        return student;
      })
    );

    axios
      .put(`${url}/administration/updateClass/${id}`, {
        classRoom: addClass,
      })
      .then((res) => {
        console.log("Status: ", res.status);
        console.log("Data: ", res.data);
        // history.go(0);
      })
      .catch((err) => {
        console.log("Error in adding class !", err);
      });
    setShow(false);
  };
  /***************************************************************/

  //Delete Student From DataTable & DataBase
  /**********************************************************************/
  const deleteStudent = (e) => {
    e.preventDefault();
    const id = e.currentTarget.value;
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          setAllStudents(allStudents.filter((student) => student._id !== id));
          axios
            .delete(`${url}/administation/deleteStudent/${id}`)
            .then((res) => {
              console.log(res.data);
            })
            .catch((err) => {
              console.log("Error form Delete Student", err);
            });
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Be Sure Before Click Delete Button :)",
            "error"
          );
        }
      });
  };
  /**********************************************************************/

  /**********************************************/
  // Map All Classes Array
  /**********************************************/

  const classes = studentsclass.classes.map((classe, index) => {
    return (
      <option key={index} value={classe.name}>
        {classe.name}
      </option>
    );
  });

  /**********************************************/
  // AllStudents Array Map To Shows In DataTable
  /**********************************************/
  const data_table = allStudents.map((student, index) => {
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
          alt="user_img"
        />
      ),
      fullname: (
        <NavLink to={`/admin/student/profile/${student._id}`}>
          {`${firstName} ${lastName}`}
        </NavLink>
      ),
      age: age,
      parentphone: parentsPhone,
      class: classRoom === "" ? "Without Class " : classRoom,
      option: (
        <div>
          {show ? (
            <div
              key={index}
              style={{
                width: "90px",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <Form.Select
                style={{ width: "100px", marginRight: "5px" }}
                aria-label="Default select example"
                onChange={(e) => setAddClass(e.target.value)}
              >
                <option>
                  {classRoom === "" ? "Without Class " : classRoom}
                </option>
                {classes}
              </Form.Select>
              <button
                value={student._id}
                variant="primary"
                onClick={handleSave}
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
              <button onClick={handleShow}>
                <i class="fa fa-edit"></i>
              </button>
              <button value={student._id} onClick={deleteStudent}>
                <i class="fa fa-trash"></i>
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
        label: "Option",
        field: "option",
        sort: "disabled",
        width: 100,
      },
    ],
    rows,
  };
  /**********************************************/

  return (
    <>
      {allStudents.length > 0 ? (
        <div
          className="students"
          style={{
            marginLeft: "19%",
            background: "#fff",
            width: "80%",
            transform: "translateY(67px)",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          <div className="card-head">
            <header>All Students List</header>
          </div>
          {/* Component DataTable */}

          <MDBDataTable
            entriesOptions={[5, 10, 20]}
            entries={5}
            hover
            data={DataTable}
          />
          {/* Component DataTable*/}
        </div>
      ) : (
        <div className="loader-admin-student">
          <Loader type="ThreeDots" color="#00BFFF" height={150} width={150} />
        </div>
      )}
    </>
  );
};

export default Student;
