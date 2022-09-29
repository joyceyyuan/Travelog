const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: String,
    // title: {type: String, required: true},
    // location: {
    //     type: {
    //         type: String, 
    //         enum: ['Point'], 
    //         required: true
    //     },
    //     coordinates: {
    //         type: [Number],
    //         required: true
    //     }
    // },
    // startDate: {type: Date, required: true},
    // endDate:{type: Date, required: true},
    photoUrl: String,
    text: String,
}, {
    timestamps: true
});


module.exports = mongoose.model('Log', logSchema);