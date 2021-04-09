// codigo assincrono de maneira sequencial, como se fosse sincrono
const fetch = require("node-fetch");

const asyncTimer = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(12345);
        },1000);
    });

const simpleFunc = async () => {
    const data = await asyncTimer();
    console.log(data);

    const dataJson = await fetch('http://localhost:8080/books.json').then(resStream =>
        resStream.json()
    );
    return dataJson;
};

simpleFunc()
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });