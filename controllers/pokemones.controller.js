const pokemon = require('../models/pokemon.model')
const uuid = require('uuid');
const axios = require('axios');
const mongoose = require('mongoose')

const url  = 'https://pokeapi.co/api/v2/pokemon/';


const getPkemonApi = async (req, res)=>{
    dropColletion()
    await axios.get(url)
    .then((data)=>{
        data.data.results.map((item)=>{
            let nombre = item.name
            let url = item.url
            const schemaPokemon = new pokemon({ nombre, url, uuid: uuid.v4() })
            schemaPokemon.save(err => {
                if(err){
                    console.log('ERROR CREANDO REGISTRO');
                }else{
                    console.log('REGISTRO CREADO CORRECATMENTE');
                }
                //if (err) return res.status(500).send({ err: ' Error al insertar los datos: ' + err })
                //return res.status(200).send({ ok: true })
            })
        })
    })
    .catch(function (error) {
        res.status(400).send( error)
    })
}

function dropColletion() {
    mongoose.connect('mongodb://127.0.0.1:27017/pokemones', async (err, res) => {
        res.dropCollection("pokemons",err => {
            if (err) {
                console.log('ERROR BORRANDO COLLECTION');
            }else{
                console.log('COLLECTION BORRADA');
            }
        })
    })
}
   
module.exports = {
    getPkemonApi,
    dropColletion
}