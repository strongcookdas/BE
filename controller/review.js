const Review = require("../models/review");
const Location = require("../models/location");
const WriteReviewRequest = require("../dto/review/WriteReivewRequest")

exports.writeReview = async (req,res,next) => {
    try {
        const location = await Location.findById(req.params.locationId);
        if(!location){
            const error = new Error("not found location");
            error.status = 404;
            return next(error);
        }
        const review = new WriteReviewRequest(req.body);
        const reviewDoc = await Review.create(
            {
                locationId: location.id,
                ...review
            }
        );
        await reviewDoc.save();
        res.json({message: 'Review created successfully'});
    }catch (err){
        next(err);
    }
}