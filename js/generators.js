// generators sao funcao que pausam e retornam valores atraves
  // dos iteradores - value e done

function* naturalNumbers() {
    let number = 0;
    while(true){
        yield number;  // mesmo em um loop infinito, uma condicao de parada poderosa
        number++;
    }
}

const it2 = naturalNumbers();

console.log(it2.next()); // 
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());

// a ideia é usar generators para construir objetos iteradores

const obj1 = {
    values: [9, 8, 7, 6],
    *[Symbol.iterator]() {
        for (var i = 0; i < this.values.length; i++ ){
            yield this.values[i];
        }
    }
}

// agora posso iterar sobre a propriedade do obj1
for (let value of obj1){
    console.log(value);
}