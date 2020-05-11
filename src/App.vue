<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/bookshelf">Bookshelf</router-link>  -->
    </div>
    <router-view/>
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
a{
  font-size: 1em;
  text-decoration: none;
  font-weight: bold;
  color: black;
  border-bottom: 0.2em solid black;
}
</style>