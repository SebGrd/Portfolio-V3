var express = require('express');
var router = express.Router();

/* GET Ecole page */
router.get('/', (req, res, next) => {
    res.render('formation', {title: 'Ecole'})
});

module.exports = router;
