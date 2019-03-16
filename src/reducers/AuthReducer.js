import { EMAIL_CHANGED, PASSWORD_CHANGED } from "../components/actions/types";

const INITIAL_STATE = {
    email: '',
    password: ''
};

export default (state = INITIAL_STATE, action) => {
    // debugger;
    switch (action.type) {

        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        default:
            return state;
    }
}