// MAP
// Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele

// SEM .this
const meuArray = [1, 2, 3, 4, 5];

try {
    const multiplicado = meuArray.map((num) => num * 2);
    console.log('Números multiplicados por 2: ' + multiplicado + "\n");
} catch(e) {
    console.log(e.message);
}

// COM .this
try {
    console.log('Números multiplicados por 3:');
    const comThis = meuArray.map(function(num){ console.log(num * this)}, 3);
    console.log("**********************************************");
} catch(e){ console.log(e.message);}

// FILTER
// Filtre usando exemplos com strings
const animais = ["Gato", "Cachorro", "Gato Branco", "Cachorro Branco", "Papagaio Branco"];

try {
    const animalBranco = animais.filter((animal) => animal.includes("Branco"));
    const cachorro = animais.filter((animal) => animal.includes("Cachorro"));
    console.log('Apenas animais cor branca: ' + animalBranco);
    console.log('Apenas cachoros: ' + cachorro);
} catch(e) { console.log(e.message);}

// Filtre e retorne todos os números pares de um array
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function ehPar(num) {
    if(num % 2 == 0) { return num; }
}
try {
    const numPares = numeros.filter(ehPar);
    console.log('\nNúmeros pares: ' + numPares);
} catch(e) { console.log(e.message); }