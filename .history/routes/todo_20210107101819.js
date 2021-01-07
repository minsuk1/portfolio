const express = require('express');
const router = express.Router();

router.get('/todo', (req,res) => {
    res.send('a.html');
});

module.exports = router;


