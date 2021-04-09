// EventEmitter trabalhando com eventos assincronos
// Vantagem do EventEmitter em relacao ao EventTarget(nativo browsers)
//   temos mais opcoes de metodos e funcoes como o "once" um por vez...

const EventEmitter = require('events');

class Users extends EventEmitter{
    userLogged(data){
        setTimeout(() => {
            this.emit('User logged', data);
        }, 2000);        
    }
}

const users = new Users();

// assim loga varios users
users.on('User logged', data => {
    console.log(data);
});

users.userLogged({user: 'Roger Serapa'});
users.userLogged({user: 'Other user'});

// assim loga apenas um user por chamada
/*
users.once('User logged', data => {
    console.log(data);
});
*/

