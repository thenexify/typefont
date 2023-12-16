const express = require('express');
const router = express.Router();
const {fonts, fontsHome} = require('../data/fonts');

console.log(fonts[0].name)

router.get('/', (req, res)=>{
    res.render('home', {
        font: fontsHome
    });
});

router.get('/attrib', (req, res)=>{
    res.render('attributions');
});

module.exports = router;