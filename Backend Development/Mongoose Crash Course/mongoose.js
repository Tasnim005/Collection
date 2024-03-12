// mongoose.js

import mongoose from 'mongoose';

// MongoDB connection URL
const mongoURI = 'mongodb+srv://tasnimalam015:666tasNIM666.@cluster-tasnim.t8j91hr.mongodb.net/';

// Connect to MongoDB
mongoose.connect(mongoURI);

const db = mongoose.connection;

// Event handlers for MongoDB connection
db.on('connected', () => {
    console.log('Connected to MongoDB');
});

db.on('error', (error) => {
    console.error('Error in MongoDB connection:', error);
});

db.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
});

process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log('MongoDB connection disconnected through app termination');
    process.exit(0);
});

export default db;
