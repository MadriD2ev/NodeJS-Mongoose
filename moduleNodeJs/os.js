const os = require('os');

console.log('Version SO', os.release); //Decirnos la versión del SO

console.log('Memoria libre: ', os.freemem());

console.log("Memoria Total: " + os.totalmem());