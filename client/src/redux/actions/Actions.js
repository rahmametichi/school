import { GET_EXAMS } from "../constants/actions-types";
import axios from "axios";
import { url } from "../../utils/index";
export const getExams = (id) => (dispatch) => {
  axios
    .get(`${url}/teacher/getExamsDate/${id}`)
    .then((response) => dispatch({ type: GET_EXAMS, payload: response.data }))
    .catch((err) => console.log(err));
};
export const addExam = (payload) => (dispatch) => {
  axios
    .post(`${url}/teacher/addExamDate`, payload.newExam)
    .then(() => dispatch(getExams(payload.id)))
    .catch((err) => console.log(err));
};

export const editExam = (payload) => (dispatch) => {
  axios
    .put(`${url}/teacher/editExam/${payload.selectId}`, {
      from: payload.newEdit,
    })
    .then((res) => {
      dispatch(getExams(payload.id));
    })
    .catch((err) => console.log(err));
};

export const deleteExam = (payload) => (dispatch) => {
  axios
    .delete(`${url}/teacher/deleteExam/${payload.selectId}`)
    .then((res) => {
      dispatch(getExams(payload.id));
    })
    .catch((err) => {
      console.log(err);
    });
};
