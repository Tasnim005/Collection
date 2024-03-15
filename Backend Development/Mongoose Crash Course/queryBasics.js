// Query Basics
import mongoose, { connect } from "mongoose";
import User from "./User.js";

const atlasURI = 'mongodb+srv://tasnimalam015:666tasNIM666.@cluster-tasnim.t8j91hr.mongodb.net/';

// Connect to MongoDB
connect(atlasURI);
run();

/*
async function run() {
    try{
        const user = await User.findById('65f41d7c7335c1b53fa56aad')
        console.log(user)
    } catch(e){
        console.log(e.message)
    }
}
*/

//For Generic Query, use find method
async function run() {
    try{
        // const user = await User.find({name: 'Tasnim'}) //We are gonna get a bunch of em
        // const user = await User.findOne({name: 'Tasnim'}) //We are gonna get the first one

        //To delete an entry
        const user = await User.deleteOne({name: 'Tasnim'})
        console.log(user) 

        // Don't use update one or update many, find and replace one etc
    } catch(e){
        console.log(e.message)
    }
}

// 21:00