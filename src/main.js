//this page contains code that will execute for every page in the application..as in any configurations or remembering your jwt token. 
 // This is the js that will load for every page. where as index.html is the html that will load for every page 

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios"; //this is needed to make the seven api calls to the backend 
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

axios.defaults.baseURL = //this is the base url for all axios calls(read the name)
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/"; //ternary operator

var jwt = localStorage.getItem("jwt"); //look in the local storage
if (jwt) { //if you find the jwt 
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt; //then set the authorization, Bearer and JWT..two places where the jwt is stored...in local storage and the axios.defaults.headers.common["Authorization"]
}


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");


