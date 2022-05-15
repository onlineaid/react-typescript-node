const mongoose = require('mongoose');

const url: string = 'mongodb://localhost:27017/e-test1'

const connectDB = async() => {
    try {
        const connectConnection =  await mongoose.connect(url, {
            useNewUrlParser: true,
        })
        console.log(`MongoDB connected with Host : ${connectConnection.connection.host} Yeah..`);
    } catch (err:any) {
        console.error(`Error: ${err.message}`)
        process.exit(1)
    }
}

module.exports = connectDB;
