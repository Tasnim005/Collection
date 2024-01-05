import express from "express";
import userRouter from "../routes/users.js";

const app = express();

app.set('view engine', 'ejs');
app.set('views', process.cwd());

app.get('/', (req, res) => {
    console.log('Here');
    res.render('index', { text: 'Tasnim' });
});

app.use("/users", userRouter);

app.listen(3000);
