const express = require('express');
const router = express.Router();

router.get('/all', (req, res) => {
    res.send('Get All API')
})

module.exports=router;