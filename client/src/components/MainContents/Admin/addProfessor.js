import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { url } from "../../../utils/index";

const AddProfessor = () => {
  const history = useHistory();
  const [newTeacher, setNewTeacher] = useState();
  const handleChange = (e) => {
    setNewTeacher({ ...newTeacher, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      newTeacher.subject == "" ||
      newTeacher.firstName == "" ||
      newTeacher.lastName == "" ||
      newTeacher.email == ""
    ) {
      alert("Please add All fields");
    } else {
      axios
        .post(`${url}/admin/addTeacher`, newTeacher)
        .then(() => history.push("/admin/teachers"))
        .catch((err) => console.log(err));
    }
  };
  return (
    <div class="page-content-wrapper">
      <div class="page-content">
        <div class="page-bar">
          {/* <div class="page-title-breadcrumb">
                        <div class=" pull-left">
                            <div class="page-title">Add Professor</div>
                        </div>
                        <ol class="breadcrumb page-breadcrumb pull-right">
                            <li>
                                <i class="fa fa-home"></i>&nbsp;
                                <a class="parent-item" href="index.html">
                                    Home
                                </a>
                                &nbsp;<i class="fa fa-angle-right"></i>
                            </li>
                            <li>
                                <a class="parent-item" href="">
                                    Professor
                                </a>
                                &nbsp;<i class="fa fa-angle-right"></i>
                            </li>
                            <li class="active">Add Professor</li>
                        </ol>
                    </div> */}
        </div>
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <div class="card card-box" style={{ marginTop: "50px" }}>
              <div class="card-head">
                <header>Basic Information</header>
                {/* <button
                                    id="panel-button"
                                    class="mdl-button mdl-js-button mdl-button--icon pull-right"
                                    data-upgraded=",MaterialButton"
                                >
                                    <i class="material-icons">more_vert</i>
                                </button>
                                <ul
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
                <form action="#" id="form_sample_1" class="form-horizontal">
                  <div class="form-body">
                    <div class="form-group row">
                      <label class="control-label col-md-3">
                        First Name
                        <span class="required"> * </span>
                      </label>
                      <div class="col-md-5">
                        <input
                          type="text"
                          name="firstName"
                          data-required="1"
                          placeholder="enter first name"
                          class="form-control input-height"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="control-label col-md-3">
                        Last Name
                        <span class="required"> * </span>
                      </label>
                      <div class="col-md-5">
                        <input
                          type="text"
                          name="lastName"
                          data-required="1"
                          placeholder="enter last name"
                          class="form-control input-height"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="control-label col-md-3">Email</label>
                      <div class="col-md-5">
                        <div class="input-group">
                          <span class="input-group-addon">
                            <i class="fa fa-envelope"></i>
                          </span>
                          <input
                            type="text"
                            class="form-control input-height"
                            name="email"
                            placeholder="Email Address"
                            onChange={handleChange}
                          />{" "}
                        </div>
                      </div>
                    </div>
                    {/* <div class="form-group row">
                                            <label class="control-label col-md-3">
                                                Joining Date
                                                <span class="required">
                                                    {" "}
                                                    *{" "}
                                                </span>
                                            </label>
                                            <div class="col-md-5">
                                                <div class="input-append date">
                                                    <div
                                                        id="dateIcon"
                                                        class="input-group datePicker"
                                                    >
                                                        <input
                                                            class="formDatePicker form-control"
                                                            type="text"
                                                            placeholder="Select Date.."
                                                            data-input
                                                        />
                                                        <span class="dateBtn">
                                                            <a
                                                                class="input-button"
                                                                title="toggle"
                                                                data-toggle
                                                            >
                                                                <i class="icon-calendar"></i>
                                                            </a>
                                                            <a
                                                                class="input-button"
                                                                title="clear"
                                                                data-clear
                                                            >
                                                                <i class="icon-close"></i>
                                                            </a>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="control-label col-md-3">
                                                Password
                                                <span class="required">
                                                    {" "}
                                                    *{" "}
                                                </span>
                                            </label>
                                            <div class="col-md-5">
                                                <input
                                                    type="password"
                                                    name="pswd"
                                                    data-required="1"
                                                    placeholder="enter Password"
                                                    class="form-control input-height"
                                                />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="control-label col-md-3">
                                                Confirm Password
                                                <span class="required">
                                                    {" "}
                                                    *{" "}
                                                </span>
                                            </label>
                                            <div class="col-md-5">
                                                <input
                                                    type="text"
                                                    name="cnfmPwd"
                                                    data-required="1"
                                                    placeholder="Reenter your password"
                                                    class="form-control input-height"
                                                />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="control-label col-md-3">
                                                Subject
                                                <span class="required">
                                                    {" "}
                                                    *{" "}
                                                </span>
                                            </label>
                                            <div class="col-md-5">
                                                <input
                                                    type="text"
                                                    name="designation"
                                                    data-required="1"
                                                    placeholder="enter your designation"
                                                    class="form-control input-height"
                                                />
                                            </div>
                                        </div> */}
                    <div class="form-group row">
                      <label class="control-label col-md-3">
                        Subject
                        <span class="required"> * </span>
                      </label>
                      <div class="col-md-5">
                        <select
                          class="form-select input-height"
                          name="subject"
                          onChange={handleChange}
                        >
                          <option value="">Select...</option>
                          <option value="Arabic">Arabic</option>
                          <option value="French">French</option>
                          <option value="Mathematics">Mathematics</option>

                          <option value="Music">Music</option>
                          <option value="Science">Science</option>
                        </select>
                      </div>
                    </div>
                    {/* <div class="form-group row">
                                            <label class="control-label col-md-3">
                                                Gender
                                                <span class="required">
                                                    {" "}
                                                    *{" "}
                                                </span>
                                            </label>
                                            <div class="col-md-5">
                                                <select
                                                    class="form-select input-height"
                                                    name="gender"
                                                >
                                                    <option value="">
                                                        Select...
                                                    </option>
                                                    <option value="Category 1">
                                                        Male
                                                    </option>
                                                    <option value="Category 2">
                                                        Female
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="control-label col-md-3">
                                                Mobile No.
                                                <span class="required">
                                                    {" "}
                                                    *{" "}
                                                </span>
                                            </label>
                                            <div class="col-md-5">
                                                <input
                                                    name="number"
                                                    type="text"
                                                    placeholder="mobile number"
                                                    class="form-control input-height"
                                                />{" "}
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="control-label col-md-3">
                                                Birth Date
                                                <span class="required">
                                                    {" "}
                                                    *{" "}
                                                </span>
                                            </label>
                                            <div class="col-md-5">
                                                <div class="input-append date">
                                                    <div
                                                        id="dateIcon2"
                                                        class="input-group datePicker"
                                                    >
                                                        <input
                                                            class="formDatePicker form-control"
                                                            type="text"
                                                            placeholder="Select Date.."
                                                            data-input
                                                        />
                                                        <span class="dateBtn">
                                                            <a
                                                                class="input-button"
                                                                title="toggle"
                                                                data-toggle
                                                            >
                                                                <i class="icon-calendar"></i>
                                                            </a>
                                                            <a
                                                                class="input-button"
                                                                title="clear"
                                                                data-clear
                                                            >
                                                                <i class="icon-close"></i>
                                                            </a>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="control-label col-md-3">
                                                Address
                                                <span class="required">
                                                    {" "}
                                                    *{" "}
                                                </span>
                                            </label>
                                            <div class="col-md-5">
                                                <textarea
                                                    name="address"
                                                    placeholder="address"
                                                    class="form-control-textarea"
                                                    rows="5"
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="control-label col-md-3">
                                                Profile Picture
                                            </label>
                                            <div class="col-md-5">
                                                <input
                                                    type="file"
                                                    class="default"
                                                    multiple
                                                />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="control-label col-md-3">
                                                Education
                                            </label>
                                            <div class="col-md-5">
                                                <textarea
                                                    name="address"
                                                    class="form-control-textarea"
                                                    placeholder="Education"
                                                    rows="5"
                                                ></textarea>
                                            </div>
                                        </div> */}
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProfessor;
