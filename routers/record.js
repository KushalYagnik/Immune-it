const express = require('express')
const RecordsInstance = require('../models/Records')
const auth = require('../middleware/auth')

const router = express.Router()

router.get('/records/:id', auth, async (req, res) => {
// router.get('api/records/:id', auth, async (req, res) => {
    try
    {
        const record = await RecordsInstance.findOne({ _id: req.params.id });
        if(record) res.status(200).json(record);
        else res.status(404).send("Record not found");
    }
    catch(err) 
    {
        console.error(err);
        res.status(400).send("Error in retrieving record");
    }
});

router.delete('/records/:id', auth, function(req,res){
// router.delete('api/records/:id', auth, function(req,res){
    RecordsInstance.findByIdAndRemove(req.params.id, (err, record) => {
        if (err) return res.status(500).send(err);
        return res.status(204);
    });
})

router.put('/records/:id', auth, function(req, res) {
// router.put('api/records/:id', auth, function(req, res) {
    RecordsInstance.findOne({ _id: req.params.id, user: req.user._id }, function(err, record) {
        if (!record)
        {
            res.status(404).send("Oops, couldn't find what you asked for!");
        }
        else
        {
            record.user_firstname = req.body.user_firstname;
            record.user_lastname = req.body.user_lastname;
            record.user_birthdate = req.body.user_birthdate;
            record.user_gender = req.body.user_gender;
            record.user_recordfor = req.body.user_recordfor;

            record.save().then(record => {
                res.status(200).json(record);
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
        }
    });
});

router.post('/records', auth, async (req, res) => {
// router.post('api/records', auth, async (req, res) => {
    try
    {
        req.body.user = req.user._id;
        const record = new RecordsInstance(req.body);
        const result = await record.save();
        res.status(200).json(result);
    }
    catch(err) 
    {
        console.error(err)
        res.status(400).send('adding new record failed');
    }
});

router.get('/records', auth, async (req, res) => {
// router.get('api/records', auth, async (req, res) => {
    try
    {
        records = await RecordsInstance.find({user: req.user._id});
        res.status(200).json(records);
    }
    catch(err) 
    { 
        res.status(400).send("Error in retrieving records");
    }
});

module.exports = router