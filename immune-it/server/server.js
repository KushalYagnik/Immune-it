const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const recordRoutes = express.Router();
const PORT = 8080;

let RecordsInstance = require('./records.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://testUser1:testUser1@myfirstmongocluster.jnsl9.mongodb.net/testdb1?retryWrites=true&w=majority', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

recordRoutes.route('/').get(function(req, res) {
    RecordsInstance.find(function(err, records) {
        if (err) {
            console.log(err);
        } else {
            res.json(records);
        }
    });
});

recordRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    RecordsInstance.findById(id, function(err, record) {
        res.json(record);
    });
});

recordRoutes.route('/delete/:id').delete(function(req,res){
    RecordsInstance.findByIdAndRemove(req.params.id, (err, record) => {
        if (err) return res.status(500).send(err);
        const response = {
            message: "RecordsInstance successfully deleted",
            id: record._id
        };
        return res.status(200).send(response);
    });
})

recordRoutes.route('/update/:id').post(function(req, res) {
    RecordsInstance.findById(req.params.id, function(err, record) {
        if (!record)
            res.status(404).send("Oops, couldn't find what you asked for!");
        else
            record.user_firstname = req.body.user_firstname;
            record.user_lastname = req.body.user_lastname;
            record.user_birthdate = req.body.user_birthdate;
            record.user_gender = req.body.user_gender;
            record.user_recordfor = req.body.user_recordfor;

            record.save().then(record => {
                res.json('RecordsInstance updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

recordRoutes.route('/add').post(function(req, res) {
    let record = new RecordsInstance(req.body);
    record.save()
        .then(record => {
            res.status(200).json({'record': 'record added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new record failed');
        });
});

recordRoutes.route('/view').get(function(req, res) {
    RecordsInstance.find(function(err, records) {
        if (err) {
            console.log(err);
        } else {
            res.json(records);
        }
    });
});

recordRoutes.route('/view/update').post(function(req, res) {
    let record = new RecordsInstance(req.body);
    record.save()
        .then(record => {
            res.status(200).json({'record': 'immune record added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new record failed');
        });
});

app.use('/records', recordRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});