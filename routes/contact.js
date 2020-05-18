var express = require('express');
var router = express.Router();

/* GET Projects page */
router.get('/', (req, res, next) => {
    res.render('contact', {title: 'Contact'})
});

module.exports = router;
