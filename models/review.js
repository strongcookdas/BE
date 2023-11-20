const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location', // Assuming your location schema is named 'Location'
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    keywords: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Keyword',
        validate: {
            validator: function (value) {
                return value.length <= 5; // Maximum of 5 keywords
            },
            message: 'Maximum of 5 keywords allowed.',
        },
    },
    review: {
        type: String,
    },
    photos: {
        type: [String], // Array of photo URLs
        validate: {
            validator: function (value) {
                return value.length <= 3; // Maximum of 3 photos
            },
            message: 'Maximum of 3 photos allowed.',
        },
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;