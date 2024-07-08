import {takeEvery, put, call, takeLatest} from 'redux-saga/effects'
import {LOGIN, REGISTER, SESSION, SESSIONREQUEST} from '../constants';
import { fetchUsers, loginRequest, postData ,session} from '../api';



function* login(action){
  console.log(action)
    try{
       let response = yield call(loginRequest, action.data)
       //let sessionResponse = yield call(session)
      //  console.log(action.data)
        console.log(response.data)

     // console.log(sessionResponse.data)
      // yield put({type:SESSION,data:sessionResponse.data})
       yield put({type:LOGIN,data:response.data})
      // console.log(data)     
    }
   catch(err){ 
     console.log('error')
   } 
 
   
}

function* sessionCheck(){
  // console.log(action)
    try{ 
       let sessionResponse = yield call(session)
      //  console.log(action.data)
      //  console.log(sessionResponse.data)

      console.log(sessionResponse) 

       yield put({type:SESSION,data:sessionResponse.data})
      // yield put({type:LOGIN,data:response.data})
      // console.log(data)     
    }
   catch(err){ 
     console.log('error')
   } 
 
   
}

export function* sessionSaga(){
  yield takeLatest(SESSIONREQUEST,sessionCheck)

}

export function* loginSaga(){
   yield takeLatest(LOGIN,login)

}
