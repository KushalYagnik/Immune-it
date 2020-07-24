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

// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const userRoutes = express.Router();
// const PORT = 8080;

// let Todo = require('./todo.model');

// app.use(cors());
// app.use(bodyParser.json());

// mongoose.connect('mongodb+srv://testUser1:testUser1@myfirstmongocluster.jnsl9.mongodb.net/immune-it-db?retryWrites=true&w=majority', { useNewUrlParser: true });
// const connection = mongoose.connection;

// connection.once('open', function() {
//     console.log("MongoDB database connection established successfully");
// })

// todoRoutes.route('/').get(function(req, res) {
//     Todo.find(function(err, todos) {
//         if (err) {
//             console.log(err);
//         } else {
//             res.json(todos);
//         }
//     });
// });

// todoRoutes.route('/:id').get(function(req, res) {
//     let id = req.params.id;
//     Todo.findById(id, function(err, todo) {
//         res.json(todo);
//     });
// });

// todoRoutes.route('/delete/:id').delete(function(req,res){
//     Todo.findByIdAndRemove(req.params.id, (err, todo) => {
//         if (err) return res.status(500).send(err);
//         const response = {
//             message: "Todo successfully deleted",
//             id: todo._id
//         };
//         return res.status(200).send(response);
//     });
// })

// todoRoutes.route('/update/:id').post(function(req, res) {
//     Todo.findById(req.params.id, function(err, todo) {
//         if (!todo)
//             res.status(404).send("Oops, couldn't find what you asked for!");
//         else
//             todo.todo_description = req.body.todo_description;
//             todo.todo_responsible = req.body.todo_responsible;
//             todo.todo_priority = req.body.todo_priority;
//             todo.todo_completed = req.body.todo_completed;

//             todo.save().then(todo => {
//                 res.json('Todo updated!');
//             })
//             .catch(err => {
//                 res.status(400).send("Update not possible");
//             });
//     });
// });

// todoRoutes.route('/add').post(function(req, res) {
//     let todo = new Todo(req.body);
//     todo.save()
//         .then(todo => {
//             res.status(200).json({'todo': 'todo added successfully'});
//         })
//         .catch(err => {
//             res.status(400).send('adding new todo failed');
//         });
// });

// app.use('/todos', todoRoutes);

// app.listen(PORT, function() {
//     console.log("Server is running on Port: " + PORT);
// });