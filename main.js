const P = new Pokedex.Pokedex()

const app = Vue.createApp({
    data(){
        return {
            list : [],
            detailsName: null,
            input : ""
        }
    },
    
    
    created(){
        P.getPokemonsList().then( res => {
            this.list = res.results
        })
        
    },

    methods:{
        changeName(pokname){
            this.detailsName = pokname
        },
        leave(){
            this.detailsName = null
        },
    },
    
    computed:{
        getList(){
            return this.list
        },

        getInput(){
            return this.input
        }
    },
})
