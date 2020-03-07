<template> <!-- the code here is the same as the code in the signup page.  -->
  <div class="posts-new">
    <form v-on:submit.prevent='createPost()'> <!-- the prevent keyword, prevents the default action of the form, which is to send a web request..and now will invoke the createPost function -->
      <h1>New Post</h1>

      <ul>
        <li v-for="error in errors">{{error}}</li> <!-- if there are any errors, this is a loop for them..this is defined is the sad path defined below in the createPost function  -->
      </ul>


      <div>
        Title: <input type="text" v-model="title"> <!-- the v-model is used to connect the HTML inputs to the Vue.js data hash below. the v-models are connected to the data hash below..which have a key with the same name as the v-model -->
      </div>
      <div>
        Body: <input type="text" v-model="body">
      </div>
      <div>
        Image: <input type="text" v-model="image">
      </div>
      <input type="submit" value="Create"> <!-- not using <button>, but an <input> to submit the form..now you can do so with enter or the submit button -->
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
        title: "",
        body: "",
        image: "",
        errors: []

      };
    },
    created: function() {},
    methods: {
      createPost: function(){
        var postParams = {
          title: this.title, 
          body: this.body, 
          image: this.image
        };

        axios
          .post('/api/posts', postParams)
          .then(response => {
            //console.log(response)..this response is a message confirming your post was saved or that the request was successful. 
            this.$router.push('/posts')//to redirect to another page...in this case, the index page 
          }).catch(error => {
            this.errors = error.response.data.errors; //the last word "errors"...this is defined on the backend..in the controllers..as the sad path
          });
      }
    }
  }
  

</script>