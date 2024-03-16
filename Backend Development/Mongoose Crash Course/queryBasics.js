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

//  // Don't use update one or update many, find and replace one etc

//For Generic Query, use find method
async function run() {
    try {
        // const user = await User.find({name: 'Tasnim'}) //We are gonna get a bunch of em
        // const user = await User.findOne({name: 'Tasnim'}) //We are gonna get the first one

        //To delete an entry
        // const user = await User.deleteOne({name: 'Tasnim'})

        //where
        // const user = await User.where('name').equals('Tasnim')
        // const user = await User.where('age').gt(24)

        // Changing this together
        const user = await User.where('age')
            .gt(20)
            .lt(30)
            .where('name')
            .equals('Tasnim')
            .populate('bestFriend')
            .limit(1)
            // .select('age')
       
        // user[0].bestFriend = '65f546f49f05f2ccc2890c9b'
        // await user[0].save()    
        console.log(user)

    } catch (e) {
        console.log(e.message)
    }
}