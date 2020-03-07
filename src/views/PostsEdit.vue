<template>
  <div class="posts-edit">
    <form v-on:submit.prevent='updatePost()'>
      <h1>Edit Post</h1>
      <ul>
        <li v-for="error in errors">{{error}}</li>
      </ul>
      <div>
        Title: <input type="text" v-model="post.title">
      </div>
      <div>
        Body: <input type="text" v-model="post.body">
      </div>
      <div>
        Image: <input type="text" v-model="post.image">
      </div>
      <input type="submit" value="Edit">
      <!-- <button v-on:click='createPost()'>Create Post!</button> -->
    </form>
  </div>
</template>

<style>
</style>

<script>
  var axios = require('axios')

  export default {
    data: function () {
      return {
        post: { //this is not an empty hash (as is the case with the show page), we have input fields that need to filled with a value..this fields are connected with the input via the "v-model"
        title: "",
        body: "",
        image: "",
      },
        errors: []

      };
    },
      created: function() {
        // console.log('yes')
        axios
          .get('/api/posts/' + this.$route.params.id)//this is going to be the id, of the individual post for edit. 
          .then(response => {
            this.post = response.data
          });
    },
    methods: {
      updatePost: function(){

        var postParams = {
          title: this.post.title, //remember this is post.title..cause 'post' is a hash
          body: this.post.body, //remember this is post.body..cause 'post' is a hash
          image: this.post.image //remember this is post.image..cause 'post' is a hash
        };

        axios
          .patch('/api/posts/' + this.$route.params.id, postParams)
          .then(response => {
            this.$router.push('/posts/' + this.$route.params.id) //redirected to the show page..not the index page
          }).catch(error => {
            this.errors = error.response.data.errors;
          });
      }
    }
  }
</script>