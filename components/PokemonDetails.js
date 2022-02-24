app.component('pokemon-details',{
    data(){
        return {
            weight:"",
            height:"",
            description:"",
            spec_name:"",
            img:{},
            abilities: [],
            types: []
        }
    },
    props : {
        name:{
            type: String,
            required: true
        },  
    },
    
    methods : {
        leave() {
            this.$emit("leave")
        },
    },

    created(){
        P.getPokemonByName(this.name).then( res => {
            this.weight= res.weight/10.
            this.height= res.height/10.
            this.img = res.sprites.other["official-artwork"].front_default
            this.types = res.types
            this.abilities = res.abilities
        })
        P.getPokemonSpeciesByName(this.name).then(res =>{
            console.log("hello")
            let lang = "";
            let i = 0;
            while ((lang != "en") && (i < res.genera.length) ){
                
                lang=res.genera[i].language.name;
                i++;
            }
            this.spec_name=res.genera[i-1].genus;
    
            lang = "";
            i = 0;
            while ((lang != "en") && (i < res.flavor_text_entries.length) ){
                lang=res.flavor_text_entries[i].language.name;
                i++;
            }

            this.description = res.flavor_text_entries[i-1].flavor_text

        })
    },

    template:
    /*html*/
        `<div id="pok-details">
            <div id="quit" @click="leave">
                X
            </div>
            <h1>
                the {{this.spec_name}}
            </h1>

            <img :src="img" width="220" height="220">

            <br>

            weight : {{this.weight}} m
            height : {{this.height}} kg

            <div class="pok-types">
                <div class="pok-type" v-for="t in types" :class="t.type.name">
                    {{t.type.name}}
                </div>
            </div>

            <div class="pok-types types-details">
                <div v-for="a in abilities">
                    {{a.ability.name}}
                </div>
            </div>

            <div class="pkm-descr">
                {{this.description}}   
            </div>

        </div>
        `     
})