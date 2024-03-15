// User.js
import mongoose from "mongoose";

const { Schema, model } = mongoose;

const addressSchema = new Schema({
    street: String,
    city: String
})

const userSchema = new Schema({
    name: String,
    age: {
        type: Number,
        min: 1,
        max: 100,
        // Custom validation
        validate:{
            validator: v=> v%2 ===0,
            message: props=> `${props.value} is not an even number`
        }
    },
    //email: String, //Here, email is optional. But, if we want it to be required then,
    email: {
        type: String,
        minLength: 10,
        required: true,
        lowercase: true,
        // uppercase: true,
    },
    createdAt: {
        type: Date,
        // default: new Date()
        immutable: true,
        default: ()=> Date.now()
    },
    updatedAt: {
        type: Date,
        default: ()=> Date.now()
    },
    bestFriend: mongoose.Schema.Types.ObjectId,
    hobbies: [String],
    // address: {
    //     street: String,
    //     city: String
    // }
    address: addressSchema
});

const User = model("User", userSchema);

export default User;
