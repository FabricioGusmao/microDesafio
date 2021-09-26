
//Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.


let numPares = [2,4,6,8,10];

 let numImpar = numPares.map(function(num){
     return num + 1;
 });

 console.log(numImpar);


 //Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.

 let nomes = ['Maria', 'Joao', 'Pedro', 'Maria', 'Carol'];

 let findMaria = nomes.filter(function(w){
    return w == "Maria";
 });

 console.log(findMaria);



 //Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.

let numbers = [1,5,9,3,7];

let formatNumbers = numbers.reduce(function(a, b){
    return a +'--'+ b
});

console.log(formatNumbers);


//Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.

let animais = ['Cachorro', 'Gato', 'Rato', 'Leão','Pássaro'];


animais.forEach(function(a){
    return console.log(`O animal é ${animais}`);
});

