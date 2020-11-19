const express = require('express')
const app = express()
const port = 3000 || process.env.PORT

//importar el modulo creado llamado date
const date = require('./date')

//para validaciones de datos
const { body, validationResult } = require('express-validator');

//Para el método POST express no parsea los objetos json, por eso lo habilitaremos así
app.use(express.json())

/*
//creación del middleware (acciones que se ejecutan entre la peticion y la respuesta del servidor)
app.use(function (req, res, next){
    console.log('Time: ', Date.now())
    //se debe agregar el método next para cerrar el ciclo
    next()
})
*/

app.use(date)

//middleware anidado y aplicado sobre un endpoint en particular 
app.use('/api/cars/list', function (req, res, next){
    console.log('Request Type: ', req.method)
    //se debe agregar el método next para cerrar el ciclo
    next()
})

//array de coches 
var coches = [
    {id:0, company:'BMW', modelo:'X3', year:'2020'},
    {id:1, company:'Audi', modelo:'A1', year:'2021'},
    {id:2, company:'Mercedes', modelo:'Clase A', year:'2022'},
]

//metodo get 
app.get('/api/cars/',(req,res)=> {
    res.send(coches)
})

//obtener una lista
app.get('/api/cars/list',(req, res)=>{
    res.send(['BMW X1', 'AUDI A3', 'Mercedes Clase A'])
})

app.listen(port, () => {
    console.log(`Escuchando en el puerto http://localhost:${port}`)
})

