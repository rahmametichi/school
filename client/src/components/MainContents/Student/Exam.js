import "./Exam.css";
import { useState, useEffect } from "react";
import jwt from "jwt-decode";
import axios from "axios";

import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { url } from "../../../utils/index";

const Exam = ({ toggle }) => {
  // hoook for the calendar events
  const [calendarEvents, setCalendarEvent] = useState({ calendar: [] });

  // get the student id from the localStorage
  const TOKEN = localStorage.getItem("JWT");
  const ID = jwt(TOKEN).id;

  // axios function to getting the Exams Date
  const GetStudentExamsDate = async () => {
    try {
      const CALENDAR = await axios.get(`${url}/student/getExamDate/${ID}`);
      setCalendarEvent({ calendar: CALENDAR.data.data });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    GetStudentExamsDate();
  }, []);

  console.log(calendarEvents);

  // calendar events
  const events = calendarEvents.calendar.map((calendar) => {
    const firstName = calendar.addedBy.firstName;
    const lastName = calendar.addedBy.lastName;
    const subject = calendar.addedBy.subject;
    const classroom = calendar.classroom;
    const examStart = calendar.from;
    const examEnd = calendar.to;
    const data = {
      id: 1,
      color: "#fd3153",
      date: examStart,
      to: examEnd,
      title: `Examen ${subject} added By Mr ${firstName} ${lastName} To ${classroom}`,
    };
    return data;
  });
  console.log(events);
  return (
    <div className={toggle ? "calendar-student" : "calendar-student-close"}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridDay",
        }}
        initialView="dayGridMonth"
        events={events}
      />
    </div>
  );
};

export default Exam;
