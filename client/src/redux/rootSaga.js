import { all } from "redux-saga/effects";
import {loginSaga,sessionSaga} from "./registerationState/authenticationSaga";
import {addSaga,getSaga} from "./previousWorkState/previousWorkSaga";

export default function* rootSaga(){
  yield all([
    loginSaga(),
    addSaga(),
     getSaga(),
     sessionSaga()
  ])
} 