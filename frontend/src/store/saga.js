import {
  takeLatest,
  put,
  all,
  // call
} from 'redux-saga/effects'
import { GET_ALL_USERS, SUBMIT_USER_FORM } from './actions/users'
import { fetchAllUsers, submitUserForm } from './sagas/users'
import { GET_DONATIONS_FOR_MONTH } from './actions/donations'
import { fetchDonationsForMonth } from './sagas/donations'

// add Saga below
export default function* rootSaga() {
  yield all([
    takeLatest(GET_ALL_USERS, fetchAllUsers),
    takeLatest(SUBMIT_USER_FORM, submitUserForm),
    takeLatest(GET_DONATIONS_FOR_MONTH, fetchDonationsForMonth),
  ])
}
