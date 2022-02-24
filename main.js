const P = new Pokedex.Pokedex()

const app = Vue.createApp({
    data(){
        return {
            list : [],
            detailsName: null,
        }
    },
    
    props:{
        input : {
            type: String,
            required: false
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
        }
    },
})
