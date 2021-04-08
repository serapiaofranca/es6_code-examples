const doSomethingPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        // did someThing
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = new Promise((resolve, reject) => {
    //throw new Error('otherThing went wrong');
    setTimeout(function() {
        // did someThing
        resolve('Second data');
    }, 1000);
});

//console.log(doSomethingPromise);
doSomethingPromise.then(data => console.log(data));

doSomethingPromise
    .then(data => doOtherThingPromise)
    .then(data2 => console.log(data2));
    
/***** tratando o erro em promise
otherThingPromise
.then(data2 => console.log(data2))
.catch(error => console.groupCollapsed(error));
******/

// Pending - executando
// Fulfilled - terminou execucao
// Rejected - falhou e caiu no tratamento de erro