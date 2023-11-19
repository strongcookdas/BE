const mongoose = require('mongoose');

const keywordSchema = new mongoose.Schema({
    category: {
        type: String,
        enum: ['hospital', 'restaurant', 'cafe'],
        required: true,
    },
    keywords: {
        type: String,
        required: true,
    },
});

const Keyword = mongoose.model('Keyword', keywordSchema);

module.exports = Keyword;