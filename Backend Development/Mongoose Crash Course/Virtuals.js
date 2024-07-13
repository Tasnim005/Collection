// User.js file variation
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
    bestFriend: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    hobbies: [String],
    // address: {
    //     street: String,
    //     city: String
    // }
    address: addressSchema
});

userSchema.methods.sayHi = function(){
    console.log(`Hi, my name is ${this.name}`)
}

// Statics methods are going to be available on the actual model itself not instances
userSchema.statics.findByName = function(name){
    return this.find({name: new RegExp(name, 'i')})
}

//If we want to add particularly to a query
userSchema.query.byName = function(name){
    return this.where({name: new RegExp(name, 'i')})
}

// Virtuals
userSchema.virtual('namedEmail').get(function(){
    return `${this.name} <${this.email}>`
})

const User = model("User", userSchema);

export default User;
