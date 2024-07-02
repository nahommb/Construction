import {takeEvery, put, call, takeLatest} from 'redux-saga/effects'
import { addPreviousWork } from '../api'
import { ADDPREVIOUSWORK, GETPREVIOUSWORK } from '../constants'

function* Add(action){
    console.log(action)
    try{
        const response = yield call(addPreviousWork, action.data)
        console.log(action.data)
        console.log(response)
        
       yield put({type:GETPREVIOUSWORK,data:response.data})
       // console.log(data)     
     }
    catch(err){ 
      console.log(err)
    } 
}
function* addSaga(){
    yield takeEvery(ADDPREVIOUSWORK,Add)
 
 }
 export default addSaga;