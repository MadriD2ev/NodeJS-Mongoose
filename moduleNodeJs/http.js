/*

const http = require('http');

const server = http.createServer(); // crea el servidor

//el verver debe tener un metodo on y un listenner al menos
server.on('conection',(socket)=>{
    console.log('nueva conexion detectada');
})

server.listen(2012);
console.log('escuchando en el puerto 2012...');

*/

/*

const http = require('http');

//request es lo que le enviamos al servidor  y el responsive que es la respuesta del servidor

const server = http.createServer((req, res)=>{  //es la home lara.com
    if(req.url==='/'){
        res.write('hola mundo');
        res.write('desde nodejs');
        res.end();
    } 

    if(req.url == '/coches'){
        res.write('coche1');
        res.end();
    }
}).listen(3030);

//server.listen(3030);
console.log('Escuchando en el puerto 3030');

*/

const http = require('http');

const server = http.createServer((req, res)=>{
    res.writeHead(200,{ 'Content-Type': 'text/html'});
    res.write('<h1> Hola a todos </h1>');
    res.write('<p> Mi web de coches </p>');
    res.end();
}).listen(5050);