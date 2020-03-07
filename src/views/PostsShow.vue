<template>
  <div class="posts-show">
    <div class="container">
      <router-link v-bind:to="'/posts/' + post.id + '/edit'"> <!-- this is the 'get' verb for the edit form -->
        <h1> {{post.title}}</h1>
      </router-link>
      <p>{{post.body}}</p>
      <p><img v-bind:src="post.image"></p>
    </div>
    <button v-on:click="destroyPost()">Delete</button> <!-- this is not a form, this is a button and has the listener attached to it...IMPORTANT TO NOTE THAT THE DELETE ACTION DOESNT HAVE A PAGE FOR ITSELF...RATHER IT IS A BUTTON WITH A METHOD IN THE MODEL BELOW, WHICH REDIRECTS TO THE INDEX PAGE -->
    </div>
  </div>
</template>

<style>
</style>

<script>

var axios = require('axios');

export default {
  data: function() {
    return {
      post: {} //important to note that this is a hash, cause the dot notation is being called on this hash in the above html..such as post.title
    };
  },
  created: function() {
    axios
      .get("/api/posts/" + this.$route.params.id) // this.$route.params.id provides the id for the individual post needed for the 'get' api request
      .then(response => {
        //console.log(response)
        this.post = response.data;
      });
  },
  methods: {
    destroyPost: function(){
      axios
        .delete('/api/posts/' + this.$route.params.id)
        .then(response => {
          this.$router.push("/")//this is to redirect to the index page..and by redirecting to the index page, you are updating the frontend cause the index page queries the database when the page is loaded (meaning the method in the 'created' is executed)
        });
    }
  }
};
</script>

