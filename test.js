const today = new Date();

const options = { year: 'numeric', month: 'long', day: 'numeric' };

// English format
const englishDate = today.toLocaleDateString('en-US', options);

// French format
const frenchDate = today.toLocaleDateString('fr-FR', options);

console.log(`Today's date in English: ${englishDate}`);
console.log(`Today's date in French: ${frenchDate}`);
