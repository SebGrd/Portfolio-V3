var express = require('express');
var router = express.Router();

/* GET Veille page */
router.get('/', (req, res, next) => {

    // let error;
    //
    // fetch('https://www.silicon.fr/feed').then( (res) =>{
    //     console.log(res);
    // }).catch( () => {
    //     console.log('Fetch Error');
    //     error += 'Fetch Error';
    // });

    res.render('veille', {title: 'Veille'})
});

module.exports = router;
