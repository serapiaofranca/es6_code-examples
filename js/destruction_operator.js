arr = ['Apple', 'Banana', 'Orange'];
var apple = arr[0];
var banana = arr[1];
var orange = arr[2];

// Destructuring Assignment
var [apple2, banana2, orange2] = ['Apple', 'Banana', 'Orange'];

console.log(apple, apple2);

// observar os niveis do array... usar as chaves para os demais niveis

// para destruir objetos

var obj = {
   name: "Rogerio",
   second: "Antonio"
};

var {name} = obj;
var {second: name2} = obj;

console.log(name);
console.log(name2); //destruiu obj com atribuito second e atribui valor a name2

// lembrando que o destruction nao altera valor da varial "clonada"

// obj dentro de obj, array dentro de obj tb funciona

var obj2 = {
    fruit: 'Apple',
    props: {
        age: 'one',
        colors: ['Green', 'Red']
    }    
};

var appleColor = obj2.props.colors[0];
console.log(appleColor);

var {
    props: {
        age: age2,
        colors: [color1, color2]
    }
} = obj2;

console.log(color2);
console.log(age2 = 'two');
console.log(obj2.props.age)  // foi clonada e nao modificada

// onde utilizar destructing: em var, const ou let
// e como argumentos de uma funcao