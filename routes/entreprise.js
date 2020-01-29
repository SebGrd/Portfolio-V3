var express = require('express');
var router = express.Router();

/* GET Entreprise page */
router.get('/', (req, res, next) => {
    res.render('entreprise', {title: 'Entreprise'})
});

module.exports = router;
