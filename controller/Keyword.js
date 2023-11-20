const Keyword = require("../models/keyword");

exports.createKeyword = async (req, res, next) => {
    try{
        const keywordDoc = await Keyword.create(req.body);
        const keyword = await keywordDoc.save();
        res.json(keyword);
    }catch (err){
        next(err);
    }
}

exports.getKeywordByCategory = async (req, res, next) => {
    try{
        const category = req.query.category;
        const keywords = await Keyword.find(category?{category:req.query.category}:null);
        res.json(keywords);
    }catch (err){
        next(err);
    }
}