// EventEmitter

const EventEmitter = require('events');

class Users extends EventEmitter{
    userLogged(data){
        this.emit('User logged', data);
    }
}

const users = new Users();

// assim loga varios users
users.on('User logged', data => {
    console.log(data);
});

users.userLogged({user: 'Roger Serapa'});
//users.userLogged({user: 'Other user'});

// assim loga apenas um user por chamada
/*
users.once('User logged', data => {
    console.log(data);
});
*/
