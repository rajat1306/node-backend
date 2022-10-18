const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
require('dotenv').config();

// const port = process.env.DB_PORT || 32221;
const port = 32221;

app.get('/test', async (req,res) => {
    res.send("Welcome to test API!");
});

app.get('/testing', async (req,res) => {
    res.send("Welcome to testing API!!!");  //added for testing
});

app.listen(port, function(err) {
    if(err) {
        console.log("error");
        return;
    }
    console.log('server is listening on', port);
})