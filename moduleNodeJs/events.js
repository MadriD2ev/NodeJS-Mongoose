const EventEmitter = require('events');

//PRIMERO HAY QUE CREARNOS UNA INSTANCIA DE EVENTEMITTER

const emitter = new EventEmitter();

//utiliza la funcion on, YA TENEMOS EL LISTENNER DEL EVENTO

emitter.on('event', function(){
    console.log('Un evento ha ocurrido');
})

//EMITIR UN EVENTO

emitter.emit('event');

//LISTENNER CON UNA FUNCION Y ARGUMENTOS

emitter.on('eventWithArgument', function(arg){
    console.log('Un evento con los siguientes argumentos ha ocurrido: ' + arg.id + ' ' + arg.numero);
})

emitter.emit('eventWithArgument', {id:1, numero:24});

//CREAR FUNCIONES CON FLECHA

emitter.on('eventArrow', (arg)=>{
    console.log('Un evento FLECHA con los siguientes argumentos ha ocurrido: ' + arg.id + ' ' + arg.numero);
})

emitter.emit('eventArrow', {id:1, numero:24});

