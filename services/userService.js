const User = require("../models/user");

exports.findUser = async (email, password) => {
	return await User.findOne({ email, password });
};

exports.findUserById = async (id) => {
	return await User.findById(id);
};
