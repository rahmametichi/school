import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt from "jwt-decode";
import { Link, useParams } from "react-router-dom";
import "quill/dist/quill.snow.css";
const CourseDetails = () => {
    const { id } = useParams();

    const [course, setCourse] = useState("");
    useEffect(() => {
        axios
            .get(`/getcourseDetails/${id}`)
            .then((res) => setCourse(res.data.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div class="page-content-wrapper">
            <div class="page-content">
                <div class="page-bar">
                    <div class="page-title-breadcrumb">
                        <div class=" pull-left">
                            <div class="page-title">Course</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <div class="card card-box">
                            <div class="card-head">
                                <header>Course</header>
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
                                    <h1>{course && course.title}</h1>
                                    <p>{`Course Added By : ${
                                        course && course.addedBy.firstName
                                    } ${course && course.addedBy.lastName}`}</p>
                                    <div>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: course.contenu,
                                            }}
                                        ></div>
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

export default CourseDetails;
