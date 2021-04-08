const doSomethingPromise = () => 
    new Promise((resolve, reject) => {
    setTimeout(function() {
        // did someThing
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = () => 
    new Promise((resolve, reject) => {
        //throw new Error('doOtherThing error wrong');
        setTimeout(function() {
            // did someThing
            resolve('Second data');
        }, 1000);
    });

doSomethingPromise()
    .then(data => {
        console.log(data.split(''));
        return doOtherThingPromise();
    })
    .then(data2 => console.log(data2.split('')))
    .catch(error => console.log('Eitaa', error));