//import http from "http";
const http = require('http');
const host = 'localhost';
const port = '8080';

// servidor retornara mensagem "My first server"
const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server!");
};

// request listener para criar o server
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});