import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Loader from "react-loader-spinner";
import { url } from "../../../utils/index";

import "./Exam.css";
import { useState, useEffect } from "react";
import axios from "axios";
const Exam = ({ toggle }) => {
  const [examDate, setExamDate] = useState([]);
  // Function Axios Get All Exams Date
  /*************************************/
  const getExamsDate = async () => {
    const Exams = await axios.get(`${url}/administration/GetAllExamsDate `);
    setExamDate(Exams.data.data);
  };
  // /*************************************/
  console.log(examDate);
  useEffect(() => {
    getExamsDate();
  }, []);

  const events = examDate.map((exam) => {
    const firstName = exam.addedBy.firstName;
    const lastName = exam.addedBy.lastName;
    const subject = exam.addedBy.subject;
    const classroom = exam.classroom;
    const examStart = exam.from;
    const examEnd = exam.to;
    const data = {
      id: 1,
      color: "#fd3153",
      date: examStart,
      to: examEnd,
      title: `Examen ${subject} added By Mr ${firstName} ${lastName} To ${classroom}`,
    };
    return data;
  });

  // const events = [
  //     {
  //         id: 1,
  //         color: "#fd3153",
  //         from: "2021-08-07T18:00:00+00:00",
  //         to: `${examDate[0].to}`,
  //         title: `title :   ${examDate[0].title} ${examDate[0].classroom} ${examDate[0].addedBy.firstName}`,
  //     },
  //     {
  //         id: 2,
  //         color: "#1ccb9e",
  //         from: "2021-08-08T13:00:00+00:00",
  //         to: "2021-08-08T14:01:00+00:00",
  //         title: "This is another event for test",
  //     },
  // ];
  console.log(events);

  return (
    // <>
    //     {examDate.length > 0 ? (
    //         <div className={toggle ? "calendar" : "calendar close-admin"}>
    //             <FullCalendar
    //                 plugins={[
    //                     dayGridPlugin,
    //                     timeGridPlugin,
    //                     interactionPlugin,
    //                 ]}
    //                 headerToolbar={{
    //                     left: "prev,next today",
    //                     center: "title",
    //                     right: "dayGridMonth,timeGridDay",
    //                 }}
    //                 initialView="dayGridMonth"
    //                 events={events}
    //             />
    //         </div>
    //     ) : (
    //         <div className="loader-exam-admin">
    //             <Loader
    //                 type="ThreeDots"
    //                 color="#00BFFF"
    //                 height={150}
    //                 width={150}
    //             />
    //         </div>
    //     )}
    // </>
    <div class="page-content-wrapper">
      <div class="page-content">
        <div class="page-bar">
          <div class="page-title-breadcrumb">
            <div class=" pull-left">
              <div class="page-title">Events</div>
            </div>
            {/* <ol class="breadcrumb page-breadcrumb pull-right">
                            <li>
                                <i class="fa fa-home"></i>&nbsp;
                                <a class="parent-item" href="index.html">
                                    Home
                                </a>
                                &nbsp;<i class="fa fa-angle-right"></i>
                            </li>
                            <li class="active">Events</li>
                        </ol> */}
          </div>
        </div>
        <div class="row">
          <div class="col-md-2 col-sm-12">
            {/* <div class="card-box">
                            <div class="card-head">
                                <header>Draggable Event</header>
                            </div>
                            <div class="card-body">
                                <div id="external-events">
                                    <div
                                        class="fc-event fc-event-success"
                                        data-class="fc-event-success"
                                    >
                                        Work
                                    </div>
                                    <div
                                        class="fc-event fc-event-warning"
                                        data-class="fc-event-warning"
                                    >
                                        Personal
                                    </div>
                                    <div
                                        class="fc-event fc-event-primary"
                                        data-class="fc-event-primary"
                                    >
                                        Important
                                    </div>
                                    <div
                                        class="fc-event fc-event-danger"
                                        data-class="fc-event-danger"
                                    >
                                        Travel
                                    </div>
                                    <div
                                        class="fc-event fc-event-info"
                                        data-class="fc-event-info"
                                    >
                                        Friends
                                    </div>
                                    <br />
                                    <div class="custom-control custom-checkbox">
                                        <input
                                            type="checkbox"
                                            class="custom-control-input"
                                            id="drop-remove"
                                        />
                                        <label
                                            class="custom-control-label"
                                            for="drop-remove"
                                        >
                                            Remove after drop
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div> */}
          </div>
          <div class="col-md-9 col-sm-12">
            <div class="card">
              <div class="card-head">
                <header>Calendar</header>
              </div>
              <div class="card-body">
                <div class="panel-body">
                  <div id="calendar" class="has-toolbar">
                    {/* <FullCalendar
                                            plugins={[dayGridPlugin]}
                                            initialView="dayGridMonth"
                                        /> */}

                    {/* <FullCalendar
                                            plugins={[
                                                dayGridPlugin,
                                                timeGridPlugin,
                                                interactionPlugin,
                                            ]}
                                            headerToolbar={{
                                                left: "prev,next today",
                                                center: "title",
                                                right: "dayGridMonth,timeGridWeek,timeGridDay",
                                            }}
                                            initialView="dayGridMonth"
                                            editable={true}
                                            selectable={true}
                                            selectMirror={true}
                                            dayMaxEvents={true}
                                            dateClick={handleDateClick}
                                        /> */}
                    <div>
                      <FullCalendar
                        plugins={[
                          dayGridPlugin,
                          timeGridPlugin,
                          interactionPlugin,
                        ]}
                        headerToolbar={{
                          left: "prev,next today",
                          center: "title",
                          right: "dayGridMonth,timeGridWeek,timeGridDay",
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        events={events}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="modal fade"
          id="exampleModal1"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="addEventTitle">
                  Add Event
                </h5>
                <h5 class="modal-title" id="editEventTitle">
                  Edit Event
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form class="">
                  <input type="hidden" id="id" name="id" />
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Title</label>
                        <div class="input-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Title"
                            name="title"
                            id="title"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 mb-4">
                      <label>Category</label>
                      <select class="form-select" id="categorySelect">
                        <option id="work" value="fc-event-success">
                          Work
                        </option>
                        <option id="personal" value="fc-event-warning">
                          Personal
                        </option>
                        <option id="important" value="fc-event-primary">
                          Important
                        </option>
                        <option id="travel" value="fc-event-danger">
                          Travel
                        </option>
                        <option id="friends" value="fc-event-info">
                          Friends
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <div class="form-group">
                        <label>Start Date</label>
                        <input
                          type="text"
                          class="form-control datetimepicker"
                          placeholder="Start Date"
                          name="starts_at"
                          id="starts-at"
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="form-group">
                        <label>End Date</label>
                        <input
                          type="text"
                          class="form-control datetimepicker"
                          placeholder="End Date"
                          name="ends_at"
                          id="ends-at"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Event Details</label>
                        <textarea
                          id="eventDetails"
                          name="eventDetails"
                          placeholder="Enter Details"
                          class="form-control"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer bg-whitesmoke pr-0">
                    <button
                      type="button"
                      class="btn btn-round btn-primary"
                      id="add-event"
                    >
                      Add Event
                    </button>
                    <button
                      type="button"
                      class="btn btn-round btn-primary"
                      id="edit-event"
                    >
                      Edit Event
                    </button>
                    <button
                      type="button"
                      id="close"
                      class="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
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

export default Exam;
