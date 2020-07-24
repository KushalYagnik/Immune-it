const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Records = new Schema({
    user_firstname: {
        type: String
    },
    user_lastname: {
        type: String
    },
    user_birthdate: {
        type: Date
    },
    user_gender: {
        type: String
    },
    user_recordfor: {
        type: String
    },
    user_immunization: {
        type: Array
    }
});

module.exports = mongoose.model('Records', Records);

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// let Todo = new Schema({
//     todo_description: {
//         type: String
//     },
//     todo_responsible: {
//         type: String
//     },
//     todo_priority: {
//         type: String
//     },
//     todo_completed: {
//         type: Boolean
//     }
// });

// module.exports = mongoose.model('Todo', Todo);