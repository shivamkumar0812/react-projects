const mongoose = require('mongoose');
//taking the mongoDBCompass URL 
const mongoURI = 'mongodb://localhost:27017/inotebook?readPreference=primary&ssl=false&directConnection=true';
const connectToMongo = () => {
  mongoose.connect(mongoURI, ()=> {
    console.log("Connected to Mongo");
  })
}
module.exports = connectToMongo;
