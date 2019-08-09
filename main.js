console.log('siema - to jest strona Michała Uziębło, pozdrawiam 😄');
const name = 'Michał';
const age = 33;
let michal = null;
console.log(name);
console.log(age); 
console.log(michal);
console.log(`Nazywam się ${name} i mam ${age} lata`);

const paragraph = document.querySelector('.about__paragraph--js');
console.log(paragraph);

paragraph.innerHTML = `Nazywam się ${name} i mam ${age} lata`;