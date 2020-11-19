function getCar(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Obtenido coche 23 de nuestra base de datos")
            resolve({id: 23, modelo:'X3',company:'BMW'})
        },3000)
    })
}

function getModel(model){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Obtenido modelo X3 de BMW")
            resolve({speed: 203, seat:5 , size:'5*4'})
        },3000)
    })
}

const promesa = getCar(23)

//consumir de la siguiente manera
//promesa.then(coche => console.log(coche))

/*promesas anidadas
promesa
    .then(coche => getModel(coche.modelo))
    .then(modelo => console.log(modelo))
*/

async function showModel(){
    try{
        const car = await getCar(23)
        const model = await getModel(car.modelo)
        console.log(model)
    }catch(err){
        console.log(err.message)
    }
    
}

showModel()
