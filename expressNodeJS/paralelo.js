//CONSUMIR PROMESAS EN PARALELO

const promesa1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Obtenido datos de FB")
        resolve({amigos:100, likes:200})
    },1000)
})

const promesa2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Obtenido datos de TW")
        resolve({amigos:300, likes:200})
    },4000)
})

/*
Promise.all([promesa1,promesa2])
    .then(result=>console.log(result))
    .catch(err=>console.log(err.message))
*/

//con race solo obtienes los datos de la primera promesa
Promise.race([promesa1,promesa2])
    .then(result=>console.log(result))
    .catch(err=>console.log(err.message))