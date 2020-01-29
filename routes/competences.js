var express = require('express');
var router = express.Router();

/* GET Projects page */
router.get('/', (req, res, next) => {
    res.render('competences', {title: 'Compétences'})
});

module.exports = router;
