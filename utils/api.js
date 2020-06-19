const axios = require('axios'); 
const API = require("../secrets");
const api = {
  getUser(userName, callback, answers) {
    axios.get(`https://api.github.com/users/${userName}`, {headers: {"Authentication": API.API_KEY}})
    .then(function (response) {
      // handle success
      console.log(response.data);
      callback(response.data, answers);
      
     })
     .catch(function (error) {
       // handle error
       console.log(error);
     })
     .finally(function () {
        // always executed
     });
   
  }
};

//  Make a request for a user with a given ID
 
module.exports = api;
