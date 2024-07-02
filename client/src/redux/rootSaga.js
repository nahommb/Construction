import { all } from "redux-saga/effects";
import loginSaga from "./registerationState/authenticationSaga";
import addSaga from "./previousWorkState/previousWorkSaga";

export default function* rootSaga(){
  yield all([
    loginSaga(),
    addSaga()
  ])
} 