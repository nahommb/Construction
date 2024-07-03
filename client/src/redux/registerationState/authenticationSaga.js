import {takeEvery, put, call, takeLatest} from 'redux-saga/effects'
import {LOGIN, REGISTER, SESSION} from '../constants';
import { fetchUsers, loginRequest, postData ,session} from '../api';



function* login(action){
  console.log(action)
    try{
       let response = yield call(loginRequest, action.data)
       let sessionResponse = yield call(session)
      //  console.log(action.data)
      //  console.log(response.data)

      console.log(sessionResponse.data)
       yield put({type:SESSION,data:sessionResponse.data})
       yield put({type:LOGIN,data:response.data})
      // console.log(data)     
    }
   catch(err){ 
     console.log('error')
   } 
 
   
}

function* loginSaga(){
   yield takeLatest(LOGIN,login)

}
export default loginSaga;