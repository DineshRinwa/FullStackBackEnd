const mongoose = require('mongoose');
const Mongo_Url = process.env.MONGODB_URL;


const connect = async() => {
    try {
        await mongoose.connect(Mongo_Url);
        console.log("MongoDB is Connected...");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connect;