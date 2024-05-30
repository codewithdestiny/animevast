import express from 'express';
import dbConnection from './database/dbConnection.js';

const app = express();

var port = 8000;

await dbConnection();

app.listen(port, () => console.log(`Server is running on port ${port}`));