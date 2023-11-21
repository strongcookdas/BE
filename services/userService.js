const ERROR_CODES = require("../constants/errorCodes");
const User = require("../models/user");
const CustomError = require("../utils/CustomError");

exports.findUser = async (email, password) => {
	return await User.findOne({ email, password });
};

exports.findUserById = async (id) => {
	return await User.findById(id);
};

exports.findUserByNickname = async (nickname) => {
	return await User.findOne({ nickname });
};

exports.createUser = async (email, password, nickname, profile) => {
	existUser = this.findUser(email, password);
	if (existUser)
		throw CustomError(ERROR_CODES.BAD_REQUEST, "User already exists");
	const user = new User({
		email,
		password,
		nickname,
		profile,
	});
	await user.save();
};
