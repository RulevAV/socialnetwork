import {takeEvery,put,call} from "redux-saga/effects"
import {GetUsersApi, setUsersAC} from "../redux/Users-reducer";
import {usersAPI} from "./api";

function users(currentPage, pageSize){
    return usersAPI.getUsers(currentPage, pageSize);
}

function* workerLoudUsers(action){
    const data = yield call(users,action.currentPage,action.pageSize);

    yield put(setUsersAC(data));
}

export function* watchingLoadUsers(){
    yield takeEvery(GetUsersApi,workerLoudUsers);
}