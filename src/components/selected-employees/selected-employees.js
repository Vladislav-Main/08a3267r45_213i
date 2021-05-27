import moment from 'moment';
import React from 'react';

const SelectedEmployees = ({ employeesMonths }) => {
  return (
    <div className="container">
      {employeesMonths.map((object, index) => {
        if (object.employee.length > 0) {
          return (
            <div key={index} className="selectedCards">
              <div className="month">{object.month}</div>
              <div className="selectedEmp">
                {object.employee.map((emp) => {
                  return (
                    <div className="container" key={emp.id}>
                      <ul className="selectedEmployees">
                        <li className="selectedEmployee">
                          <span className="selectedName">
                            {emp.lastName + ' ' + emp.firstName} -{' '}
                          </span>
                          <span className="selectedDoB">
                            {`${moment(emp.dob).format('DD')}
                              
                              ${moment(emp.dob).format('MMMM')}, ${moment(
                              emp.dob
                            ).format('YYYY')} year`}
                          </span>
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default SelectedEmployees;
