import { all } from "redux-saga/effects";
import loginSaga from "./registerationState/authenticationSaga";

export default function* rootSaga(){
  yield all([
    loginSaga()
  ])
} 