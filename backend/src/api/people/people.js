const restful = require('node-restful');
const mongoose = restful.mongoose;

const peopleSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },
    cpf: {
        type: String,
        required: true,
        length: 11
    },
    rg: {
        type: String,
        required: true
    },
    cns: {
        type: String,
        length: 15
    }
});

module.exports = restful.model('People', peopleSchema);