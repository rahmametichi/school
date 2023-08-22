import { GET_EXAMS } from "../constants/actions-types";

const initialState = {
    Exams: [],
};

const ExamsReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_EXAMS:
            return {
                ...state,
                Exams: payload.data,
            };
        default:
            return state;
    }
};

export default ExamsReducer;
