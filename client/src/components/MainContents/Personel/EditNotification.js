import React, { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../../utils/index";
const EditNotification = () => {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    axios
      .get("/getNotification")
      .then((res) => setNotifications(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  const [newDescription, setNewDescription] = useState("");
  const handleChange = (e) => {
    setNewDescription(e.target.value);
  };
  const [id, setId] = useState("");
  const getId = (e) => {
    setId(e.target.value);
  };
  const handleEdit = () => {
    axios
      .put(`${url}/editNotification/${id}`, { description: newDescription })
      .then((res) => console.log(res.data.data))
      .catch((err) => console.log(err));
  };
  return (
    <div class="page-content-wrapper">
      <div class="page-content">
        <div class="page-bar">
          <div class="page-title-breadcrumb">
            <div class=" pull-left">
              <div class="page-title">Notification Settings</div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <div class="card card-box">
              <div class="card-head">
                <header>Notification Settings</header>
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
                        Notification <span class="required">*</span>
                      </label>
                      <div class="col-md-5">
                        <select
                          class="form-select input-height"
                          name="sub"
                          onChange={getId}
                        >
                          <option value="">Select...</option>
                          {notifications &&
                            notifications.map((notification) => {
                              return (
                                <option value={`${notification._id}`}>
                                  {notification.title}
                                </option>
                              );
                            })}
                        </select>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="control-label col-md-3">Description</label>
                      <div class="col-md-5">
                        <textarea
                          name="description"
                          placeholder="description"
                          class="form-control-textarea"
                          rows="5"
                          onChange={handleChange}
                        ></textarea>
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

export default EditNotification;
