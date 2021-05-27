import {
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_REQUEST,
  FETCH_EMPLOYEES_FAILURE,
  EMPLOYEE_SET_SELECTED,
} from './types';

export function employeesRequest() {
  return { type: FETCH_EMPLOYEES_REQUEST, loading: true };
}

export function fetchEmployees(employees) {
  return {
    type: FETCH_EMPLOYEES_SUCCESS,
    payload: employees,
  };
}

export function employeesFailure(error) {
  return { type: FETCH_EMPLOYEES_FAILURE, error };
}

export function setSelected(employeesId, status) {
  return {
    type: EMPLOYEE_SET_SELECTED,
    payload: [employeesId, status],
  };
}
