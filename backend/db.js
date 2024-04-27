const moongoose = require('mongoose')
const mongoURI = "mongodb://localhost:27017/inotebook"

const connectToMongo = ()=>{
    moongoose.connect(mongoURI);
}
module.exports = connectToMongo;