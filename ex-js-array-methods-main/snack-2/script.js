const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

//*metodo forEach

people.forEach((person)=>{
  console.log(person.name)
})
//*shortcut forEach oneliner

people.forEach(person=> console.log(person.name))

//*metodo map

const peopleNames = people.map((person, i, age) =>{
  return person.name
})
console.log(peopleNames)

//*shortcut .map oneliner

const peoplesNames = people.map( person => person.name)
console.log(peopleNames)

//*metodo filter


//*shortcut


//*metodo find


//*shortcut