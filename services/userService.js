const User = require("../models/user");

exports.findUser = async (username, password) => {
	return await User.findOne({ username, password });
};
