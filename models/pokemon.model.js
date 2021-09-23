const { Schema, model } = require("mongoose");

const pokemonSchema = Schema({
    nombre:String,
    uuid:{ type:String, unique:true},
    url: String,
   
});

module.exports = model("pokemon", pokemonSchema);