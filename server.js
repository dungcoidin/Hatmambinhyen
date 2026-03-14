const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000; // Port number

// Middleware
app.use(express.json());

// MongoDB connection setup
const dbURI = 'your_mongodb_connection_string'; // Replace with your MongoDB connection string
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Message schema and model
const messageSchema = new mongoose.Schema({
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

// API endpoint for creating a message
app.post('/messages', async (req, res) => {
    try {
        const newMessage = new Message({ content: req.body.content });
        await newMessage.save();
        res.status(201).send(newMessage);
    } catch (error) {
        res.status(400).send({ error: 'Failed to create message' });
    }
});

// API endpoint for fetching messages
app.get('/messages', async (req, res) => {
    try {
        const messages = await Message.find();
        res.status(200).send(messages);
    } catch (error) {
        res.status(400).send({ error: 'Failed to fetch messages' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
