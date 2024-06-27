import {takeEvery, put, call, takeLatest} from 'redux-saga/effects'
import REGISTER from '../constants';
import { fetchUsers, postData } from '../api';



function* getData(action){
    try{
      // let data = yield call(fetchUsers) 
       let response = yield call(postData, action.data)
       console.log(action.data)
       console.log(response)
      // console.log(data)     
    }
   catch(err){ 
     console.log('errro')
   } 
 
  // console.log(dataa)
  // yield put({type:REGISTER,data})
}

function* productSaga(){
   yield takeLatest(REGISTER,getData)

}
export default productSaga;