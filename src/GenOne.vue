<template>
  <div>
    <div class="buttonContGen1">
      <button class="button poke" v-on:click="bulbasaur">Bulbasaur</button>
      <button class="button poke" v-on:click="charmander">Charmander</button>
      <button class="button poke" v-on:click="squirtle">Squirtle</button>
    </div>
    <div class="pokeCont">
      <h2>Generation One Starters</h2>
      <p>{{pokeDisplay.species.name}}</p>
      <img alt="sprite" v-bind:src="pokeDisplay.sprites.front_default" />
      <p>Type: {{pokeDisplay.types[0].type.name}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      numGen2: 1,
      pokeDisplay: ""
    };
  },
  methods: {
    fetchPokemon: function() {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${this.numGen2}/`)
        .then(res => {
          this.pokeDisplay = res.data;
        });
    },
    bulbasaur: function() {
      this.numGen2 = 1;
      this.fetchPokemon();
    },
    charmander: function() {
      this.numGen2 = 4;
      this.fetchPokemon();
    },
    squirtle: function() {
      this.numGen2 = 7;
      this.fetchPokemon();
    }
  },
  mounted: function() {
    this.fetchPokemon();
  }
};
</script>

<style scoped>
.buttonContGen1 {
  height: 30%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.pokeCont {
  height: 50vh;
  background-color: #a58cf9a1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>