//creación del middleware (acciones que se ejecutan entre la peticion y la respuesta del servidor)
function date(req, res, next){
    console.log('Time: ', Date.now())
    //se debe agregar el método next para cerrar el ciclo
    next()
}

module.exports = date