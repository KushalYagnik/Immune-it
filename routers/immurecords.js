const express = require('express')
const PIRinstance = require('../models/ImmuneRecords')
const auth = require('../middleware/auth')

const router = express.Router()

router.get('/pir/:id', auth, async (req, res) => {
// router.get('api/pir/:id', auth, async (req, res) => {
    try
    {
        const pir = await PIRinstance.findOne({ _id: req.params.id });
        if(pir) res.status(200).json(pir);
        else res.status(404).send("Record not found");
    }
    catch(err) 
    {
        console.error(err);
        res.status(400).send("Error in retrieving record");
    }
});

router.delete('/pir/:id', auth, function(req,res){
// router.delete('api/pir/:id', auth, function(req,res){
    PIRinstance.findByIdAndRemove(req.params.id, (err, pir) => {
        if (err) return res.status(500).send(err);
        return res.status(204);
    });
})

router.put('/pir/:id', auth, function(req, res) {
// router.put('api/pir/:id', auth, function(req, res) {
    PIRinstance.findOne({ _id: req.params.id }, function(err, pir) {
        if (!pir)
        {
            res.status(404).send("Oops, couldn't find what you asked for!");
        }
        else
        {
            pir.shot_date = req.body.shot_date;
            pir.shot_brand = req.body.shot_brand;
            pir.shot_provider = req.body.shot_provider;
            pir.shot_coverage = req.body.shot_coverage;
            pir.shot_notes = req.body.shot_notes;

            pir.save().then(pir => {
                res.status(200).json(pir);
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
        }
    });
});

router.post('/pir', auth, async (req, res) => {
// router.post('api/pir', auth, async (req, res) => {
    try
    {
        const pir = new PIRinstance(req.body);
        const result = await pir.save();
        res.status(200).json(result);
    }
    catch(err) 
    {
        console.error(err)
        res.status(400).send('adding new pir failed');
    }
});

router.get('/pirAll/:record_id', auth, async (req, res) => {
// router.get('api/pirAll/:record_id', auth, async (req, res) => {
    try
    {
        pir = await PIRinstance.find({record: req.params.record_id});
        res.status(200).json(pir);
    }
    catch(err) 
    { 
        res.status(400).send("Error in retrieving pir");
    }
});

module.exports = router