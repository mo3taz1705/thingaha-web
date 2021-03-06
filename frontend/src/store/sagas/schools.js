import { call, put } from 'redux-saga/effects'
import {
  GET_ALL_SCHOOLS_SUCCESS,
  GET_ALL_SCHOOLS_FAILURE,
  SUBMIT_NEW_SCHOOL_FORM_SUCCESS,
  SUBMIT_NEW_SCHOOL_FORM_FAILURE,
  SUBMIT_EDIT_SCHOOL_FORM_SUCCESS,
  SUBMIT_EDIT_SCHOOL_FORM_FAILURE,
} from '../actions/schools'
import { fetchSchools, createSchool, editSchool } from '../api/schools'
import defaultErrorHandler from './defaultErrorHandler'
import { toast } from 'react-toastify'

export function* fetchAllSchools(action) {
  try {
    const json = yield call(fetchSchools)
    yield put({ type: GET_ALL_SCHOOLS_SUCCESS, schools: json.data.schools })
  } catch (error) {
    yield defaultErrorHandler(error, GET_ALL_SCHOOLS_FAILURE)
  }
}

export function* submitNewSchoolForm(action) {
  try {
    const json = yield createSchool(action.school)
    toast.success("New school successfully added!")
    yield put({ type: SUBMIT_NEW_SCHOOL_FORM_SUCCESS, school: json.data })
  } catch (error) {
    yield defaultErrorHandler(error, SUBMIT_NEW_SCHOOL_FORM_FAILURE)
  }
}
export function* submitEditSchoolForm(action) {
  try {
    const json = yield editSchool(action.school)
    toast.success("School successfully updated!")
    yield put({ type: SUBMIT_EDIT_SCHOOL_FORM_SUCCESS, schools: json.data })
  } catch (error) {
    yield defaultErrorHandler(error, SUBMIT_EDIT_SCHOOL_FORM_FAILURE)
  }
}
