const express = require('express');
const router = express.Router();
const {fonts, fontsHome} = require('../data/fonts');

router.get('/', (req, res)=>{
    res.render('home', {
        font: fontsHome
    });
});

router.get('/c/:category', (req, res)=>{
    const selectedCategory = fonts.filter(font=>{
        if(req.params.category == font.category){
            return font
        }
    });
    res.render('c', {
        font: fonts,
        "selectedCategory": selectedCategory,
        categoryName: req.params.category
    });
});

router.get('/download/:slug', (req, res)=>{
    const downloadingFont = fonts.filter(font=>{
        if(req.params.slug == font.slug){
            return font
        }
    })
})

router.get('/attrib', (req, res)=>{
    res.render('attributions');
});

module.exports = router;