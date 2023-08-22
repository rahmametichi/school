import React, { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../../../utils/index";

const EditClass = () => {
  const [studentsclass, setStudentsClass] = useState([]);

  // Function Axios Get All Classes
  /************************************/
  const getAllClass = async () => {
    const Classes = await axios.get(`${url}/administration/GetAllClass`);
    setStudentsClass(Classes.data.data);
  };
  /*************************************/

  // UseEffect for Get Classes
  /*******************/
  useEffect(() => {
    getAllClass();
  }, []);
  const [id, setId] = useState("");
  const getId = (e) => {
    setId(e.target.value);
  };
  const [newTitle, setNewTitle] = useState("");
  const [link, setLink] = useState();

  const handleEdit = () => {
    const newPost = new FormData();

    if (link) {
      newPost.append("img", link);
    }
    newPost.append("name", newTitle);
    if (newTitle !== "") {
      axios
        .put(`${url}/editClass/${id}`, newPost)
        .then((res) => alert("Class updated "))
        .catch((err) => console.log(err));
    }
  };
  return (
    <div class="page-content-wrapper">
      <div class="page-content">
        <div class="page-bar">
          <div class="page-title-breadcrumb">
            <div class=" pull-left">
              <div class="page-title">Edit Class</div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <div class="card card-box">
              <div class="card-head">
                <header>Edit Class</header>
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
                          onChange={getId}
                        >
                          <option value="">Select...</option>
                          {studentsclass &&
                            studentsclass.map((classes) => {
                              return (
                                <option value={`${classes._id}`}>
                                  {classes.name}
                                </option>
                              );
                            })}
                        </select>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="control-label col-md-3">Class Name</label>
                      <div class="col-md-5">
                        <input
                          name="name"
                          placeholder="class name"
                          class="form-control"
                          rows="5"
                          onChange={(e) => setNewTitle(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="control-label col-md-3"></label>
                      <div class="col-md-5">
                        <input
                          type="file"
                          placeholder="image"
                          name="img"
                          accept="image/png, image/jpeg "
                          onChange={(e) => setLink(e.target.files[0])}
                        />
                      </div>
                    </div>
                    <div class="form-actions">
                      <div class="row">
                        <div class="offset-md-3 col-md-9">
                          <button
                            type="submit"
                            class="btn btn-info m-r-20"
                            onClick={handleEdit}
                          >
                            Submit
                          </button>
                          <button type="button" class="btn btn-default">
                            Cancel
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

export default EditClass;
