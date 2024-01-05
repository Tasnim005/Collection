import express from 'express';
const app = express();

app.get('/', (req, res) => {
    console.log("Here");

    // To send JSON to the client
    // res.status(500).json({ message: "Error" })

    // To send a file without caring about status codes
    res.json({ message: "Success" });

});

app.listen(3000);
