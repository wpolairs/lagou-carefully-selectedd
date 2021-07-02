import { all, call } from 'redux-saga/effects';
import signupSaga from './signup';

export default function* rootSaga() {
    yield all([call(signupSaga)])
}