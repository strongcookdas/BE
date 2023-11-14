const ERROR_CODES = require("../constants/errorCodes");
const { findUser } = require("../services/userService");
const CustomError = require("../utils/CustomError");

exports.createUser = (req, res) => {
	res.send("create user");
};

exports.loginUser = async (req, res) => {
	const user = await findUser(req.body.username, req.body.password);
	if (user) {
		req.session.userId = user._id;
		res.status(200).send("user logged in");
	} else {
		throw CustomError(
			ERROR_CODES.UNAUTHORIZED,
			"Invalid username or password"
		);
	}
};

exports.logoutUser = (req, res) => {
	req.session.destroy((err) => {
		if (err) {
			throw CustomError(ERROR_CODES.INTERNAL_SERVER_ERROR, err.message);
		} else {
			res.status(200).send("user logged out");
		}
	});
};
