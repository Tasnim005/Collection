const fs =require('fs')

const directory = "E:/Codes/Node.js Crash Course/04-ChatGPT"
//  In JavaScript strings, backslashes (\) are used as escape characters. To include a literal backslash in a file path, you need to escape it by using a double backslash (\\) or by using forward slashes (/).

fs.readdir(directory, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Files in the directory:', files);
});
