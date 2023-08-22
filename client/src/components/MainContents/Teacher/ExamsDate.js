import "./ExamsDate.css";
// import Calendar from "react-calendar";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {
    getExams,
    addExam,
    editExam,
    deleteExam,
} from "../../../redux/actions/Actions";
import { useState, useEffect } from "react";
import axios from "axios";
import jwt from "jwt-decode";
import Loader from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const ExamsDate = ({ toggle }) => {
    const token = localStorage.getItem("JWT");
    const decoded_token = jwt(token);
    const id = decoded_token.id;
    const [newExam, setNewExam] = useState({
        addedBy: decoded_token.id,
        title: "",
        classroom: "",
        from: "",
    });

    // UseEffect for Get Classes
    /*******************/
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getExams(id));
        // eslint-disable-next-line
    }, []);
    /*******************/
    const Exams = useSelector((state) => state.ExamsReducer.Exams);
    const modalOut = () => {
        const modal_container = document.getElementById("modal-container");
        modal_container.classList.add("out");
    };
    const modalShow = () => {
        const modal_container = document.getElementById("modal-container");
        const examDate = document.getElementById("modal-body");
        modal_container.classList.remove("out");
        modal_container.classList.add("one");
        examDate.classList.add("modal-active");
    };

    const handleChange = (e) => {
        setNewExam({ ...newExam, [e.target.name]: e.target.value });
    };
    const handleSubmit = () => {
        if (newExam.title === "") {
            // alert("Field Empty Unauthorized");
            const title = document.getElementById("title");
            title.classList.add("error");
        } else if (newExam.title !== "" && newExam.classroom === "") {
            const classroom = document.getElementById("class");
            const title = document.getElementById("title");
            classroom.classList.add("error");
            title.classList.remove("error");
        } else if (newExam.from === "") {
            const date = document.getElementById("date");
            date.classList.add("error");
        } else {
            dispatch(addExam({ newExam, id }));
            const modal_container = document.getElementById("modal-container");
            modal_container.classList.add("out");
        }
    };
    console.log(newExam);
    const events = Exams.map((exam) => {
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
    const [appear, setAppear] = useState(true);

    setTimeout(() => {
        setAppear(false);
    }, 9000);
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };
    const [selectId, setSelectId] = useState();
    const selectChange = (e) => {
        setSelectId(e.target.value);
    };
    const selectEdit = Exams.map((exam) => {
        return (
            <option
                value={exam._id}
            >{`${exam.title} ${exam.classroom} ${exam.from} `}</option>
        );
    });
    const [newEdit, setNewEdit] = useState();
    const handleEdit = () => {
        dispatch(editExam({ newEdit, selectId, id }));
        setIsOpen(false);
    };
    const removeExam = () => {
        setIsOpen(false);
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger",
            },
            buttonsStyling: false,
        });

        swalWithBootstrapButtons
            .fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!",
                reverseButtons: true,
            })
            .then((result) => {
                if (result.isConfirmed) {
                    dispatch(deleteExam({ selectId, id }));

                    swalWithBootstrapButtons.fire(
                        "Deleted!",
                        "Your file has been deleted.",
                        "success"
                    );
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                        "Cancelled",
                        "Be Sure Before Click Delete Button :)",
                        "error"
                    );
                }
            });
    };
    return (
        <>
            {Exams.length > 0 ? (
                <div
                    className={
                        toggle ? "calendar-teacher" : "calendar-teacher close"
                    }
                >
                    <button className="btn-add-exam" onClick={modalShow}>
                        Add Exam
                    </button>

                    <button className="btn-edit-exam " onClick={toggleModal}>
                        Edit Exam
                    </button>
                    <FullCalendar
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                        ]}
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridDay",
                        }}
                        initialView="dayGridMonth"
                        events={events}
                    />
                </div>
            ) : appear ? (
                <div className="loader-teacher-exams">
                    <Loader
                        type="ThreeDots"
                        color="#00BFFF"
                        height={150}
                        width={150}
                    />
                </div>
            ) : (
                <div className="calendar-teacher">
                    <button className="btn-add-exam" onClick={modalShow}>
                        Add Exam
                    </button>
                    <FullCalendar
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                        ]}
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridDay",
                        }}
                        initialView="dayGridMonth"
                        events={[]}
                    />
                </div>
            )}
            <div id="modal-body">
                <div id="modal-container" class="">
                    <div class="modal-background">
                        <div class="modal">
                            <div class="modal-form-teacher">
                                <button
                                    className="modal-close-circle "
                                    onClick={modalOut}
                                >
                                    <i class="far fa-times-circle"></i>
                                </button>
                                <div class="title">Add Your Exam Date</div>
                                <div class="input-container ic1">
                                    <input
                                        id="title"
                                        name="title"
                                        class="form-teacher-input"
                                        type="text"
                                        onChange={handleChange}
                                        placeholder=" "
                                    />
                                    <div class="cut"></div>
                                    <label
                                        for="firstname"
                                        class="teacher-placeholder"
                                    >
                                        Title
                                    </label>
                                </div>
                                <div class="input-container ic2">
                                    <input
                                        id="class"
                                        name="classroom"
                                        class="form-teacher-input"
                                        type="text"
                                        onChange={handleChange}
                                        placeholder=" "
                                    />
                                    <div class="cut"></div>
                                    <label
                                        for="class"
                                        class="teacher-placeholder"
                                    >
                                        ClassName
                                    </label>
                                </div>
                                <div class="input-container ic2">
                                    <input
                                        id="date"
                                        name="from"
                                        class="form-teacher-input"
                                        type="datetime-local"
                                        onChange={handleChange}
                                        placeholder="  "
                                    />
                                    <div class="cut cut-short"></div>
                                    <label
                                        for="date"
                                        class="teacher-placeholder"
                                    >
                                        Date
                                    </label>
                                </div>

                                <button
                                    type="text"
                                    class="submit"
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* *************************************Ediiiiiiiit************************ */}
            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
            >
                <div className="inside-edit-modal">
                    <div class="modal-edit-title">Edit Or Delete Exam</div>
                    <Form.Select onChange={selectChange}>
                        <option>Select Exam</option>
                        {selectEdit}
                    </Form.Select>
                    <div class="input-container ic2">
                        <input
                            id="date"
                            name="from"
                            class="edit-modal-input"
                            type="datetime-local"
                            onChange={(e) => setNewEdit(e.target.value)}
                        />
                    </div>

                    <div className="btn-edit-modal">
                        <Button onClick={handleEdit} variant="success">
                            <span>EDIT</span>
                        </Button>
                        <Button onClick={removeExam} variant="secondary">
                            <span>DELETE</span>
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default ExamsDate;
