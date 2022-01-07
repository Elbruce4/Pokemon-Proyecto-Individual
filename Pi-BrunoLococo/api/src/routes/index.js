const  axios  = require('axios');
const { Router } = require('express');
const { Pokemon , Type  } = require("../db")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

console.log(Pokemon);
console.log(Type);

const pokeDB = async () => {
    try{
        return await Pokemon.findAll({
            include : Type
        })
    } catch (e) {
        return e
    }
}

const pokeApi = async () => {

    try {
        let ArrayPoke = [];
        let pokemon = await axios.get("https://pokeapi.co/api/v2/pokemon");
        let dataPoke = pokemon.data.results.map(obj => axios.get(obj.url));
        let otrosPokemon = await axios.get(pokemon.data.next)
        let dataOtros = otrosPokemon.data.results.map(obj => axios.get(obj.url))
        let todosPoke = dataPoke.concat(dataOtros)
        let results = await Promise.all(todosPoke).then(obj => {
            obj.map(e=>{
                ArrayPoke.push({
                    ID : e.data.id.toString(),
                    name : e.data.name,
                    life: e.data.stats[0].base_stat,
                    strong : e.data.stats[1].base_stat,
                    defense : e.data.stats[2].base_stat,
                    speed : e.data.stats[5].base_stat,
                    height : e.data.height,
                    weight : e.data.weight,
                    type : e.data.types.map(el => el),
                    img : e.data.sprites.front_shiny,
                    //types : e.data.types(obj => obj)
                })
            })
            return ArrayPoke;
        })
        
        return results;

    } catch (e) {
        return e;
    }
}

const getAllPoke = async () => {
    try {
        const pokemonApi = await pokeApi();
        const pokemonDb = await pokeDB();
        const pokemons = await pokemonDb.concat(pokemonApi);
        return pokemons;
    } catch (e) {
        return e
    }
}


const router = Router();

router.get("/pokemons" , async (req,res) => {

    let {name} = req.query;
    try {
        if(!name){
            const pokemons = await getAllPoke()
            res.send(pokemons)
        } else if (name) {
            const pokemons = await getAllPoke();
            const poke = pokemons.find(obj => obj.name === name);
            if(poke) return res.send(poke);
            return res.send("No hay pokemon con ese nombre")
        }
    } catch (e) {
        res.send(e)
    }
})

router.get("/pokemons/:idPokemon" , async (req,res) => {
    let {idPokemon} = req.params

    try {

        let pokemon = await getAllPoke();
        let id = pokemon.find(obj => obj.ID === idPokemon);

        if(id) return res.status(200).send(id)

        return res.status(404).send("No hay poke con ese ID")
    } catch (e) {
        res.send(e)
    }
})

router.get("/types" , async (req,res) => {
    //API CON LOS TIPOS DE POKEMONES : https://pokeapi.co/api/v2/type
    try {
        const arrayTypes = [];
    
        await axios.get("https://pokeapi.co/api/v2/type").then(obj => {
            obj.data.results.map(typ => arrayTypes.push(typ.name));
        }).catch(e => console.log(e));
    
        const types = arrayTypes.map( async (obj) => {
            await Type.findOrCreate({
                where : {
                    name : obj
                }
            }).catch(e => console.log(e))/* .then(obj => {
                res.send(obj)
            }); */
        })

        res.status(200).send(arrayTypes)
        
    } catch (e) {
        res.send(e)
    }
})

router.post("/pokemons" , async (req,res) => {
    let {name, life , strong, defense, speed, height, weight, types} = req.body;
    try {
        if(name){

            const allPoke = await getAllPoke()
            const isPoke = allPoke.find(obj => obj.name === name.toLowerCase());

            if(!isPoke){            
    
                let newPoke = await Pokemon.create({
                    name : name.toLowerCase(), life , strong, defense, speed, height, weight
                })
    
                let type = await Type.findOrCreate({
                    where : {
                        name : types
                    }
                })
    
                newPoke.addType(type[0])
    
                res.send(newPoke);

            } else {
                res.send("Ya existe un Pokemon con ese nombre")
            }

        } else {
            res.send("Envía un nombre por BODY")
        }
    } catch (e) {
        res.send(e)
    }
})

module.exports = router;
