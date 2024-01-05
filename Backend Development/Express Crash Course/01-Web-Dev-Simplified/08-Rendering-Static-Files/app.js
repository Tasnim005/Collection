import express from "express";
import userRouter from "../routes/users.js";

const app = express();

app.use(express.static('../public'))

app.set('view engine', 'ejs');
app.set('views', process.cwd());

// app.get('/', (req, res) => {
//     res.render('index');
// });

app.use("/users", userRouter);

app.listen(3000);
