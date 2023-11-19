const Location = require("../models/location");
const AddLocationRequest = require("../dto/admin/AddLocationRequest");

exports.createLocation = async (req, res, next) => {
    try {
        const location = new AddLocationRequest(req.body);
        const locationDoc = await Location.create(location);
        await locationDoc.save();
        res.json(location);
    } catch (err) {
        next(err);
    }
}