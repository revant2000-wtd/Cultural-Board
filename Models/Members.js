const Members = require('./DB/connect');
const mongoose = require('mongoose');
const MemberSchema = new mongoose.Schema({
    name:{
        type:String,
        required : [true,'Must provide name...']
    },
    batch_year:{
        type:Number,
        required : [true,"Must provide batch year"]
    },
    roll_no:{
            type:Number,
        required : [true,"Must provide batch year"]
    },
    position:{
        type:String,
        required: [true,"Must provide position..."]
    }
})

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Must provide event title']
    },
    description: {
        type: String
    },
    date: {
        type: Date,
        required: [true, 'Must provide event date']
    },
    organizedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Members',   
        required: true
    }
})
module.exports = mongoose.model('Members',MemberSchema);
module.exports = mongoose.model('Events',EventSchema);