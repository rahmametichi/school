// import "./Dashboard.css";
import { Bar, Doughnut } from "react-chartjs-2";
import { useState, useEffect } from "react";
import axios from "axios";
const Dashboard = () => {
  const data = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "# of Red Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        label: "# of Blue Votes",
        data: [2, 3, 20, 5, 1, 4],
        backgroundColor: "rgb(54, 162, 235)",
      },
      {
        label: "# of Green Votes",
        data: [3, 10, 13, 15, 22, 30],
        backgroundColor: "rgb(75, 192, 192)",
      },
    ],
  };

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
  const [notifications, setNotifications] = useState([]);
  const [personel, setPersonel] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    axios
      .get("/getNotification")
      .then((res) => setNotifications(res.data.data))
      .catch((err) => console.log(err));
    axios
      .get("/administation/Allpersonel")
      .then((res) => setPersonel(res.data.data));
    axios
      .get("/administation/AllTeachers")
      .then((res) => setTeachers(res.data.data));
    axios
      .get("/administation/AllStudents")
      .then((res) => setStudents(res.data.data));
    axios.get("/admin/getPayment").then((res) => setPayments(res.data.data));
  }, []);
  var sum = 0;
  if (payments) {
    for (let i = 0; i < payments.length; i++) {
      sum += +payments[i].amount;
    }
  }

  return (
    // <div className="Alldashboard-admin">
    //     <div className="all-cards">
    //         <div className="one-card" id="card-color-1">
    //             <div className="card-icon">
    //                 <i class="fa fa-users"></i>
    //             </div>
    //             <div>
    //                 <h5 className="info-box-text">Total Students</h5>
    //                 <p className="info-box-number">450</p>
    //                 <div class="progress">
    //                     <div
    //                         class="progress-bar"
    //                         style={{ width: "45%" }}
    //                     ></div>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="one-card" id="card-color-2">
    //             <div className="card-icon">
    //                 <i class="fa fa-chalkboard-teacher"></i>
    //             </div>
    //             <div>
    //                 <h5 className="info-box-text">Total Teachers</h5>
    //                 <p className="info-box-number">30</p>
    //                 <div class="progress">
    //                     <div
    //                         class="progress-bar"
    //                         style={{ width: "65%" }}
    //                     ></div>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="one-card" id="card-color-3">
    //             <div className="card-icon">
    //                 <i class="fa fa-book"></i>
    //             </div>
    //             <div>
    //                 <h5 className="info-box-text">Total Subjects</h5>
    //                 <p className="info-box-number">30</p>
    //                 <div class="progress">
    //                     <div
    //                         class="progress-bar"
    //                         style={{ width: "85%" }}
    //                     ></div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     <div className="charts-admin-dashboard">
    //         <div className="Bar-charts">
    //             <Bar data={data} options={options} />
    //         </div>
    //     </div>
    // </div>
    <div class="page-content-wrapper">
      <div class="page-content">
        <div class="page-bar">
          <div class="page-title-breadcrumb">
            <div class=" pull-left">
              <div class="page-title">Dashboard</div>
            </div>
            <ol class="breadcrumb page-breadcrumb pull-right">
              <li>
                <i class="fa fa-home"></i>&nbsp;
                <a class="parent-item" href="index.html">
                  Home
                </a>
                &nbsp;<i class="fa fa-angle-right"></i>
              </li>
              <li class="active">Dashboard</li>
            </ol>
          </div>
        </div>
        <div class="state-overview">
          <div class="row">
            <div class="col-xl-3 col-md-6 col-12">
              <div class="info-box bg-b-green">
                <span class="info-box-icon push-bottom">
                  <i class="material-icons">group</i>
                </span>
                <div class="info-box-content">
                  <span class="info-box-text">Total Students</span>
                  <span class="info-box-number">
                    {students ? students.length : 0}
                  </span>
                  <div class="progress">
                    <div class="progress-bar" style={{ width: "45%" }}></div>
                  </div>
                  {/* <span class="progress-description">
                                        45% Increase in 28 Days
                                    </span> */}
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 col-12">
              <div class="info-box bg-b-yellow">
                <span class="info-box-icon push-bottom">
                  <i class="material-icons">person</i>
                </span>
                <div class="info-box-content">
                  <span class="info-box-text">Teachers</span>
                  <span class="info-box-number">
                    {teachers ? teachers.length : 0}
                  </span>
                  <div class="progress">
                    <div class="progress-bar" style={{ width: "40%" }}></div>
                  </div>
                  {/* <span class="progress-description">
                                        40% Increase in 28 Days
                                    </span> */}
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 col-12">
              <div class="info-box bg-b-blue">
                <span class="info-box-icon push-bottom">
                  <i class="material-icons">school</i>
                </span>
                <div class="info-box-content">
                  <span class="info-box-text">Personal</span>
                  <span class="info-box-number">
                    {personel ? personel.length : 0}
                  </span>
                  <div class="progress">
                    <div class="progress-bar" style={{ width: "85%" }}></div>
                  </div>
                  {/* <span class="progress-description">
                                        85% Increase in 28 Days
                                    </span> */}
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 col-12">
              <div class="info-box bg-b-pink">
                <span class="info-box-icon push-bottom">
                  <i class="material-icons">monetization_on</i>
                </span>
                <div class="info-box-content">
                  <span class="info-box-text">Fees Collection</span>
                  <span class="info-box-number">{sum}</span>
                  <span> TND</span>
                  <div class="progress">
                    <div class="progress-bar" style={{ width: "50%" }}></div>
                  </div>
                  {/* <span class="progress-description">
                                        50% Increase in 28 Days
                                    </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="row">
                    <div class="col-sm-6">
                        <div class="card card-box">
                            <div class="card-head">
                                <header>University Survey</header>
                                <div class="tools">
                                    <a
                                        class="fa fa-repeat btn-color box-refresh"
                                        href="javascript:;"
                                    ></a>
                                    <a
                                        class="t-collapse btn-color fa fa-chevron-down"
                                        href="javascript:;"
                                    ></a>
                                    <a
                                        class="t-close btn-color fa fa-times"
                                        href="javascript:;"
                                    ></a>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="recent-report__chart">
                                    <div id="chart1"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card card-box">
                            <div class="card-head">
                                <header>University Survey</header>
                                <div class="tools">
                                    <a
                                        class="fa fa-repeat btn-color box-refresh"
                                        href="javascript:;"
                                    ></a>
                                    <a
                                        class="t-collapse btn-color fa fa-chevron-down"
                                        href="javascript:;"
                                    ></a>
                                    <a
                                        class="t-close btn-color fa fa-times"
                                        href="javascript:;"
                                    ></a>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="recent-report__chart">
                                    <div id="chart2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
        {/* <div class="row">
                    <div class="col-lg-3 col-md-6 col-12 col-sm-6">
                        <div class="blogThumb">
                            <div class="thumb-center">
                                <img
                                    class="img-responsive"
                                    alt="user"
                                    src="../assets/img/course/course1.jpg"
                                />
                            </div>
                            <div class="course-box">
                                <h4>PHP Development Course</h4>
                                <div class="text-muted">
                                    <span class="m-r-10">April 23</span>
                                    <a class="course-likes m-l-10" href="#">
                                        <i class="fa fa-heart-o"></i> 654
                                    </a>
                                </div>
                                <p>
                                    <span>
                                        <i class="ti-alarm-clock"></i> Duration:
                                        6 Months
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <i class="ti-user"></i> Professor: Jane
                                        Doe
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <i class="fa fa-graduation-cap"></i>{" "}
                                        Students: 200+
                                    </span>
                                </p>
                                <button
                                    type="button"
                                    class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-info"
                                >
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-12 col-sm-6 ">
                        <div class="blogThumb">
                            <div class="thumb-center">
                                <img
                                    class="img-responsive"
                                    alt="user"
                                    src="../assets/img/course/course2.jpg"
                                />
                            </div>
                            <div class="course-box">
                                <h4>PHP Development Course</h4>
                                <div class="text-muted">
                                    <span class="m-r-10">April 23</span>
                                    <a class="course-likes m-l-10" href="#">
                                        <i class="fa fa-heart-o"></i> 654
                                    </a>
                                </div>
                                <p>
                                    <span>
                                        <i class="ti-alarm-clock"></i> Duration:
                                        6 Months
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <i class="ti-user"></i> Professor: Jane
                                        Doe
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <i class="fa fa-graduation-cap"></i>{" "}
                                        Students: 200+
                                    </span>
                                </p>
                                <button
                                    type="button"
                                    class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-info"
                                >
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-12 col-sm-6">
                        <div class="blogThumb">
                            <div class="thumb-center">
                                <img
                                    class="img-responsive"
                                    alt="user"
                                    src="../assets/img/course/course3.jpg"
                                />
                            </div>
                            <div class="course-box">
                                <h4>PHP Development Course</h4>
                                <div class="text-muted">
                                    <span class="m-r-10">April 23</span>
                                    <a class="course-likes m-l-10" href="#">
                                        <i class="fa fa-heart-o"></i> 654
                                    </a>
                                </div>
                                <p>
                                    <span>
                                        <i class="ti-alarm-clock"></i> Duration:
                                        6 Months
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <i class="ti-user"></i> Professor: Jane
                                        Doe
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <i class="fa fa-graduation-cap"></i>{" "}
                                        Students: 200+
                                    </span>
                                </p>
                                <button
                                    type="button"
                                    class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-info"
                                >
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-12 col-sm-6">
                        <div class="blogThumb">
                            <div class="thumb-center">
                                <img
                                    class="img-responsive"
                                    alt="user"
                                    src="../assets/img/course/course4.jpg"
                                />
                            </div>
                            <div class="course-box">
                                <h4>PHP Development Course</h4>
                                <div class="text-muted">
                                    <span class="m-r-10">April 23</span>
                                    <a class="course-likes m-l-10" href="#">
                                        <i class="fa fa-heart-o"></i> 654
                                    </a>
                                </div>
                                <p>
                                    <span>
                                        <i class="ti-alarm-clock"></i> Duration:
                                        6 Months
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <i class="ti-user"></i> Professor: Jane
                                        Doe
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <i class="fa fa-graduation-cap"></i>{" "}
                                        Students: 200+
                                    </span>
                                </p>
                                <button
                                    type="button"
                                    class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-info"
                                >
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                </div> */}
        {/* <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div class="inbox">
                            <div class="card">
                                <div class="card-body no-padding height-9">
                                    <div class="inbox-body">
                                        <div class="mail-list">
                                            <div class="compose-mail">
                                                <form method="post">
                                                    <div class="email-form">
                                                        <label
                                                            for="to"
                                                            class=""
                                                        >
                                                            To:
                                                        </label>{" "}
                                                        <input
                                                            type="text"
                                                            tabindex="1"
                                                            id="to"
                                                            class="form-control itemField"
                                                        />
                                                        <div class="compose-options">
                                                            <a
                                                                onclick="$(this).hide(); $('#cc').parent().removeClass('hidden'); $('#cc').focus();"
                                                                href="javascript:;"
                                                            >
                                                                Cc
                                                            </a>{" "}
                                                            <a
                                                                onclick="$(this).hide(); $('#bcc').parent().removeClass('hidden'); $('#bcc').focus();"
                                                                href="javascript:;"
                                                            >
                                                                Bcc
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div class="email-form hidden">
                                                        <label
                                                            for="cc"
                                                            class=""
                                                        >
                                                            Cc:
                                                        </label>{" "}
                                                        <input
                                                            type="text"
                                                            tabindex="2"
                                                            id="cc"
                                                            class="form-control itemField"
                                                        />
                                                    </div>
                                                    <div class="email-form hidden">
                                                        <label
                                                            for="bcc"
                                                            class=""
                                                        >
                                                            Bcc:
                                                        </label>{" "}
                                                        <input
                                                            type="text"
                                                            tabindex="2"
                                                            id="bcc"
                                                            class="form-control itemField"
                                                        />
                                                    </div>
                                                    <div class="email-form">
                                                        <label
                                                            for="subject"
                                                            class=""
                                                        >
                                                            Subject:
                                                        </label>{" "}
                                                        <input
                                                            type="text"
                                                            tabindex="1"
                                                            id="subject"
                                                            class="form-control itemField"
                                                        />
                                                    </div>
                                                    <div class="mt-4">
                                                        <div id="summernote"></div>
                                                        <input
                                                            type="file"
                                                            class="default"
                                                            multiple
                                                        />
                                                    </div>
                                                    <div class="box-footer clearfix">
                                                        <button
                                                            type="button"
                                                            class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-primary pull-right"
                                                        >
                                                            Send{" "}
                                                            <i class="fa fa-paper-plane-o"></i>
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div class="card-box">
                            <div class="card-head">
                                <header>Activity Feed</header>
                                <button
                                    id="feedMenu"
                                    class="mdl-button mdl-js-button mdl-button--icon pull-right"
                                    data-upgraded=",MaterialButton"
                                >
                                    <i class="material-icons">more_vert</i>
                                </button>
                                <ul
                                    class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                                    data-mdl-for="feedMenu"
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
                                </ul>
                            </div>
                            <div class="card-body ">
                                <ul class="feedBody">
                                    <li class="active-feed">
                                        <div class="feed-user-img">
                                            <img
                                                src="../assets/img/std/std1.jpg"
                                                class="img-radius "
                                                alt="User-Profile-Image"
                                            />
                                        </div>
                                        <h6>
                                            <span class="feedLblStyle lblFileStyle">
                                                File
                                            </span>{" "}
                                            Sarah Smith{" "}
                                            <small class="text-muted">
                                                6 hours ago
                                            </small>
                                        </h6>
                                        <p class="m-b-15 m-t-15">
                                            hii John, I have upload doc related
                                            to task.
                                        </p>
                                    </li>
                                    <li class="diactive-feed">
                                        <div class="feed-user-img">
                                            <img
                                                src="../assets/img/std/std2.jpg"
                                                class="img-radius "
                                                alt="User-Profile-Image"
                                            />
                                        </div>
                                        <h6>
                                            <span class="feedLblStyle lblTaskStyle">
                                                Task{" "}
                                            </span>{" "}
                                            Jalpa Joshi
                                            <small class="text-muted">
                                                5 hours ago
                                            </small>
                                        </h6>
                                        <p class="m-b-15 m-t-15">
                                            Please do as specify. Let me know if
                                            you have any query.
                                        </p>
                                    </li>
                                    <li class="diactive-feed">
                                        <div class="feed-user-img">
                                            <img
                                                src="../assets/img/std/std3.jpg"
                                                class="img-radius "
                                                alt="User-Profile-Image"
                                            />
                                        </div>
                                        <h6>
                                            <span class="feedLblStyle lblCommentStyle">
                                                comment
                                            </span>{" "}
                                            Lina Smith
                                            <small class="text-muted">
                                                6 hours ago
                                            </small>
                                        </h6>
                                        <p class="m-b-15 m-t-15">
                                            Hey, How are you??
                                        </p>
                                    </li>
                                    <li class="active-feed">
                                        <div class="feed-user-img">
                                            <img
                                                src="../assets/img/std/std4.jpg"
                                                class="img-radius "
                                                alt="User-Profile-Image"
                                            />
                                        </div>
                                        <h6>
                                            <span class="feedLblStyle lblReplyStyle">
                                                Reply
                                            </span>{" "}
                                            Jacob Ryan
                                            <small class="text-muted">
                                                7 hours ago
                                            </small>
                                        </h6>
                                        <p class="m-b-15 m-t-15">
                                            I am fine. You??
                                        </p>
                                    </li>
                                    <li class="active-feed">
                                        <div class="feed-user-img">
                                            <img
                                                src="../assets/img/std/std5.jpg"
                                                class="img-radius "
                                                alt="User-Profile-Image"
                                            />
                                        </div>
                                        <h6>
                                            <span class="feedLblStyle lblFileStyle">
                                                File
                                            </span>{" "}
                                            Sarah Smith{" "}
                                            <small class="text-muted">
                                                6 hours ago
                                            </small>
                                        </h6>
                                        <p class="m-b-15 m-t-15">
                                            hii John, I have upload doc related
                                            to task.
                                        </p>
                                    </li>
                                    <li class="diactive-feed">
                                        <div class="feed-user-img">
                                            <img
                                                src="../assets/img/std/std6.jpg"
                                                class="img-radius "
                                                alt="User-Profile-Image"
                                            />
                                        </div>
                                        <h6>
                                            <span class="feedLblStyle lblTaskStyle">
                                                Task{" "}
                                            </span>{" "}
                                            Jalpa Joshi
                                            <small class="text-muted">
                                                5 hours ago
                                            </small>
                                        </h6>
                                        <p class="m-b-15 m-t-15">
                                            Please do as specify. Let me know if
                                            you have any query.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div class="card-box">
                            <div class="card-head">
                                <header>Exam Toppers</header>
                                <button
                                    id="panel-button8"
                                    class="mdl-button mdl-js-button mdl-button--icon pull-right"
                                    data-upgraded=",MaterialButton"
                                >
                                    <i class="material-icons">more_vert</i>
                                </button>
                                <ul
                                    class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                                    data-mdl-for="panel-button8"
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
                                </ul>
                            </div>
                            <div class="card-body ">
                                <div class="table-responsive">
                                    <table class="table table-striped custom-table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Roll No</th>
                                                <th>Name</th>
                                                <th>Graph</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>23</td>
                                                <td>John Smith</td>
                                                <td>
                                                    <div id="sparkline"></div>
                                                </td>
                                                <td>
                                                    <a
                                                        href="javascript:void(0)"
                                                        class=""
                                                        data-bs-toggle="tooltip"
                                                        title="Edit"
                                                    >
                                                        <i class="fa fa-check"></i>
                                                    </a>
                                                    <a
                                                        href="javascript:void(0)"
                                                        class="text-inverse"
                                                        title="Delete"
                                                        data-bs-toggle="tooltip"
                                                    >
                                                        <i class="fa fa-trash"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>12</td>
                                                <td>Sneha Pandit</td>
                                                <td>
                                                    <div id="sparkline1"></div>
                                                </td>
                                                <td>
                                                    <a
                                                        href="javascript:void(0)"
                                                        class=""
                                                        data-bs-toggle="tooltip"
                                                        title="Edit"
                                                    >
                                                        <i class="fa fa-check"></i>
                                                    </a>
                                                    <a
                                                        href="javascript:void(0)"
                                                        class="text-inverse"
                                                        title="Delete"
                                                        data-bs-toggle="tooltip"
                                                    >
                                                        <i class="fa fa-trash"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>45</td>
                                                <td>Sarah Smith</td>
                                                <td>
                                                    <div id="sparkline2"></div>
                                                </td>
                                                <td>
                                                    <a
                                                        href="javascript:void(0)"
                                                        class=""
                                                        data-bs-toggle="tooltip"
                                                        title="Edit"
                                                    >
                                                        <i class="fa fa-check"></i>
                                                    </a>
                                                    <a
                                                        href="javascript:void(0)"
                                                        class="text-inverse"
                                                        title="Delete"
                                                        data-bs-toggle="tooltip"
                                                    >
                                                        <i class="fa fa-trash"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>34</td>
                                                <td>John Deo</td>
                                                <td>
                                                    <div id="sparkline3"></div>
                                                </td>
                                                <td>
                                                    <a
                                                        href="javascript:void(0)"
                                                        class=""
                                                        data-bs-toggle="tooltip"
                                                        title="Edit"
                                                    >
                                                        <i class="fa fa-check"></i>
                                                    </a>
                                                    <a
                                                        href="javascript:void(0)"
                                                        class="text-inverse"
                                                        title="Delete"
                                                        data-bs-toggle="tooltip"
                                                    >
                                                        <i class="fa fa-trash"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>15</td>
                                                <td>Jay Soni</td>
                                                <td>
                                                    <div id="sparkline4"></div>
                                                </td>
                                                <td>
                                                    <a
                                                        href="javascript:void(0)"
                                                        class=""
                                                        data-bs-toggle="tooltip"
                                                        title="Edit"
                                                    >
                                                        <i class="fa fa-check"></i>
                                                    </a>
                                                    <a
                                                        href="javascript:void(0)"
                                                        class="text-inverse"
                                                        title="Delete"
                                                        data-bs-toggle="tooltip"
                                                    >
                                                        <i class="fa fa-trash"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div class="card-box">
                            <div class="card-head">
                                <header>Todo List</header>
                                <button
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
                                </ul>
                            </div>
                            <div class="card-body ">
                                <ul
                                    class="to-do-list ui-sortable"
                                    id="sortable-todo"
                                >
                                    <li class="clearfix">
                                        <div class="todo-check pull-left">
                                            <input
                                                type="checkbox"
                                                value="None"
                                                id="todo-check1"
                                            />
                                            <label for="todo-check1"></label>
                                        </div>
                                        <p class="todo-title">
                                            Add fees details in system
                                        </p>
                                        <div class="todo-actionlist pull-right clearfix">
                                            <a href="#" class="todo-remove">
                                                <i class="fa fa-times"></i>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="clearfix">
                                        <div class="todo-check pull-left">
                                            <input
                                                type="checkbox"
                                                value="None"
                                                id="todo-check2"
                                            />
                                            <label for="todo-check2"></label>
                                        </div>
                                        <p class="todo-title">
                                            Announcement for holiday
                                        </p>
                                        <div class="todo-actionlist pull-right clearfix">
                                            <a href="#" class="todo-remove">
                                                <i class="fa fa-times"></i>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="clearfix">
                                        <div class="todo-check pull-left">
                                            <input
                                                type="checkbox"
                                                value="None"
                                                id="todo-check3"
                                            />
                                            <label for="todo-check3"></label>
                                        </div>
                                        <p class="todo-title">
                                            call bus driver
                                        </p>
                                        <div class="todo-actionlist pull-right clearfix">
                                            <a href="#" class="todo-remove">
                                                <i class="fa fa-times"></i>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="clearfix">
                                        <div class="todo-check pull-left">
                                            <input
                                                type="checkbox"
                                                value="None"
                                                id="todo-check4"
                                            />
                                            <label for="todo-check4"></label>
                                        </div>
                                        <p class="todo-title">School picnic</p>
                                        <div class="todo-actionlist pull-right clearfix">
                                            <a href="#" class="todo-remove">
                                                <i class="fa fa-times"></i>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="clearfix">
                                        <div class="todo-check pull-left">
                                            <input
                                                type="checkbox"
                                                value="None"
                                                id="todo-check5"
                                            />
                                            <label for="todo-check5"></label>
                                        </div>
                                        <p class="todo-title">
                                            Exam time table generate
                                        </p>
                                        <div class="todo-actionlist pull-right clearfix">
                                            <a href="#" class="todo-remove">
                                                <i class="fa fa-times"></i>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> */}
        {/* <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <div class="card  card-box">
                            <div class="card-head">
                                <header>New Student List</header>
                                <div class="tools">
                                    <a
                                        class="fa fa-repeat btn-color box-refresh"
                                        href="javascript:;"
                                    ></a>
                                    <a
                                        class="t-collapse btn-color fa fa-chevron-down"
                                        href="javascript:;"
                                    ></a>
                                    <a
                                        class="t-close btn-color fa fa-times"
                                        href="javascript:;"
                                    ></a>
                                </div>
                            </div>
                            <div class="card-body ">
                                <div class="table-wrap">
                                    <div class="table-responsive">
                                        <table
                                            class="table display product-overview mb-30"
                                            id="support_table"
                                        >
                                            <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Name</th>
                                                    <th>Assigned Professor</th>
                                                    <th>Date Of Admit</th>
                                                    <th>Fees</th>
                                                    <th>Branch</th>
                                                    <th>Edit</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Jens Brincker</td>
                                                    <td>Kenny Josh</td>
                                                    <td>27/05/2016</td>
                                                    <td>
                                                        <span class="label label-sm label-success">
                                                            paid
                                                        </span>
                                                    </td>
                                                    <td>Mechanical</td>
                                                    <td>
                                                        <a
                                                            href="javascript:void(0)"
                                                            class=""
                                                            data-bs-toggle="tooltip"
                                                            title="Edit"
                                                        >
                                                            <i class="fa fa-check"></i>
                                                        </a>
                                                        <a
                                                            href="javascript:void(0)"
                                                            class="text-inverse"
                                                            title="Delete"
                                                            data-bs-toggle="tooltip"
                                                        >
                                                            <i class="fa fa-trash"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Mark Hay</td>
                                                    <td> Mark</td>
                                                    <td>26/05/2017</td>
                                                    <td>
                                                        <span class="label label-sm label-warning">
                                                            unpaid{" "}
                                                        </span>
                                                    </td>
                                                    <td>Science</td>
                                                    <td>
                                                        <a
                                                            href="javascript:void(0)"
                                                            class=""
                                                            data-bs-toggle="tooltip"
                                                            title="Edit"
                                                        >
                                                            <i class="fa fa-check"></i>
                                                        </a>
                                                        <a
                                                            href="javascript:void(0)"
                                                            class="text-inverse"
                                                            title="Delete"
                                                            data-bs-toggle="tooltip"
                                                        >
                                                            <i class="fa fa-trash"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Anthony Davie</td>
                                                    <td>Cinnabar</td>
                                                    <td>21/05/2016</td>
                                                    <td>
                                                        <span class="label label-sm label-success ">
                                                            paid
                                                        </span>
                                                    </td>
                                                    <td>Commerce</td>
                                                    <td>
                                                        <a
                                                            href="javascript:void(0)"
                                                            class=""
                                                            data-bs-toggle="tooltip"
                                                            title="Edit"
                                                        >
                                                            <i class="fa fa-check"></i>
                                                        </a>
                                                        <a
                                                            href="javascript:void(0)"
                                                            class="text-inverse"
                                                            title="Delete"
                                                            data-bs-toggle="tooltip"
                                                        >
                                                            <i class="fa fa-trash"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>David Perry</td>
                                                    <td>Felix </td>
                                                    <td>20/04/2016</td>
                                                    <td>
                                                        <span class="label label-sm label-danger">
                                                            unpaid
                                                        </span>
                                                    </td>
                                                    <td>Mechanical</td>
                                                    <td>
                                                        <a
                                                            href="javascript:void(0)"
                                                            class=""
                                                            data-bs-toggle="tooltip"
                                                            title="Edit"
                                                        >
                                                            <i class="fa fa-check"></i>
                                                        </a>
                                                        <a
                                                            href="javascript:void(0)"
                                                            class="text-inverse"
                                                            title="Delete"
                                                            data-bs-toggle="tooltip"
                                                        >
                                                            <i class="fa fa-trash"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>Anthony Davie</td>
                                                    <td>Beryl</td>
                                                    <td>24/05/2016</td>
                                                    <td>
                                                        <span class="label label-sm label-success ">
                                                            paid
                                                        </span>
                                                    </td>
                                                    <td>M.B.A.</td>
                                                    <td>
                                                        <a
                                                            href="javascript:void(0)"
                                                            class=""
                                                            data-bs-toggle="tooltip"
                                                            title="Edit"
                                                        >
                                                            <i class="fa fa-check"></i>
                                                        </a>
                                                        <a
                                                            href="javascript:void(0)"
                                                            class="text-inverse"
                                                            title="Delete"
                                                            data-bs-toggle="tooltip"
                                                        >
                                                            <i class="fa fa-trash"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td>Alan Gilchrist</td>
                                                    <td>Joshep</td>
                                                    <td>22/05/2016</td>
                                                    <td>
                                                        <span class="label label-sm label-warning ">
                                                            unpaid
                                                        </span>
                                                    </td>
                                                    <td>Science</td>
                                                    <td>
                                                        <a
                                                            href="javascript:void(0)"
                                                            class=""
                                                            data-bs-toggle="tooltip"
                                                            title="Edit"
                                                        >
                                                            <i class="fa fa-check"></i>
                                                        </a>
                                                        <a
                                                            href="javascript:void(0)"
                                                            class="text-inverse"
                                                            title="Delete"
                                                            data-bs-toggle="tooltip"
                                                        >
                                                            <i class="fa fa-trash"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>7</td>
                                                    <td>Mark Hay</td>
                                                    <td>Jayesh</td>
                                                    <td>18/06/2016</td>
                                                    <td>
                                                        <span class="label label-sm label-success ">
                                                            paid
                                                        </span>
                                                    </td>
                                                    <td>Commerce</td>
                                                    <td>
                                                        <a
                                                            href="javascript:void(0)"
                                                            class=""
                                                            data-bs-toggle="tooltip"
                                                            title="Edit"
                                                        >
                                                            <i class="fa fa-check"></i>
                                                        </a>
                                                        <a
                                                            href="javascript:void(0)"
                                                            class="text-inverse"
                                                            title="Delete"
                                                            data-bs-toggle="tooltip"
                                                        >
                                                            <i class="fa fa-trash"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>8</td>
                                                    <td>Sue Woodger</td>
                                                    <td>Sharma</td>
                                                    <td>17/05/2016</td>
                                                    <td>
                                                        <span class="label label-sm label-danger">
                                                            unpaid
                                                        </span>
                                                    </td>
                                                    <td>Mechanical</td>
                                                    <td>
                                                        <a
                                                            href="javascript:void(0)"
                                                            class=""
                                                            data-bs-toggle="tooltip"
                                                            title="Edit"
                                                        >
                                                            <i class="fa fa-check"></i>
                                                        </a>
                                                        <a
                                                            href="javascript:void(0)"
                                                            class="text-inverse"
                                                            title="Delete"
                                                            data-bs-toggle="tooltip"
                                                        >
                                                            <i class="fa fa-trash"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
        <div
          class="row"
          style={{
            marginBottom: "81px",
          }}
        >
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
                      notifications.map((notification) => {
                        return (
                          <>
                            <div
                              style={{
                                display: "flex",

                                alignItems: "center",
                              }}
                            >
                              <i class="fa fa-circle user-online"></i>
                              <h4
                                style={{
                                  marginRight: "20px",
                                  marginLeft: "20px",
                                }}
                              >
                                {notification.title}
                              </h4>
                              <span>{notification.date.substr(0, 10)}</span>
                            </div>
                            <p>{notification.description}</p>
                          </>
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

export default Dashboard;
