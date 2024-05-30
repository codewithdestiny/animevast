import mongoose from 'mongoose';
import { config } from 'dotenv';

config(); // Invoke the .env keys and values

export default  async () => {

    var isConnected = false;

    try {

        var url = process.env.MONGO_DB_URL;

        await mongoose.connect(url);

        console.log('Connected to the database');
        
    } catch (error) {
        throw new Error(error?.message);
    }
}