// index.js
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const booksRouter = require('./routers/books');

app.use(cors());
app.use(express.json());

const uri ='mongodb+srv://supipin:supipin99.6.22@cluster0.gygilmz.mongodb.net/?retryWrites=true&w=majority'
const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB Connection Error:', error);
    }
};

app.use('/api/books', booksRouter);

connect();

const server = app.listen(3001, 'localhost', () => {
    console.log(`Node server is running on http://localhost:${server.address().port}`);
});
