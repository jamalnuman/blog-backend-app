<template>
  <div class="login">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Login</h1>
        <ul> <!-- there are not any specific validations for these errors on the backend..when the response returns cause the email or password doesnt match, an error return message is hardcoded..see below in the methods -->
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
        //this sets the default authorization header after logging in(after the response is returned)
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt; //Bearer XXXXXXXXXXXXXXXX
          localStorage.setItem("jwt", response.data.jwt); //localStorage is a hash..setItem lets you write to the hash and jwt will be the key in the hash and the value will be response.data.jwt
          this.$router.push("/"); //will redirect back to the homepage
        })
        .catch(error => {
          //console.log(error)
          this.errors = ["Invalid email or password."]; //because the backend is not sending back errors when a user logs-in incorrectly, so it is hardcoded. without this error message, the frontend would not have an error message to display to the user because the sessions create action on the backend only sends an empty hash with a status unauthorized.   
          this.email = ""; //clears the input fields in the form
          this.password = ""; //clears the input fields in the form
        });
    }
  }
};
</script>