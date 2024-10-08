// app.js
import mongoose, { connect } from "mongoose";
import User from "./User.js";

const atlasURI = 'mongodb+srv://tasnimalam015:666tasNIM666.@cluster-tasnim.t8j91hr.mongodb.net/';

// Connect to MongoDB
connect(atlasURI);

run();
/*
async function run() {
    const user = new User({ name: "Tasnim", age: 21 });
    await user.save();
    console.log(user);
}
*/

/*
async function run() {
    const user = await User.create({ name: "Tasnim", age: 21 })
    user.name = 'Prapto' //Modify
    await user.save();
    console.log(user);
}
*/
/*
async function run() {
    const user = await User.create({
        name: "Tasnim",
        age: 21,
        email: "TEST@test.com",
        hobbies: ["Weight lifting", 'Bowling'],
        address: {
            street: "Main St",
        },
    })
    console.log(user);
}
*/



// to check for error, put entire code block inside try-catch
async function run() {
    try{
        const user = await User.create({
            name: "Tasnim",
            age: 20,
            email: "TEST@test.com",
            hobbies: ["Weight lifting", 'Bowling'],
            address: {
                street: "Main St",
            },
        })
        console.log(user);
    } catch(e){
        console.log(e.message)
        // console.log(e.errors.age)
    }
}
