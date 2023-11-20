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