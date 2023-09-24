const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const connectToMongo = async () => {
    const mongoURI = process.env.MONGO_URI;

    try{
        await mongoose.connect(mongoURI, (err)=>{
            if(err){
                console.log(err);
            }
            console.log('connected to mongo Successfully')
    })
    }catch(err){
        console.log(err)

    }
}

module.exports = connectToMongo;