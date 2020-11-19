const express = require('express')
//para validaciones de datos
const { body, validationResult } = require('express-validator');

//refactorizando código
const router = express.Router()

//array de coches 
var coches = [
    {id:0, company:'BMW', modelo:'X3', year:'2020'},
    {id:1, company:'Audi', modelo:'A1', year:'2021'},
    {id:2, company:'Mercedes', modelo:'Clase A', year:'2022'},
]

//obtener una lista
router.get('/list',(req, res)=>{
    res.send(['BMW X1', 'AUDI A3', 'Mercedes Clase A'])
})

//obtener el id que se agrega en la pagina web, dentro de la url, recuperandolo
router.get('/id/:id',(req, res)=>{
    res.send(req.params.id)
})

//obtener compañía y modelo del auto
router.get('/:company/:model',(req, res)=>{
    //res.send(req.params.company)
    res.send(req.params) //lo regresa como un tipo objeto
})

//metodo get 
router.get('/',(req,res)=> {
    res.send(coches)
})

//se utiliza req.params cuando la información nos venía de la url
router.get('/:company',(req, res)=>{
    const coche = coches.find(coche => coche.company === req.params.company)

    if(!coche){
        res.status(404).send('No tenemos ningun coche de esa marca')
    }else{
        res.send(coche)
    }
})

//utilizar método POST
router.post('/',(req,res)=> {
    var carId = coches.length;
    var coche = {
       id: carId,
       company: req.body.company,
       modelo: req.body.modelo,
       year: req.body.year
    }

    coches.push(coche)
    res.status(201).send(coche)
})

//utilizar método POST, filtrando que no envie el usuario los requerimientos en blanco 
router.post('/validarVacio',(req,res)=> {

    if(!req.body.company || req.body.company.length < 3){
        res.status(400).send("Introduce la empresa correcto")
        return
    }

    var carId= coches.length;
    var coche = {
       id: carId,
       company: req.body.company,
       model: req.body.model,
       year: req.body.year
    }

    coches.push(coche)
    res.status(201).send(coche)
})

//utilizacion del validator
router.post('/validar',[
    //si esta vacio
    body('company').isLength({ min: 2 }),
    // password must be at least 3 chars long
    body('model').isLength({ min: 2 })
],(req,res)=> {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    var carId= coches.length;
    var coche = {
       id: carId,
       company: req.body.company,
       model: req.body.model,
       year: req.body.year
    }

    coches.push(coche)
    res.status(201).send(coche)
})


//creación de un put
router.put('/:id',[
    //si esta vacio
    body('company').isLength({ min: 2 }),
    // password must be at least 3 chars long
    body('model').isLength({ min: 2 })
],(req,res)=> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    const coche = coches.find(coche => coche.id === parseInt(req.params.id))

    if(!coche){
        return res.status(404).send('El coche con es id no esta en la bd')
    }

    coche.company = req.body.company
    coche.modelo = req.body.modelo
    coche.year = req.body.year

    res.status(204).send()
})

router.delete('/:id', (req, res)=>{
    const coche = coches.find(coche => coche.id === parseInt(req.params.id))

    if(!coche){
        return res.status(404).send('El coche con es id no esta en la bd, no se puede borrar')
    }

    const index = coches.indexOf(coche)
    coches.splice(index,1)

    res.status(200).send('coche borrado')
})

module.exports = router