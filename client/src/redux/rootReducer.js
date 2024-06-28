import { combineReducers } from "@reduxjs/toolkit";
import { authenticationData} from "./registerationState/authenticationReducer";

export default combineReducers ({
    authenticationData,
})