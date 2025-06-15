const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

//*metodo forEach

const biggerNumbers = [];
numbers.forEach((number) => {
  biggerNumbers.push(number + 1);
});
console.log(biggerNumbers);

//*shortcut forEach oneliner
const onelinerNumbers = [];
numbers.forEach((number) => onelinerNumbers.push(number + 1));
console.log(onelinerNumbers);

//*metodo .map

const mapNumbers = numbers.map((number) => {
  return number + 1;
});
console.log(mapNumbers);

//*shortcut oneliner .map

const mapBiggerNumbers = numbers.map(number => number + 1);
console.log(mapBiggerNumbers);
