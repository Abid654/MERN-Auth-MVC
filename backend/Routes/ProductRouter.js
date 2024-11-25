const ensureAuthenticated = require('../Middlewares/Auth');

const router = require('express').Router();

router.get('/', ensureAuthenticated, (req,res) => {
    console.log('----logged in user details----', req.user);
    res.status(200).json([
        {
            name:"mobile",
            price: 5000
        },
        {
            name:"laptop",
            price: 10000
        }
    ])
});



module.exports = router;