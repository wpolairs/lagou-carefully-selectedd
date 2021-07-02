import { takeEvery, put } from 'redux-saga/effects';
import { signup, signup_fail, signup_success } from '../actions/signup';
import axios from 'axios';

function* handleSignup(action) {
    try {
        yield axios.post('/signup', action.payload)
        yield put(signup_success());
    } catch (error) {
        yield put(signup_fail({message: "注册失败"}));
    }
}

export default function* signupSaga() {
    yield takeEvery(signup, handleSignup);
}