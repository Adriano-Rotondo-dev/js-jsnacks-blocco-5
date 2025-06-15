const zucchine = [
  { type: "Napoletana", weight: 10, length: 4 },
  { type: "Trombetta", weight: 13, length: 16 },
  { type: "Napoletana", weight: 4, length: 23 },
  { type: "Trombetta", weight: 11, length: 6 },
  { type: "Napoletana", weight: 2, length: 17 },
  { type: "Romana", weight: 5, length: 10 },
  { type: "Romana", weight: 7, length: 9 },
  { type: "Trombetta", weight: 3, length: 8 },
  { type: "Calabrese", weight: 6, length: 27 },
  { type: "Calabrese", weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.
//* forEach
const longZucchine = [];
const otherZucchine = [];

zucchine.forEach((zucchina) => {
  if (zucchina.length > 15) {
    longZucchine.push(zucchina);
  } else otherZucchine.push(zucchina);
});
console.log(longZucchine);
console.log(otherZucchine);

//*filter
const longerZucchine = zucchine.filter((zucchina) => {
    return zucchina.length > 15;
  });
console.log(longerZucchine);

const shorterZucchine = zucchine.filter((zucchina) => {
    return zucchina.length < 15 ;
});
console.log(shorterZucchine);

const smallZucchine = [];
const bigZucchine = zucchine.filter((zucchina) => {
  if (zucchina.length > 15) {
    return zucchina;
  } else {
    smallZucchine.push(zucchina);
  }
});
console.log(bigZucchine);
console.log(smallZucchine);

//* filter oneLiner shortcut

const longZucchineShortCut = zucchine.filter(zucchina => zucchina.length > 15);
console.log(longZucchineShortCut);

const shortZucchineShortCut = zucchine.filter(zucchina => zucchina.length < 15);
console.log(shortZucchineShortCut);
