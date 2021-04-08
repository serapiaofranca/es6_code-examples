const doSomethingPromise = () => 
    new Promise((resolve, reject) => {
    setTimeout(function() {
        // did someThing
        resolve('First data');
    }, 1500);
});

const doOtherThingPromise = () => 
    new Promise((resolve, reject) => {
        //throw new Error('doOtherThing error wrong');
        setTimeout(function() {
            // did someThing
            resolve('Second data');
        }, 1000);
    });

// nesse caso executa as duas em paralelo
Promise.all([doSomethingPromise(), doOtherThingPromise()])
    .then(data => console.log(data));


// nesse caso executa o que resolver primeiro
Promise.race([doSomethingPromise(), doOtherThingPromise()])
    .then(data => console.log(data));
