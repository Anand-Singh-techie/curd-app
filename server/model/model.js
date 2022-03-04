const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    name:{
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true,
        unique: true
    },
    gender:String,
    status:String
})

const Userdb = mongoose.model('userdb',schema);

module.exports = Userdb;