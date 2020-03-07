<!-- This is the html that will load for every page. where as main.js is the js that will load for every page -->

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <!-- <router-link to="/about">About</router-link> | --> <!-- these are needed cause the <a> reloads the page and the axios headers will then be lost -->
      <router-link to="/signup">Signup</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/logout">Logout</router-link> | <!-- this is the link to logout..upon clicking this link a create action is triggereed to logout the user -->
      <router-link to="/posts/new">New Post</router-link> |
      <router-link to="/posts/:id">Edit Post</router-link> 
    </div>
    <router-view/> <!-- instead of 'yield', this element represents every individual page..for example the home page with a div that has a class of "home" or about page with a div that has a class of "about" -->

  </div>
</template>

<style>
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}*/
</style>
