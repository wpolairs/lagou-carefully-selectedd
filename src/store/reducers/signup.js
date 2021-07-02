import { handleActions } from 'redux-actions';
import { signup, signup_fail, signup_success } from '../actions/signup';

const initialState = {
    loading: false,
    loaded: false,
    success: false,
    message: "",
}
const signupReducer = handleActions({
    [signup]: () => ({
        loading: true,
        loaded: false,
        success: false,
        message: "",
    }),
    [signup_success]: (state, action) => ({
        loading: false,
        loaded: true,
        success: true,
        message: action.payload,
    }),
    [signup_fail]: (state, action) => ({
        loading: false,
        loaded: true,
        success: false,
        message: action.payload,
    }),
}, initialState);

export default signupReducer;