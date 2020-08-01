const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ImmuneRecords = new Schema({
    shot_date: {
        type: Date
    },
    shot_brand: {
        type: String
    },
    shot_provider: {
        type: String
    },
    shot_coverage: {
        type: Array
    },
    shot_notes: {
        type: String
    },
    record: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Record'
    }
});

module.exports = mongoose.model('ImmuneRecords', ImmuneRecords);