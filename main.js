const P = new Pokedex.Pokedex()

const pokemons = P.getPokemonsList().then( res => {
    res.count
})


const app = Vue.createApp({
    data(){
        return {pokemons : pokemons}
    },
    
    methods :{
        async infos(n){
            const P = new Pokedex.Pokedex()
            for(var i=1;i<=n;i++){
                const pokemon = await P.getPokemonByName(i)
                this.pokemons.push(pokemon)
            }
            console.log(this.pokemons[0].sprites.front_default)
        },
    },

})

console.log(app.pokemons)
