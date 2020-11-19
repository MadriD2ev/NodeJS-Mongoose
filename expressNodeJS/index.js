const express = require('express')
const app = express()
const port = 3000 || process.env.PORT
const car = require('./routes/car')
//Para el método POST express no parsea los objetos json, por eso lo habilitaremos así
app.use(express.json())
//ya utilizando refactorizacion
app.use('/api/cars', car)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Escuchando en el puerto http://localhost:${port}`)
})