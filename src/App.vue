
<template>
  <div>
    <div class="headerWithoutUsername" v-if="username === null">
      <form>
        <input v-model="nameInputField" placeholder="Your Name Here" />
        <button v-on:click="addUserName">Submit Name</button>
      </form>
    </div>
    <div v-if="username !== null">
      <div class="headerWithUsername">
        <h1>{{username}}'s Starter Pokedex</h1>
        <button class="logout" @click="resetUserName">Logout</button>
      </div>
      <hr />
      <div class="links">
        <router-link to="/">
          <button class="button">Gen One</button>
        </router-link>
        <router-link to="/gentwo">
          <button class="button">Gen Two</button>
        </router-link>
      </div>
      <hr />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    username() {
      return this.$store.state.username;
    }
  },
  data() {
    return {
      nameInputField: ""
    };
  },
  methods: {
    addUserName: function(val) {
      this.$store.commit("changeName", this.nameInputField);
    },
    resetUserName: function(val) {
      this.$store.commit("changeName", null);
    }
  }
};
</script>

<style>
/*
font-family: 'Lexend Exa', sans-serif;
font-family: 'Press Start 2P', cursive;
*/
h1 {
  font-family: "Press Start 2P", cursive;
}

.headerWithoutUsername {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  background-color: #a58cf9a4;
  height: 30%;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

form > button {
  background-color: #a68cf9;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  height: 25%;
  font-family: "Lexend Exa", sans-serif;
}

.headerWithUsername {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.headerWithUsername > h1 {
  font-size: 1.2rem;
}

body {
  background-image: url("http://eskipaper.com/images/8-bit-background-1.jpg");
  background-size: cover;
  color: white;
  height: 100vh;
  width: 100vw;
}

.links {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.headerWithUsername > button {
  background-color: #a68cf9;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  height: 10%;
  font-family: "Lexend Exa", sans-serif;
}

.button {
  background-color: #a68cf9;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-family: "Lexend Exa", sans-serif;
}

h2,
p {
  font-family: "Lexend Exa", sans-serif;
}
</style>
