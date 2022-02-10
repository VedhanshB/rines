const express = require('express');
const { redirect } = require('statuses');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// create a api 
app.get('/api', (req, res) => {
    res.json({
        name: 'John',
        age: 30
    });
});

//make a 404 error
app.get('*', (req, res) => {
    res.sendStatus(404);
});


console.log('Server running on port 9090');

app.listen(9090);