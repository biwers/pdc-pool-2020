<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width="328" height="310">
    <hr>
    <router-link to="/">Home</router-link> | 
    <router-link to="/standings">Standings</router-link> | 
    <router-link to="/teams">Teams</router-link> | 
    <router-link to="/rules">Rules</router-link> | 
    <router-link to="/questions">Questions</router-link> | 
    <router-link to="/records">The Record Books</router-link> | 
    <router-link to="/top-hos">Mo's Top Ho's</router-link> | 
    <router-link to="/players">The Ho's</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
 data() {
   return {

   }
 }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
