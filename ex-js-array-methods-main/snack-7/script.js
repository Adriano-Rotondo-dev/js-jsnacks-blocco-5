const students = [
  {
    id: 1,
    name: "Marco Lanci",
    age: 32,
    class: "3C",
  },
  {
    id: 2,
    name: "Mario Banfi",
    age: 34,
    class: "4A",
  },
  {
    id: 3,
    name: "Luigi Banzi",
    age: 33,
    class: "5B",
  },
];

// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }

//*metodo forEach

students.forEach((student) => {
  if (student.id === 2) {
    console.log(student);
  }
});

//* metodo find

findStudent = students.find((student) => {
  return student.id === 2;
});
console.log(findStudent);

//*metodo find oneLiner

findStudentOneliner = students.find(student => student.id === 2);
console.log(findStudentOneliner);

//*metodo filter

filterStudent = students.filter((student) => {
    return student.id === 2
  });
console.log(filterStudent);

//* metodo filter oneLiner

filterStudentOneLiner = students.filter(student => student.id === 2);
console.log(filterStudentOneLiner);
