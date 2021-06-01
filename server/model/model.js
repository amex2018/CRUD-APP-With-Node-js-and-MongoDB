const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
       
    },
    gender: {type: String},
    status: {type: String}
   
});

const Userdb = mongoose.model('userdb', schema);
module.exports = Userdb;