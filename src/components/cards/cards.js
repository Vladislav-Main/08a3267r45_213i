import React from 'react';
import Buttons from '../buttons';

const Cards = ({ employeesLetters }) => {
  return (
    <div className="fetchedEmp">
      {employeesLetters.map((object, index) => {
        return object.employees.length > 0 ? (
          <div key={index} className="letter">
            {object.letter}

            <div>
              {object.employees.map((employee) => {
                return (
                  <div key={employee.id} className="content">
                    <p
                      className="names"
                      style={{ color: employee.selected ? 'blue' : 'black' }}
                    >
                      {employee.lastName + ' ' + employee.firstName}
                    </p>
                    <Buttons employee={employee} />
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div key={index} className="letter">
            {object.letter}
            <div className="content">----</div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
