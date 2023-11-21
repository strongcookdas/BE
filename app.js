const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");

const errorHandler = require("./middlewares/errorHandler");

const app = express();
const port = 3000;

mongoose
	.connect("mongodb://localhost:27017/exchangers", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Successfully connected to MongoDB"))
	.catch((error) => console.error("Connection error", error));

app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: true,
		cookie: {
			secure: false,
			maxAge: 1000 * 60 * 60 * 24 * 7,
		},
	})
);

const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");

app.use("/", indexRouter);
app.use("/auth", authRouter);

app.use(errorHandler);

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
});
