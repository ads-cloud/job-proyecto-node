const app = require('./app')
const mongoose = require('mongoose')
const port = 5000

mongoose.connect('mongodb://127.0.0.1:27017/pokemones', async (err, res) => {
    if (err) throw err;
    console.log('base de datos mongo ok')
})