//mongoose nos devuelve una promesa y nos podemos conectar a MongoDB así
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/carsdb', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>console.log("Conectado correctamente a MongoDB"))
    .catch(()=>console.log("Error al conectarse a MongoDB"))

//crear el schema
const carSchema = new mongoose.Schema ({
    company: String, 
    model: String,
    price: Number,
    year: Number,
    sold: Boolean,
    extras: [String],
    date: {type:Date, default: Date.now}
})

//generar la clase del modelo de nuestro schema Cars
const Car = mongoose.model('car', carSchema)

//crear el carro
//createCar()

//crear la funcion que nos devuelva todos los coches
//getCars()

//filtrar la busqueda por un coche en particular y filtrar si esta vendido o no
//getCompanyAndSoldFilterCars()

//crear más filtros
//getMoreFilterCar()

//filtar por el precio del coche
getFilterPriceCars()

//operador Nin en un array
//getFilterNinCars()

//operadores And y Or
//getFilterPriceAndOrCars()

//count()
//getCountCar()

//paginacion es el proceso de separar el contenido en diferentes paginas discretas
//getPaginationCars()

//buscar id para actualizar
//updateCar('5fb5e5e6ca84d017d4ae7e77')

//otro actualizar
//updateFirstCar('5fb5e5e6ca84d017d4ae7e77')

//borrar documento
//deleteCar('5fb5e5e6ca84d017d4ae7e77')

async function deleteCar(id){
    const result = await Car.deleteOne({_id: id})
    
    console.log(result)
}

async function updateFirstCar(id){
    const result = await Car.update(
        {_id: id},
        {
            $set:{
                company: 'Seat',
                model: 'Ibiza'
            }
        }
    )

    console.log(result)
}

async function updateCar(id){
    const car = await Car.findById(id)
    if(!car) return

    car.company = 'Mercedes'
    car.model = 'Clase A'

    const result = await car.save()

    console.log(result)
}

async function getPaginationCars(){
    const pageNumber = 2
    const pageSize = 2

    const cars = await Car
        .find()
        //skip te devuelve todos los resultados de busqueda a partir del numero que se le agrega
        .skip((pageNumber-1)*pageSize)
        .limit(pageSize)

        console.log(cars)
}

async function getCountCar(){
    const cars = await Car
        //.find()
        .find({company: "Audi"})
        .count()
    console.log(cars)
}

async function getFilterPriceAndOrCars(){
    const cars = await Car
        .find()
        //.or([{company:'Audi'},{model:'X3'}])
        .and([{company:'BMW'},{model:'X3'}])
    console.log(cars)
}

async function getFilterNinCars(){
    const cars = await Car
        .find({extras: {$nin: 'Automatic'}})

    console.log(cars)
}

async function getFilterPriceCars(){
    const cars = await Car
        .find({price: {$gte: 2000, $lt:5000}})

    console.log(cars)
}

async function getMoreFilterCar(){
    const cars = await Car
        .find({company: 'BMW', sold: false})
        .sort({price: -1})
        .limit(2)
        .select({company:1, model:1, price:1})
    console.log(cars)
}

async function getCompanyAndSoldFilterCars(){
    const cars = await Car.find({company: 'BMW', sold: false})
    console.log(cars)
}

async function getCars(){
    const cars = await Car.find()
    console.log(cars);
}

//crear la funcion asincrona para crear un coche, porque para leer, crear, actualizar y borrar siempre serán asíncronas
async function createCar(){
    const car = new Car({
        company: 'BMW', 
        model: 'A3',
        price: 3450,
        year: 2020,
        sold: false,
        extras: ['Automatic','4*4']
    })
    //guardar en la BD de carsDB
    const result = await car.save()
    console.log(result) 
}





