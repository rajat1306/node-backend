const express = require('express');
const router = express.Router();

router.get('/all', (req, res) => {
    res.send('Get All API')
})

router.delete('/delete/:id', (req, res) => {
    res.send('Delete by Id')
})

module.exports=router;