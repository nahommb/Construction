import {takeEvery, put, call, takeLatest} from 'redux-saga/effects'
import {LOGIN, REGISTER} from '../constants';
import { fetchUsers, loginRequest, postData } from '../api';



function* login(action){
    try{
       let response = yield call(loginRequest, action.data)
       console.log(action.data)
       console.log(response)
       
       yield put({type:LOGIN,response})
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