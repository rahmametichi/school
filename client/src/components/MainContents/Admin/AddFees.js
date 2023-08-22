import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../../../utils/index";

const AddFees = () => {
  const [fees, setNewFees] = useState({});
  const [studentsClass, setStudentsClass] = useState([]);

  const handleChange = (e) => {
    setNewFees({ ...fees, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${url}/admin/addPayment`, fees)
      .then((res) => console.log(res.data.data))
      .catch((err) => console.log(err));
  };
  console.log(fees);
  // Function Axios Get All Classes
  /************************************/
  const getAllClass = async () => {
    const Classes = await axios.get(`${url}/administration/GetAllClass`);
    setStudentsClass(Classes.data.data);
  };
  // UseEffect for Get Classes
  /*******************/
  useEffect(() => {
    getAllClass();
  }, []);
  return (
    <div class="page-content-wrapper">
      <div class="page-content">
        <div class="page-bar">
          <div class="page-title-breadcrumb">
            <div class=" pull-left">
              <div class="page-title">Add Fees</div>
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
                  Fees
                </a>
                &nbsp;<i class="fa fa-angle-right"></i>
              </li>
              <li class="active">Add Fees</li>
            </ol>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <div class="card card-box">
              <div class="card-head">
                <header>Add Fees</header>
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
                <div class="form-horizontal">
                  <div class="form-body">
                    {/* <div class="form-group row">
                                            <label class="control-label col-md-3">
                                                Roll No
                                                <span class="required">
                                                    {" "}
                                                    *{" "}
                                                </span>
                                            </label>
                                            <div class="col-md-5">
                                                <input
                                                    type="text"
                                                    name="rollno"
                                                    data-required="1"
                                                    placeholder="enter roll number"
                                                    class="form-control input-height"
                                                />
                                            </div>
                                        </div> */}
                    <div class="form-group row">
                      <label class="control-label col-md-3">
                        Student Name
                        <span class="required"> * </span>
                      </label>
                      <div class="col-md-5">
                        <input
                          type="text"
                          name="student"
                          data-required="1"
                          placeholder="enter student name"
                          class="form-control input-height"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="control-label col-md-3">
                        Class
                        <span class="required"> * </span>
                      </label>
                      <div class="col-md-5">
                        <select
                          class="form-select input-height"
                          name="classe"
                          onChange={handleChange}
                        >
                          <option value="">Select...</option>
                          {studentsClass &&
                            studentsClass.map((cl) => {
                              return (
                                <option value={`${cl.name}`}>{cl.name}</option>
                              );
                            })}
                        </select>
                      </div>
                    </div>

                    <div class="form-group row">
                      <label class="control-label col-md-3">
                        Payment Duration
                      </label>
                      <div class="col-md-5">
                        <div class="form-check">
                          <label class="form-check-label">
                            <input
                              type="radio"
                              class="form-check-input"
                              name="paymentDuration"
                              id="optionsRadios2"
                              value="Monthly"
                              onChange={handleChange}
                            />
                            Monthly
                          </label>
                        </div>
                        <div class="form-check">
                          <label class="form-check-label">
                            <input
                              type="radio"
                              class="form-check-input"
                              name="paymentDuration"
                              id="optionsRadios2"
                              value="Session"
                              onChange={handleChange}
                            />
                            Session
                          </label>
                        </div>
                        <div class="form-check">
                          <label class="form-check-label">
                            <input
                              type="radio"
                              class="form-check-input"
                              name="paymentDuration"
                              id="optionsRadios3"
                              value="Yearly"
                              onChange={handleChange}
                            />
                            Yearly
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="control-label col-md-3">
                        Amount
                        <span class="required"> * </span>
                      </label>
                      <div class="col-md-5">
                        <input
                          name="amount"
                          type="text"
                          placeholder="enter amount"
                          class="form-control input-height"
                          onChange={handleChange}
                        />{" "}
                      </div>
                    </div>
                    {/* <div class="form-group row">
                                            <label class="control-label col-md-3">
                                                Collection Date
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
                                        </div> */}
                    <div class="form-group row">
                      <label class="control-label col-md-3">
                        Payment Method
                        <span class="required"> * </span>
                      </label>
                      <div class="col-md-5">
                        <select
                          class="form-select input-height"
                          name="paymentMethod"
                          onChange={handleChange}
                        >
                          <option value="">Select...</option>
                          <option value="Cash">Cash</option>
                          <option value="Cheque">Cheque</option>
                        </select>
                      </div>
                    </div>
                    {/* <div class="form-group row">
                                            <label class="control-label col-md-3">
                                                Payment Reference Number
                                                <span class="required">
                                                    {" "}
                                                    *{" "}
                                                </span>
                                            </label>
                                            <div class="col-md-5">
                                                <input
                                                    name="number"
                                                    type="text"
                                                    placeholder="enter reference amount"
                                                    class="form-control input-height"
                                                />
                                            </div>
                                        </div> */}
                    {/* <div class="form-group row">
                                            <label class="control-label col-md-3">
                                                Payment Status
                                                <span class="required">
                                                    {" "}
                                                    *{" "}
                                                </span>
                                            </label>
                                            <div class="col-md-5">
                                                <select
                                                    class="form-select input-height"
                                                    name="select"
                                                >
                                                    <option value="">
                                                        Select...
                                                    </option>
                                                    <option value="Category 1">
                                                        Paid
                                                    </option>
                                                    <option value="Category 2">
                                                        Unpaid
                                                    </option>
                                                    <option value="Category 3">
                                                        Pending
                                                    </option>
                                                </select>
                                            </div>
                                        </div> */}
                    {/* <div class="form-group row">
                                            <label class="control-label col-md-3">
                                                Payment Details
                                            </label>
                                            <div class="col-md-5">
                                                <textarea
                                                    name="details"
                                                    placeholder="payment details"
                                                    class="form-control-textarea"
                                                    rows="5"
                                                ></textarea>
                                            </div>
                                        </div> */}
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
  );
};

export default AddFees;
