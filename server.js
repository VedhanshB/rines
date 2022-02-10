const express = require('express');
const { redirect } = require('statuses');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

console.log('Server running on port 9090');

app.listen(9090);