import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt from "jwt-decode";
import { Link } from "react-router-dom";
const Courses = () => {
    const token = localStorage.getItem("JWT");
    const decoded_token = jwt(token);
    console.log(decoded_token);
    const student_class = decoded_token.classRoom;
    const [myCourses, setMyCourses] = useState("");

    useEffect(() => {
        axios
            .get(`/student/getCourse/${student_class}`)
            .then((res) => setMyCourses(res.data.data))
            .catch((err) => console.log(err));
    }, []);

    console.log(myCourses);

    return (
        <div class="page-content-wrapper">
            <div class="page-content">
                <div class="page-bar">
                    <div class="page-title-breadcrumb">
                        <div class=" pull-left">
                            <div class="page-title">My Courses</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <div class="card card-box">
                            <div class="card-head">
                                <header>My Courses</header>
                                {/* <button
                                    id="panel-button"
                                    class="mdl-button mdl-js-button mdl-button--icon pull-right"
                                    data-upgraded=",MaterialButton"
                                >
                                    <i class="material-icons">more_vert</i>
                                </button> */}
                            </div>
                            <div class="card-body" id="bar-parent">
                                <div
                                    action="#"
                                    id="form_sample_1"
                                    class="form-horizontal"
                                >
                                    <div
                                        class="form-body"
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-evenly",
                                            flexWrap: "wrap",
                                        }}
                                    >
                                        {myCourses &&
                                            myCourses.map((course) => {
                                                return (
                                                    <div
                                                        style={{
                                                            width: "250px",
                                                            display: "flex",
                                                            justifyContent:
                                                                "space-evenly",
                                                            alignItems:
                                                                "center",
                                                            background:
                                                                "linear-gradient(#606c88,#3f4c6b)",
                                                            marginBottom:
                                                                "20px",
                                                        }}
                                                    >
                                                        <div>
                                                            <h4
                                                                style={{
                                                                    color: "#fff",
                                                                }}
                                                            >
                                                                {course.title}
                                                            </h4>
                                                            <div
                                                                style={{
                                                                    display:
                                                                        "flex",
                                                                    alignItems:
                                                                        "center",
                                                                    justifyContent:
                                                                        "space-evenly",
                                                                    color: "#fff",
                                                                }}
                                                            >
                                                                <i class="material-icons">
                                                                    school
                                                                </i>
                                                                <h6>
                                                                    {
                                                                        course.classroom
                                                                    }
                                                                </h6>
                                                            </div>
                                                        </div>
                                                        <Link
                                                            to={`/course/${course._id}`}
                                                        >
                                                            More Details
                                                        </Link>
                                                    </div>
                                                );
                                            })}
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

export default Courses;
