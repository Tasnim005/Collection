import express from "express";
import userRouter from "../routes/users.js";

const app = express();
// app.use(logger) //middleware should always be defined at the very top of your page

app.set('view engine', 'ejs');
app.set('views', process.cwd());

// if we want middleware to wok on this app.get right here
app.get('/', logger, (req, res) => {
    res.render('index', { text: 'Tasnim' });
});

app.use("/users", userRouter);

function logger(req, res, next){
    console.log(req.originalUrl)
    next()
}

app.listen(3000);
