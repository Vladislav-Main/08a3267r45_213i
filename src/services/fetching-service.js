import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FetchService } from '../redux/employees-reducer';
import SortedLetterEmployees from '../components/sorted-letter-employees/sorted-letter-employees';

function FetchedEmployees() {
  const dispatch = useDispatch();
  const { fetchedEmployees } = useSelector((state) => ({
    fetchedEmployees: state.employees.fetchedEmployees,
  }));

  useEffect(() => {
    dispatch(FetchService());
  }, [dispatch]);

  return <SortedLetterEmployees fetchedEmployees={fetchedEmployees} />;
}

export default FetchedEmployees;
