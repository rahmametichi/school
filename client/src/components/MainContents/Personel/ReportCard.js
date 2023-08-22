import React, { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../../../utils/index";

const ReportCard = () => {
  const [students, setStudents] = useState([]);
  const getAllStudents = async () => {
    const Students = await axios.get(`${url}/administation/AllStudents`);
    setStudents(Students.data.data);
  };
  useEffect(() => {
    getAllStudents();
  }, []);
  const [id, setId] = useState("");
  const getId = (e) => {
    setId(e.target.value);
  };
  const [link, setLink] = useState();
  const handleEdit = (e) => {
    e.preventDefault();
    const newPost = new FormData();

    if (link) {
      newPost.append("file", link);
    }
    axios
      .put(`${url}/addReportCard/${id}`, newPost)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div class="page-content-wrapper">
      <div class="page-content">
        <div class="page-bar">
          <div class="page-title-breadcrumb">
            <div class=" pull-left">
              <div class="page-title">Report Card</div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <div class="card card-box">
              <div class="card-head">
                <header>Report Card</header>
                {/* <button
                                    id="panel-button"
                                    class="mdl-button mdl-js-button mdl-button--icon pull-right"
                                    data-upgraded=",MaterialButton"
                                >
                                    <i class="material-icons">more_vert</i>
                                </button> */}
                {/* <ul
                                    class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                                    data-mdl-for="panel-button"
                                >
                                    <li class="mdl-menu__item">
                                        <i class="material-icons">
                                            assistant_photo
                                        </i>
                                        Action
                                    </li>
                                    <li class="mdl-menu__item">
                                        <i class="material-icons">print</i>
                                        Another action
                                    </li>
                                    <li class="mdl-menu__item">
                                        <i class="material-icons">favorite</i>
                                        Something else here
                                    </li>
                                </ul> */}
              </div>
              <div class="card-body" id="bar-parent">
                <div action="#" id="form_sample_1" class="form-horizontal">
                  <div class="form-body">
                    <div class="form-group row">
                      <label class="control-label col-md-3">
                        Students <span class="required">*</span>
                      </label>
                      <div class="col-md-5">
                        <select
                          class="form-select input-height"
                          name="sub"
                          onChange={getId}
                        >
                          <option value="">Select...</option>
                          {students &&
                            students.map((student) => {
                              return (
                                <option value={`${student._id}`}>
                                  {`${student.firstName} ${student.lastName}`}
                                </option>
                              );
                            })}
                        </select>
                      </div>
                    </div>

                    <div class="form-group row">
                      <label class="control-label col-md-3"></label>
                      <div class="col-md-5">
                        <input
                          type="file"
                          placeholder="file"
                          name="file"
                          accept="image/png, image/jpeg,application/pdf "
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

export default ReportCard;
