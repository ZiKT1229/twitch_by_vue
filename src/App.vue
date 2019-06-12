<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/live">League of Legends</router-link>
      <router-link to="/live">Grand Theft Auto V</router-link>
      <router-link to="/live">Apex Legends</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
body {
  margin: 0;
  text-align: center;
}

#app {
  background: #19171c;
  color: aliceblue;
  height: 100vh;
}

nav {
  height: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

a {
  color: aliceblue;
  text-decoration: none;
  font-size: 2rem;
  line-height: 50px;
}

a:hover {
  background: #f5f5f580;
}
</style>
