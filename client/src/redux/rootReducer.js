import { combineReducers } from "@reduxjs/toolkit";
import { authenticationData} from "./registerationState/authenticationReducer";
import { previousWorkData } from "./previousWorkState/previousWorkReducer";

export default combineReducers ({
    authenticationData,
    previousWorkData,
})