// simbol - identificador unico, não tem como atribuir ou 
//     identificar seu valor

const uniqueId = Symbol('teste');
const uniqueId2 = Symbol('teste');

console.log(uniqueId === uniqueId2);

// "pode" ser utilizada para avisar que se trata de propriedade privada... 


// propriedade utilizaveis - well known symbols
  // Symbol.iterator  -  responsavel por iterações do obj...

const arr = [1, 2, 3, 4];

const it = arr[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next()); // aqui o iterador percorreu o ultimo item da lista

// ecma introduziu essa forma de iterar
for (let value of arr){
    console.log(value);
}

const str = 'Digita Innovation One';
for (let value of str){
    console.log(value);
}

// iteradores são uma interface

