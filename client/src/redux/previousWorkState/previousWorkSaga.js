import {takeEvery, put, call, takeLatest} from 'redux-saga/effects'
import { addPreviousWork , deleteRequest, previousWork} from '../api'
import { ADDPREVIOUSWORK, DELETEPREVIOUSWORK, DELETEPREVIOUSWORKRESPONSE, GETPREVIOUSWORK,GETPREVIOUSWORKDATA, GETPREVIOUSWORKRESPONSE } from '../constants'

function* Add(action){
    console.log(action)
    try{
        const response = yield call(addPreviousWork, action.data)
        console.log(action.data)
        console.log(response)
        
       yield put({type:GETPREVIOUSWORKRESPONSE,data:response.data})
       // console.log(data)     
     }
    catch(err){  
      console.log(err)
    } 
}

function* Get(){
  try{
    const response = yield call(previousWork)
    //console.log(response)

    yield put({type:GETPREVIOUSWORKDATA,data:response.data})
  }
  catch(err){
   console.error(err)
  }
}

function* Delete(action){
  console.log(action)
  try{
    const response = yield call(deleteRequest,action.data)
    console.log(response)

     yield put({type:DELETEPREVIOUSWORKRESPONSE,data:response.data})
   }
  catch(err){
   console.error(err)
  }
}

export function* deleteSaga(){
  yield takeLatest(DELETEPREVIOUSWORK,Delete)
}
export function* getSaga(){
   yield takeLatest(GETPREVIOUSWORK,Get)
}
export function* addSaga(){
    yield takeEvery(ADDPREVIOUSWORK,Add)
   
 }
