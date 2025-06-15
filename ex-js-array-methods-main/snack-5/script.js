const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

//*metodo forEach
const evenNumbers = [];
nums.forEach((number) => {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
});
console.log(evenNumbers);

//*metodo .map

const mapEvenNumbers = nums.map((number) => {
  if (number % 2 === 0) {
    return number;
  }
  return false;
});
console.log(mapEvenNumbers);

//* .map oneliner

const mapOneLiner = nums.map(number => number % 2 === 0);
console.log(mapOneLiner);

//* filter

const filterEvenNumbers = nums.filter((number) => {
    return number % 2 === 0;
});
console.log(filterEvenNumbers);

//*metodo .filter shortcut

const filterOneLiner = nums.filter(number => number % 2 === 0);
console.log(filterOneLiner);