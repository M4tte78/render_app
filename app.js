const express = require('express');
var app = express();

app.get('/API/:code', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    var infos = {name:'Express', email:'baillymatteo@icloud.com', code:req.params.code};
    res.send(JSON.stringify(infos));
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});