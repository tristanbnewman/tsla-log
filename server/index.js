const express = require('express')
const app = express()
const cors = require('cors')
const tradeController = require("./controllers/tradeController")
const massive = require('massive')
require('dotenv').config()

app.use(express.json())
app.use(cors())

massive(process.env.CONNECTION_STRING)
    .then(db =>{
        app.set('db', db)
        console.log('Database connected')
    })

app.get('/api/stocks',tradeController.readTrades)
app.post('/api/stocks',tradeController.addTrade)
app.put('/api/stock/:id',tradeController.updateTrade)
app.delete('/api/stock/:id',tradeController.destroyTrade)

app.listen(process.env.SERVER_PORT, ()=>{
    console.log("listening on localhost:5050")
})

