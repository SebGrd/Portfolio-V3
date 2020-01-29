var express = require('express');
var router = express.Router();

/* GET Veille page */
router.get('/', (req, res, next) => {
    res.render('veille', {title: 'Veille'})
});

module.exports = router;
