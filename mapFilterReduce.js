// MAP
// Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele

// SEM .this
const meuArray = [1, 2, 3, 4, 5];

try {
    const multiplicado = meuArray.map((num) => num * 2);
    console.log('Números multiplicados: ' + multiplicado);
} catch(e) {
    console.log(e.message);
}

// COM .this
try {
    const comThis = meuArray.map(function(num){ console.log(num * this)}, 3)
} catch(e){ console.log(e.message)}