import React, { useState, useEffect } from "react";
import axios from "axios";
const Notification = () => {
    const [notifications, setNotifications] = useState([]);
    useEffect(() => {
        axios
            .get("/getNotification")
            .then((res) => setNotifications(res.data.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div class="page-content-wrapper">
            <div class="page-content">
                <div class="page-bar">
                    <div class="page-title-breadcrumb">
                        <div class=" pull-left">
                            <div class="page-title">Notification</div>
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
                            <li class="active"> Notification</li>
                        </ol>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <div class="card card-box">
                            <div class="card-head">
                                <header>Notification</header>
                            </div>
                            <div class="card-body" id="bar-parent">
                                <div id="form_sample_1" class="form-horizontal">
                                    <div
                                        class="form-body"
                                        style={{
                                            overflowY: "auto",
                                            maxHeight: "600px",
                                        }}
                                    >
                                        {notifications &&
                                            notifications.map(
                                                (notification) => {
                                                    return (
                                                        <>
                                                            <div
                                                                style={{
                                                                    display:
                                                                        "flex",

                                                                    alignItems:
                                                                        "center",
                                                                }}
                                                            >
                                                                <i class="fa fa-circle user-online"></i>
                                                                <h4
                                                                    style={{
                                                                        marginRight:
                                                                            "20px",
                                                                        marginLeft:
                                                                            "20px",
                                                                    }}
                                                                >
                                                                    {
                                                                        notification.title
                                                                    }
                                                                </h4>
                                                                <span>
                                                                    {notification.date.substr(
                                                                        0,
                                                                        10
                                                                    )}
                                                                </span>
                                                            </div>
                                                            <p>
                                                                {
                                                                    notification.description
                                                                }
                                                            </p>
                                                        </>
                                                    );
                                                }
                                            )}
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

export default Notification;
