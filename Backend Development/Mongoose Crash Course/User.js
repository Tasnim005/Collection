// User.js
import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: String,
    age: Number,
    email: String,
    createdAt: Date,
    updatedAt: Date,
    bestFriend: mongoose.Schema.Types.ObjectId,
    hobbies: [String],
    address: {
        street: String,
        city: String
    }
});

const User = model("User", userSchema);

export default User;
