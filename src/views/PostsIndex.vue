<template>
  <div class="posts-index"> <!-- by convention, the div class matches the name of the file. also by convention, the div class name is in kabob case -->
    <h1>All Posts</h1>

    <div v-for="post in posts"> <!-- this is iterating throught the posts array on line 27 -->
      <router-link v-bind:to="'/posts/' + post.id"> <!-- v-bind allows js to be written -->
        <!-- this is a web request..the defualt verb for web request is 'get'. this will display a specific blog cause the 'post.id' is in the url -->
        <h4>Name: {{ post.title }}</h4>
      </router-link>
      <p>{{ post.body }}</p>
      <p> <img v-bind:src="post.image"></p> <!-- v-bind is needed to display the images -->
      <br>
    </div>
  </div>
</template>

<style>
</style>

<script>

var axios = require("axios"); //this can either be defined as a variable or imported
// import axios from "axios";

export default {
  data: function() {
    return {
      posts: []
    };
  },
  created: function() {
    
    axios
      .get("/api/posts")
      .then(response => {
        //console.log(response.data)
        this.posts = response.data;
      });
  },
  methods: {}
};
</script>