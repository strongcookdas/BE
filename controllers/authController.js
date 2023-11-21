const ERROR_CODES = require("../constants/errorCodes");
const { findUser, createUser } = require("../services/userService");
const CustomError = require("../utils/CustomError");

exports.signupUser = async (req, res, next) => {
	try {
		const hashedPasswd = await bcrypt.hash(req.body.password, 10);
		await createUser(
			req.body.email,
			hashedPasswd,
			req.body.nickname,
			req.body.profile // TODO: s3 upload
		);
		res.status(201).send("user created");
	} catch (error) {
		next(error);
	}
};

exports.loginUser = async (req, res, next) => {
	const user = await findUser(req.body.email, req.body.password);
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
	req.session.destroy((error) => {
		if (error) {
			throw CustomError(ERROR_CODES.INTERNAL_SERVER, error.message);
		} else {
			res.status(200).send("user logged out");
		}
	});
};
