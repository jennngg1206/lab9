const characters= ['Harry', 'Hermione', 'Ron', 'Draco', 'Luna'];
for(let i=1; i<=5; i++) {
    consol.log(characters[i]);
}


const firstName = 'Harry';
const house = 'Gryffindor';
console.log(`Welcome, ${firstName} of ${house}!`);


const characterName = 'Hermione';
console.log (characterName.toLowerCase ())
console.log (characterName.toUpperCase())


const spell = 'Expelliarmus'
console.log(spell.trim())


const quote = 'I solemnly swear that I am up to no good';
console.log(quote.slice(11, 17));


const lastName = 'Weasly';
console.log ('Ron'.concat(' ', lastName));


let sentence = 'Draco is a good wizard';
console.log (sentence.replace('good', 'bad'));


const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw'];
houses.push('Slytherin');
houses.pop();
console.log(houses);


const spells = ['Alohomora', 'Lumos', 'Nox'];
spells.unshift('Accio');
spells.shift();
console.log(spells);


const professors = ['Dumbledore', 'McGonagall', 'Snape', 'Hagrid'];
const selectedProfessors = professors.slice (1, 3);
console.log (selectedProfessors);


const students = ['Neville', 'Seamus', 'Dean', 'Paravati'];
students.splice (1, 2);
console.log(students);


const phrase = 'Mischief Managed';
console.log(phrase.trim().toLowerCase().concat(' - Harry'));


const wizards = ['Harry', 'Hermione', 'Ron'];
wizards.push('Luna', 'Draco');
console.log(wizards);


const message = 'Welcome to Hogwarts School of Withcraft and Wizardry';
console.log(message.slice(11, 19).concat('Castle'));


