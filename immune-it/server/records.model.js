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