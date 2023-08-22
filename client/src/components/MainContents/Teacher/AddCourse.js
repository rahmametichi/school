import React from "react";
import { useQuill } from "react-quilljs";
import { useEffect, useState } from "react";
import "quill/dist/quill.snow.css";
import jwt from "jwt-decode";
import axios from "axios";
import { url } from "../../../utils/index";

const AddCourse = () => {
  const token = localStorage.getItem("JWT");
  const decoded_token = jwt(token);
  const teacher_id = decoded_token.id;

  const [teacherClass, setTeacherClass] = useState([]);

  // Function Axios Get All Classes
  /************************************/
  const getTeacherClass = async () => {
    const Classes = await axios.get(`${url}/teacher/getClass/${teacher_id}`);
    setTeacherClass(Classes.data.data);
  };
  /*************************************/

  useEffect(() => {
    getTeacherClass();
    // eslint-disable-next-line
  }, []);
  const { quill, quillRef } = useQuill();

  const [newArticle, setNewArticle] = useState("");
  const [newTitle, setNewTitle] = useState("");

  const div = <div dangerouslySetInnerHTML={{ __html: newArticle }}></div>;
  const [classes, setClasses] = useState("");
  const getName = (e) => {
    setClasses(e.target.value);
  };
  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        setNewArticle(quill.root.innerHTML);
      });
    }
  }, [quill]);
  const submitArticle = () => {
    let course = {
      contenu: newArticle,
      classroom: classes,
      title: newTitle,
    };
    if (classes !== "" && newArticle !== "" && newTitle !== "") {
      axios
        .post(`${url}/teacher/addCourse/${teacher_id}`, course)
        .then((res) => console.log(res.data.data))
        .catch((err) => console.log(err));
    } else {
      alert("Complete all fields please");
    }
  };
  return (
    <div class="page-content-wrapper">
      <div class="page-content">
        <div class="page-bar">
          <div class="page-title-breadcrumb">
            <div class=" pull-left">
              <div class="page-title">Add Course</div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <div class="card card-box">
              <div class="card-head">
                <header>Add Course</header>
                {/* <button
                                    id="panel-button"
                                    class="mdl-button mdl-js-button mdl-button--icon pull-right"
                                    data-upgraded=",MaterialButton"
                                >
                                    <i class="material-icons">more_vert</i>
                                </button> */}
              </div>
              <div class="card-body" id="bar-parent">
                <div action="#" id="form_sample_1" class="form-horizontal">
                  <div class="form-body">
                    <div class="form-group row">
                      <label class="control-label col-md-3">
                        Classes <span class="required">*</span>
                      </label>
                      <div class="col-md-5">
                        <select
                          class="form-select input-height"
                          name="sub"
                          onChange={getName}
                        >
                          <option value="">Select...</option>
                          {teacherClass &&
                            teacherClass.map((classes) => {
                              return (
                                <option value={`${classes.name}`}>
                                  {classes.name}
                                </option>
                              );
                            })}
                        </select>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="control-label col-md-3">
                        Course Title
                        <span class="required">*</span>
                      </label>
                      <div class="col-md-5">
                        <input
                          name="title"
                          placeholder="Course Title"
                          class="form-control"
                          rows="5"
                          onChange={(e) => setNewTitle(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="control-label col-md-3"></label>
                      <div class="col-md-12">
                        <div ref={quillRef} />
                      </div>
                    </div>

                    <div class="form-actions" style={{ marginTop: "50px" }}>
                      <div class="row">
                        <div class="offset-md-3 col-md-9">
                          <button
                            type="submit"
                            class="btn btn-info m-r-20"
                            onClick={submitArticle}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
