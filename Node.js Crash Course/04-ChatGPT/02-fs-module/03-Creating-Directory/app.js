const fs = require('fs')

fs.mkdir('newDirectory', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Directory created successfully.');
});