import express from 'express';

const app = express();

var port = 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));