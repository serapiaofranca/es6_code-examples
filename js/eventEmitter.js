// Event emitter - exclusivo do nodeJS
// tem que importar a lib 
const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('User logged', data => {
    console.log(data);
});

emitter.emit('User logged', {user: 'Rogerio Serapa'});
