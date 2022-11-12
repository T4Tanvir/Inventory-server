const mongoose = require("mongoose");

function dbConnector(url) {
  return mongoose.connect(url);
}

module.exports = dbConnector;


    // {
    // "name":"Tanvir",
    // "email":"ahmed311@cum.com",
    // "phnNumber":"01303146451",
    // "address":"dhaka",
    // "role":"Admin",
    // "password":"126"
    //  }

