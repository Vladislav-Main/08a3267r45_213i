import React from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';

import SelectedEmployees from '../selected-employees';

const SortedSelectedEmployees = () => {
  const months = [
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
    'January',
    'February',
    'March',
    'April',
  ];

  const fetchedEmployees = useSelector(
    (state) => state.employees.fetchedEmployees
  );

  let selectedEmployees = fetchedEmployees.filter((v) => v.selected);

  if (selectedEmployees.length === 0) {
    return <div className="selectedCards">Employees List is empty</div>;
  } else {
    const sortedEmployees = selectedEmployees.sort((a, b) => {
      if (a.lastName > b.lastName) {
        return 1;
      }
      if (a.lastName < b.lastName) return -1;
      return 0;
    });

    const employeesMonths = months.map((month) => {
      return {
        month: month,
        employee: sortedEmployees.filter((employee) => {
          return moment(employee.dob).format('MMMM') === month;
        }),
      };
    });

    return <SelectedEmployees employeesMonths={employeesMonths} />;
  }
};

export default SortedSelectedEmployees;
