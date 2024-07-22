const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse the body of POST requests
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const date = Date();
    // Write the data to a file
    const data = `Name: ${name}, Email: ${email}, Message: ${message}, Date: ${date}\n`;
    fs.appendFile(path.join(__dirname, 'submissions.txt'), data, (err) => {
        if (err) {
            console.error('Error writing to file', err);
            res.status(500).send('Internal Server Error');
        } else {
            
            
            res.redirect('localhost:5500');
            
        }
    });

    

});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:3000`);
});
