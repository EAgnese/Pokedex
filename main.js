const P = new Pokedex.Pokedex()

const app = Vue.createApp({
    data(){
        return {
            list : []
        }
    },
    
    created(){
        P.getPokemonsList().then( res => {
            this.list = res.results
        })
        
    },
    computed:{
        getList(){
            return this.list
        }
    },
})
