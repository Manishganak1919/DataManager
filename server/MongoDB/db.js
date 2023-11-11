const mongoose = require('mongoose');

const ConnectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`database is connected successfuly`);
    } catch (error) {
        console.log(`mongodb connection error ${error}`);
    }
}

module.exports = ConnectDB;