const posts = [
  { author: "Marco", date: "12/3/2021", content: "lorem ipsum..." },
  { author: "Luca", date: "30/6/2021", content: "lorem ipsum..." },
  { author: "Fabrizio", date: "12/9/2020", content: "lorem ipsum..." },
  { author: "Enrico", date: "09/12/2021", content: "lorem ipsum..." },
];

// Crea un nuovo array coi nomi di tutti gli autori
// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']

//*metodo forEach
const names = []
posts.forEach(post => {
names.push(post.author)
});
console.log(names)

//* forEach oneliner

const postsAuthors = []
posts.forEach(post=> postsAuthors.push(post.author))
console.log(postsAuthors)

//* metodo map
const authors = posts.map((post) => {
  return post.author;
});
console.log(authors);

//*shortcut .map oneliner

const postAuthors = posts.map((post) => post.author);
console.log(postAuthors);

//* metodo filter

const filterAuthors = posts.filter(post => {
  return true
})
console.log(filterAuthors)