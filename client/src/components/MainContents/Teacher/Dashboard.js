import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";

import Calendar from "react-calendar";
import { Line } from "react-chartjs-2";

import "./Dashboard.css";

// data for charts : line
const data = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
        {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            backgroundColor: "rgb(255, 99, 132)",
        },
    ],
};
// options for charts : line
const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};
const Dashboard = ({ teacher }) => {
    const [value, onChange] = useState(new Date());

    return (
        <div className="dashboard-container-teacher">
            <div className="dashboard-header-teacher">
                <div className="header-left-teacher">
                    <div className="header-card-teacher">
                        <div className="card-content-teacher">
                            <i class="material-icons">group</i>
                            <div>
                                <label>Total Class</label>
                                <span>4</span>
                            </div>
                        </div>
                        <div className="card-content-teacher">
                            <i class="material-icons">school</i>
                            <div>
                                <label>school Name</label>
                                <span>{`Hello Mr ${
                                    teacher && teacher.firstName
                                }`}</span>
                            </div>
                        </div>
                    </div>
                    <div className="timetable">
                        <img
                            src="https://webetab.ac-bordeaux.fr/college-lavardac/typo3temp/pics/d748d145ab.jpg"
                            alt="timeTable"
                        />
                    </div>
                </div>
                <div className="header-right-teacher ">
                    <Calendar
                        onChange={onChange}
                        value={value}
                        className="calendar-teacher-dashboard"
                    />
                    <div className="chart-container-teacher">
                        <Line data={data} options={options} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
