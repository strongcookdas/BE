const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    koName: { type: String, required: true },
    enName: { type: String },
    koAddress: { type: String, required: true },
    enAddress: { type: String },
    kioskAvailable: { type: Boolean, required: true },
    parkingAvailable: { type: Boolean, required: true },
    englishSpeaking: { type: Boolean, required: true },
    restroomAvailable: { type: Boolean, required: true },
    description: { type: String },
    category: { type: String },
    image: { type: String },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    isVisible: { type: Boolean, required: true },
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;