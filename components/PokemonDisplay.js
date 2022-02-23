app.component('pokemon-display',{
  
  data(){
    return {
      image : {},
      types :[]
    }
  },
  props:{
    name:{
      type: String,
      required: true
    },
  },

  created(){
    P.getPokemonByName(this.name).then( res => {
            this.image = res.sprites.other["official-artwork"].front_default
            this.types = res.types
        })
  },

  template:
    /*html*/
    `<div class="pok-display">
      <div class="pok-container">

        <div class="pok-name">
          {{this.name}}
        </div>

        <img :src="image" width="200" height="200">
        <div class="pok-types">
          <div class="pok-type" v-for="t in types" :class="t.type.name">
            {{t.type.name}}
          </div>
        </div>
      </div>
    </div>`,
})
