import express from "express";
const app = express();

app.set('view engine', 'ejs');

// Set the views directory to the current working directory
app.set('views', process.cwd());

app.get('/', (req, res) => {
    console.log('Here');
    // Provide only the relative path to index.ejs from the current working directory
    res.render('index', {text: 'Tasnim'});
});

app.listen(3000);

