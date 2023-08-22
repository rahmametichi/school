import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { url } from "../../../utils/index";

const AddNotification = () => {
  const history = useHistory();
  const [newNotification, setNewNotification] = useState();
  const handlechange = (e) => {
    setNewNotification({
      ...newNotification,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    axios
      .post(`${url}/addNotification`, newNotification)
      .then((res) => console.log(res.data.data))
      .catch((err) => console.log(err));
  };

  return (
    <div class="page-content-wrapper">
      <div class="page-content">
        <div class="page-bar">
          <div class="page-title-breadcrumb">
            <div class=" pull-left">
              <div class="page-title">Add Library Assets</div>
            </div>
            <ol class="breadcrumb page-breadcrumb pull-right">
              <li>
                <i class="fa fa-home"></i>&nbsp;
                <a class="parent-item" href="#">
                  Home
                </a>
                &nbsp;<i class="fa fa-angle-right"></i>
              </li>
              <li>
                <a class="parent-item" href="">
                  Library
                </a>
                &nbsp;<i class="fa fa-angle-right"></i>
              </li>
              <li class="active">Add Library Assets</li>
            </ol>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <div class="card card-box">
              <div class="card-head">
                <header>Add Library Assets</header>
                {/* <button
                                    id="panel-button"
                                    class="mdl-button mdl-js-button mdl-button--icon pull-right"
                                    data-upgraded=",MaterialButton"
                                >
                                    <i class="material-icons">more_vert</i>
                                </button> */}
                <ul
                  class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                  data-mdl-for="panel-button"
                >
                  <li class="mdl-menu__item">
                    <i class="material-icons">assistant_photo</i>
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
                </ul>
              </div>
              <div class="card-body" id="bar-parent">
                <div id="form_sample_1" class="form-horizontal">
                  <div class="form-body">
                    <div class="form-group row">
                      <label class="control-label col-md-3">
                        Title
                        <span class="required"> * </span>
                      </label>
                      <div class="col-md-5">
                        <input
                          type="text"
                          name="title"
                          placeholder="enter title"
                          class="form-control input-height"
                          onChange={handlechange}
                        />{" "}
                      </div>
                    </div>

                    <div class="form-group row">
                      <label class="control-label col-md-3">Description</label>
                      <div class="col-md-5">
                        <textarea
                          name="description"
                          placeholder="asset details"
                          class="form-control-textarea"
                          rows="5"
                          onChange={handlechange}
                        ></textarea>
                      </div>
                    </div>
                    <div class="form-actions">
                      <div class="row">
                        <div class="offset-md-3 col-md-9">
                          <button
                            type="submit"
                            class="btn btn-info m-r-20"
                            onClick={handleSubmit}
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

export default AddNotification;
