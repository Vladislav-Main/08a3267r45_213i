import React from 'react';
import Cards from '../cards';

const SortedLetterEmployees = ({ fetchedEmployees }) => {
  const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  let employeesLetters = alphabet.map((letter) => {
    return {
      letter: letter,
      employees: fetchedEmployees.filter((emp) => {
        return emp.lastName.toUpperCase().charAt(0) === letter;
      }),
    };
  });

  return <Cards employeesLetters={employeesLetters} />;
};

export default SortedLetterEmployees;
