const express = require('express');
const router = express.Router();
const Parser = require('rss-parser')
const parser = new Parser();

/* GET Veille page */
router.get('/', async (req, res) => {

    let techFeed = await parser.parseURL('https://www.silicon.fr/feed');
    let juriFeed = await parser.parseURL('https://www.legalis.net/feed/');


    res.render('veille', {title: 'Veille', techFeed, juriFeed})
});

module.exports = router;
