const names = ["Edoardo", "Simone", "Francesco"];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'
//*metodi forEach

names.forEach((name) => {
  console.log(name);
});

//* shortcut onliner forEach

names.forEach((name) => console.log(name));

//*metodo map

const mapName = names.map((name) => {
  return name;
});
console.log(mapName);

//*shortcut .map oneliner

const namesArray = names.map(name => console.log(name));
