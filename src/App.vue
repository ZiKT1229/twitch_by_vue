<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/lol">League of Legends</router-link>
      <router-link to="/gtav">Grand Theft Auto V</router-link>
      <router-link to="/apex">Apex Legends</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
body {
  margin: 0;
  text-align: center;
  background: #19171c;
}

#app {
  color: aliceblue;
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
