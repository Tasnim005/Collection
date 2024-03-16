// Schema Methods
import mongoose, { connect } from "mongoose";
import User from "./Virtuals.js";

const atlasURI = 'mongodb+srv://tasnimalam015:666tasNIM666.@cluster-tasnim.t8j91hr.mongodb.net/';

// Connect to MongoDB
connect(atlasURI);
run();

async function run() {
    try {
        const user = await User.findOne({name: 'Tasnim', email:'test@test.com'})
        console.log(user.namedEmail)
        // user.sayHi()

        // const user = await User.findByName('Tasnim')

        // const user = await User.find().byName('Tasnim')
        console.log(user)
    } catch (e) {
        console.log(e.message)
    }
}

// Schema middleware--30:00