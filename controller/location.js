const LocationApplyRequest = require("../dto/LocationApplyRequest")
const Location = require("../models/location");

exports.applyLocation = async (req,res,next) => {
 try {
  const location = new LocationApplyRequest(req.body);
  const locationDoc = await Location.create(location);
  await locationDoc.save();
  res.json(location);
 }catch (err){
  next(err);
 }
}