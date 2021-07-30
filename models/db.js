const mongoose = require('mongoose')

const ContactSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        default: 0
    },
    description: {
        type: String
    }   
})

const Contact = module.exports = mongoose.model('ContactForm', ContactSchema)