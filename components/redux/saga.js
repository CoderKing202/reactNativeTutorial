import { put, takeEvery } from "redux-saga/effects"
import { USER_LIST, ADD_TO_CART, SET_USER_DATA } from "./constant"


function* user_list(){
    const url = "https://dummyjson.com/users"
    let data = yield fetch(url)
    data = yield data.json()
    yield put({type:SET_USER_DATA,data})
}
function* SagaData(){
 yield takeEvery(USER_LIST,user_list)
 }
 export default SagaData