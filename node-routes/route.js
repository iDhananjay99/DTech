const express = require('express')
const router = express.Router();
const contact = require('../models/db');

router.get('/about-us', (req, res, next) => {
    res.send('retriving the aboutus');
})

router.post('/contact-us', (req, res, next)=> {
    let newContact = new contact({
        fullname: req.body.fullname,
        email: req.body.email,
        phone: req.body.phone,
        description: req.body.description 
    });

    newContact.save((err, contact) => {
        if(err){
            res.json({msg: 'Failed to Submit, Plz try Again',
        error: err});
        }
        else{
            res.json({msg: 'Form Submitted Successfully'});
        }
    });
});

router.get('/contact-us', (req, res, next) => {
    contact.find( (err, contacts) => {
        res.json(contacts);
    })
})

router.delete('/contact-us/:id', (req, res, next) => {
    contact.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    })
})

module.exports = router