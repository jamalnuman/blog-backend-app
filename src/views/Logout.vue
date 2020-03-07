<template>
  <div class="logout"> <!-- no form or button present..this is a link on the top of the page that removes the jwt from storage..no api calls are necessary..the code for this link and all other links that display on EVERY PAGE is at App.vue -->
  </div>
</template>

<script>
import axios from "axios"; //gives you access to the axios library

export default {
  created: function() {
    delete axios.defaults.headers.common["Authorization"]; //one of the two places the jwt is stored on the frontend ..the other is in the local storage
    localStorage.removeItem("jwt"); // remove the jwt from local storage
    this.$router.push("/"); // redirect to main page 
  }
};
</script>
