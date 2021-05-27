import axios from 'axios';
import { employeesFailure, employeesRequest, fetchEmployees } from './actions';

import {
  FETCH_EMPLOYEES_REQUEST,
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_FAILURE,
  EMPLOYEE_SET_SELECTED,
} from './types';

const initialState = {
  fetchedEmployees: [],
  loading: false,
  error: null,
};

export const FetchService = () => async (dispatch) => {
  try {
    dispatch(employeesRequest());
    const json = await axios.get(
      'https://yalantis-react-school-api.yalantis.com/api/task0/users'
    );
    if (json?.status === 200) {
      const employees = json.data
        .sort((a, b) => {
          if (a.lastName > b.lastName) {
            return 1;
          }
          if (a.lastName < b.lastName) return -1;
          return 0;
        })
        .map((v) => {
          let ids = localStorage.getItem('selectedIds');
          if (ids) {
            let idsAsArray = ids.split(',');
            v.selected = idsAsArray.includes(v.id);
          }
          return v;
        });
      dispatch(fetchEmployees(employees));
    }
  } catch (error) {
    dispatch(employeesFailure(error));
  }
};

// Reducers
const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES_REQUEST:
      return { ...state, loading: true };

    case FETCH_EMPLOYEES_SUCCESS:
      return { ...state, fetchedEmployees: action.payload };

    case FETCH_EMPLOYEES_FAILURE:
      return { ...state, error: action.payload };

    case EMPLOYEE_SET_SELECTED:
      const [empId, status] = action.payload;
      const empIndex = state.fetchedEmployees.findIndex(
        ({ id }) => id === empId
      );

      const items = [...state.fetchedEmployees];
      const item = { ...items[empIndex] };
      item.selected = status;
      items[empIndex] = item;
      localStorage.setItem(
        'selectedIds',
        items
          .filter((v) => v.selected)
          .map((v) => v.id)
          .join(',')
      );

      return {
        fetchedEmployees: [...items],
      };

    default:
      return state;
  }
};

export default employeesReducer;
