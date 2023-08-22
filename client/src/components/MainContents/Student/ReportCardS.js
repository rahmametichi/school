import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt from "jwt-decode";
import "./absence.css";
import Loader from "react-loader-spinner";
const ReportCardS = ({ student }) => {
    return (
        <>
            {student.reportCard === "" ? (
                <div className="student-absente-content">
                    <h1 className="no-absente">There'is No Report Yet</h1>
                    <i className="fa fa-thumbs-up abs-icon"></i>
                </div>
            ) : (
                <div className="student-absente-content">
                    <h3>Report Card</h3>
                    <a
                        href={`/uploads/${student.reportCard}`}
                        download="report"
                    >
                        <button type="button">Download</button>
                    </a>
                </div>
            )}
        </>
    );
};

export default ReportCardS;
