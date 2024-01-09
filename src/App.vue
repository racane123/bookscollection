<template>
  <div id="app" :class="{'dark-mode':isDarkMode }">
    <nav class="navbar navbar-expand-lg navbar-light bg-light text-center">
      <div class="container">
        <router-link to="/" class="navbar-brand">Home</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ">
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">Contact</router-link>
            </li>
            <li class="nav-item">
              <button @click="toggleDarkMode">Toggle Dark Mode</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div>

      <router-view></router-view>


    </div>
    
  </div>

</template>

<script>

export default {
  data(){
    return{
      isDarkMode: false,
    }
  },
  components:{
  },
  methods:{
    toggleDarkMode(){
      this.isDarkMode = !this.isDarkMode
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;500&family=Open+Sans:wght@300&family=Roboto:wght@100;500&display=swap');


body {
  font-family: 'Roboto', sans-serif;
}

nav{
  text-transform: capitalize;
}

.dark-mode{
  background-color: #222;
  color: #fff;
}
</style>