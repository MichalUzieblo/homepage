console.log('siema - to jest strona Michała Uziębło, pozdrawiam 😄');
const name = 'Michał';
const age = 75;
let michal = null;
console.log(name);
console.log(age); 
console.log(michal);
console.log(`Nazywam się ${name} i mam ${age} lata`);

const paragraph = document.querySelector('.about__paragraph--js');
console.log(paragraph);

paragraph.innerHTML = `Nazywam się ${name} i mam ${age} lata`;

if ('javascript' != 'java') {
    console.log('to prawda!')
}

if (age < 20) {
    console.log('masz mniej niż 20 lat');
} else if ((age >= 20) && (age <= 30)) {
    console.log('masz więcej niż 20 lat, ale mniej niż 30');
} else {
    console.log('jesteś 31+');
}

switch (age) {
    case 20:
        console.log('masz równo 20 lat')
    break;
    case 30:
        console.log('masz równo 30 lat')
    break;
    default:
        console.log(`masz ${age} lat`)
    break;
}

const amIOld = (age > 70) ? 'yes' : 'no';
console.log(amIOld); 

let oldIndicator;

if (age > 70) {
    oldIndicator = 'yes';
} else {
    oldIndicator = 'no';
}

console.log(oldIndicator);

function calculate(x) {
    x = x + 3;
    console.log(x);
    return x*7
}

console.log(calculate(2));
const myCalculation = calculate(4);
console.log(myCalculation);

const calculateFat = x => (x+3)*7;

console.log(calculateFat(2));

function welcome (age, name) {
    welcomeText = `Cześć ${name}, masz ${age} lat, baw się dobrze na mojej stronie`
    return welcomeText
}

console.log (welcome(age, name));
console.log (welcome(15, 'Michał'));