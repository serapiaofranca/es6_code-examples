// funcao que recebe varios paramentros
// palavra reservada "arguments" que transforma parametros em lista

function sum(a, b){
    
    var value = 0;
    for( var i = 0; i < arguments.length; i++ ){
        value += arguments[i];
    }
    return value;
}

console.log(sum(2, 3, 4, 10, 14));

// rest operator "..." - Array no lugar de Object (lista) como acima
function sum2(...args){
    return args.reduce((acc, value) => acc + value, 0);
}

console.log(sum2(2, 3, 4, 10, 14));

// se quiser usar alguns dos argumentos
const sum3 = (a, b, ...others) => {
    console.log(a, b, others);
};

sum3(2, 3, 4, 10, 14);