import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import "./Teacher.css";
import Swal from "sweetalert2";
import Loader from "react-loader-spinner";
import { url } from "../../../utils/index";

const Teacher = ({ toggle }) => {
  // Hooks for Teachers List
  const [teachers, setTeachers] = useState([]);

  //Hooks For All Classes List
  const [allclass, setAllClass] = useState([]);

  //Hooks For Adding Class to Tacher
  const [addClass, setAddClass] = useState("Choose Class");

  //Function To show Select Option in Card
  const showSelect = (e) => {
    const id = e.target.value;
    console.log(id);
    setTeachers((teachers) =>
      teachers.map((teacher) => {
        if (teacher._id === id) {
          return { ...teacher, showSelect: true };
        }
        return teacher;
      })
    );
  };

  //Function for Select change
  const selectChange = (e) => {
    setAddClass(e.target.value);
  };

  //Onclick function to Add Class To Teacher
  /******************************************************************/
  const handleSubmit = (e) => {
    const id = e.currentTarget.value;

    if (addClass !== "Choose Class") {
      setTeachers(
        teachers.map((teacher) => {
          const array = teacher.classToStudy;
          if (teacher._id === id) {
            console.log(array);
            return {
              ...teacher,
              ...array.push({
                name: addClass,
              }),
            };
          } else return teacher;
        })
      );
      axios
        .put(`${url}/administration/addClass/${id}`, {
          newclass: addClass,
        })
        .then((res) => {
          console.log("Status: ", res.status);
          console.log("Data: ", res.data);
          // history.go(0);
        })
        .catch((err) => {
          console.log("Error in adding class !", err);
        });
    } else console.log("undefined");

    setTeachers((teachers) =>
      teachers.map((teacher) => {
        if (teacher._id === id) {
          return { ...teacher, showSelect: false };
        }
        return teacher;
      })
    );
  };
  /**********************************************************************/
  //Delete Student From DataTable & DataBase
  /**********************************************************************/
  const handleDelete = (e) => {
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
          setTeachers(teachers.filter((teacher) => teacher._id !== id));
          axios
            .delete(`${url}/administation/deleteTeacher/${id}`)
            .then((res) => {
              console.log(res.data);
            })
            .catch((err) => {
              console.log("Error form Delete Teacher", err);
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
  //Function axios To Get ALL Teachers
  //************************************************************/
  const getAllTeachers = async () => {
    const Teachers = await axios.get(`${url}/administation/AllTeachers`);
    setTeachers(Teachers.data.data);
  };

  //************************************************************/
  // Function Axios Get All Classes
  /************************************/
  const getAllClass = async () => {
    const Classes = await axios.get(`${url}/administration/GetAllClass`);
    setAllClass(Classes.data.data);
  };
  /***************************************************************/
  //UseEffect To Start Function When Page loaded
  useEffect(() => {
    getAllTeachers();
    getAllClass();
  }, []);

  /**********************************************/
  // Map All Classes Array
  /**********************************************/
  const classList = allclass.map((classe, index) => {
    return (
      <option key={classe._id} value={classe.name}>
        {classe.name}
      </option>
    );
  });

  /**********************************************/
  // Teacher Card
  //************************************************************/
  const Card = ({ teacher }) => {
    const Teach_class = teacher.classToStudy.map((classe) => {
      return <span>{classe.name}</span>;
    });

    return (
      <div class="card-teacher">
        {teacher.showSelect ? (
          <button
            value={teacher._id}
            className="close-circle"
            onClick={handleDelete}
          >
            <i class="fa fa-times-circle"></i>
          </button>
        ) : null}
        <div class="card-body-teacher">
          <img src={teacher.avatar} class="teacher-pic" alt="Teacher-pic" />
          <div class="profile-usertitle">
            <div class="teacher-name">{`${teacher.firstName} ${teacher.lastName}`}</div>
            <div class="name-center"> {teacher.subject} </div>
            <div>{teacher.email}</div>
            {teacher.showSelect ? (
              <Form.Select
                style={{
                  width: "150px",
                  marginLeft: "26%",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
                onChange={selectChange}
                aria-label="Default select example"
              >
                <option>{addClass}</option>
                {classList}
              </Form.Select>
            ) : (
              <div class="teach-class">
                Classes Teach :{" "}
                {Teach_class.length !== 0 ? Teach_class : "Zero Classes"}
              </div>
            )}
          </div>

          <div className="phone">
            <p>
              <i class="fa fa-phone"></i>
              <a href="tel:(123) 456-7890"> (123) 456-7890</a>
            </p>
          </div>
          {teacher.showSelect ? (
            <Button
              value={teacher._id}
              variant="success"
              className="btn-submit"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          ) : (
            <Button variant="danger" value={teacher._id} onClick={showSelect}>
              Edit
            </Button>
          )}
        </div>
      </div>
    );
  };

  //************************************************************/
  return (
    <>
      {teachers.length > 0 ? (
        <div>
          <div
            style={{ minHeight: "850px" }}
            className={toggle ? "teacher-view" : "teacher-view-closed"}
          >
            {teachers.map((teacher, index) => {
              return <Card teacher={teacher} key={index} />;
            })}
          </div>
        </div>
      ) : (
        <div className="loader-admin-teacher" style={{ minHeight: "700px" }}>
          <Loader type="ThreeDots" color="#00BFFF" height={150} width={150} />
        </div>
      )}
    </>
  );
};

export default Teacher;
