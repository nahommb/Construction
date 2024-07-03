import {takeEvery, put, call, takeLatest} from 'redux-saga/effects'
import { addPreviousWork , previousWork} from '../api'
import { ADDPREVIOUSWORK, GETPREVIOUSWORK,GETPREVIOUSWORKDATA, GETPREVIOUSWORKRESPONSE } from '../constants'

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
export function* getSaga(){
   yield takeLatest(GETPREVIOUSWORK,Get)
}
export function* addSaga(){
    yield takeEvery(ADDPREVIOUSWORK,Add)
   
 }
