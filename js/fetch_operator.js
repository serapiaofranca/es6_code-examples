/*
A API de busca não está implementada no Nó.

Você precisa usar um módulo externo para isso, como busca de nó .

Instale-o no aplicativo Node como este

guest@user$npm i node-fetch --save

 em seguida, coloque a linha abaixo na parte superior dos arquivos em que você está usando a API de busca:

const fetch = require("node-fetch");
:: fonte :: https://qastack.com.br/programming/48433783/referenceerror-fetch-is-not-defined
*/
const fetch = require("node-fetch");

// server usado de exemplo esta na pasta server - executar node routes.js
fetch('http://localhost:8080/books.json')
    .then(responseStream => {
        //if(responseStream === 200){
        if(responseStream){
            return responseStream.json();
        }else{
            throw new Error('Request error')
        }
    })
    .then(data => {
        console.log(data);
    }).catch(err => {
        console.log('Error,,, ', err);
    });
