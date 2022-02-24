app.component('pokemon-details',{
    data(){
        return {
            weight:"",
            height:"",
            description:"",
            spec_name:"",
            img:{},
            abilities: [],
            types: [],
            stats: [],
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
            this.stats = res.stats
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

            this.description = res.flavor_text_entries[i-1].flavor_text.replace("\n", " ").replace("\f", " ")

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

            <img class="img-details" :src="img" width="320" height="320">

            <br>

            weight : {{this.weight}} kg
            height : {{this.height}} m

            <div class="pok-types">
                <div class="pok-type" v-for="t in types" :class="t.type.name">
                    {{t.type.name}}
                </div>
            </div>

            <div class="pok-abilities">
                <strong>Abilities:</strong>
                <div class="pok-ability" v-for="a in abilities">
                    {{a.ability.name}}
                </div>
            </div>

            <div class="pok-stats">
                <strong>Stats:</strong>
                <div class="pok-stat" v-for="s in stats">
                {{s.stat.name}}:{{s.base_stat}}
                </div>
            </div>

            <div class="pkm-descr">
                {{this.description}}   
            </div>

        </div>
        `     
})