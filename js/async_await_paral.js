// codigo assincrono com processamento paralelo
const fetch = require("node-fetch");

const asyncTimer = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(12345);
        },1000);
    });

const simpleFunc = async () => {
    const data = await Promise.all([
        asyncTimer(), 
        fetch('http://localhost:8080/authors.json').then(resStream =>
            resStream.json())
    ]);
    
    return data;
};

simpleFunc()
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });