// para aproveitar parametros de uma outra funcao, era

const multiply = (...args) => args.reduce( (acc, value) => acc * value, 1);

const sum = (...rest) => {
    return multiply.apply(undefined, rest);
};

console.log(sum(5, 5, 5, 2, 3));

// o rest operator transforma os parametros em um Array
// o spread operator faz o contrario, Array em parametros
// e pode ser utilizado em Strings, Arrays, literal objects e objects iteraveis
const sum2 = (...rest) => {
    return multiply(...rest);
};

console.log(sum2(5, 5, 5, 2, 3));

//efeito parecido com 'split' do Ruby
const str = 'Digital Innovation One';
const arr = [ 1, 2, 3, 4];

function logArgs (...args) {
    console.log(args);    
}

logArgs(...str);

function logArgs2 (a, b, c) {
    console.log(a, b, c);    
}

logArgs2(...arr); // ele pega o Array e quebra por item

// tambem podemos reutilizar para "concatenar" arrays
//const arr2 = [ 5, 6, 7].concat(arr);

const arr2 = [...arr, 5, 6, 7];
console.log(arr2);


/* Para "objetos Literais" apenas para construir novos obj */
const obj = {
    test: 123
};

const obj2 = {
    ...obj,
    test2: "AbC"
};

console.log(obj2);

// o ultimo valor do spread é o que fica, se repetir nome da
// propriedade ele sobrescreve as atribuições

// para clonar, se atentar aos "subobjetos", mais de um nivel, para que
// nao seja alterado propriedades indesejadas


