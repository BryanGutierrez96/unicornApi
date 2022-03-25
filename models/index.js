const mongoose = require('mongoose');
const Unicorn = require('./Unicorn')
const DB_URL = "mongodb+srv://admin:admin@cluster0.mdsan.mongodb.net/unciorns_App?retryWrites=true&w=majority"

mongoose.connect(DB_URL, (err)=> {
  if(err){
    console.log(err)
  }else{
    console.log('DB connected')
  }
});

module.exports = {
  Unicorn
}

