import {takeEvery, put, call, takeLatest} from 'redux-saga/effects'
import REGISTER from '../constants';
import { fetchUsers } from '../api';



function* getData(dataa){
    try{
       let data = yield call(fetchUsers) 
       console.log(data)    
    }
   catch(err){ 
 
   }
 
   console.log(dataa)
   yield put({type:REGISTER,data})
}

function* productSaga(){
   yield takeLatest(REGISTER,getData)

}
export default productSaga;